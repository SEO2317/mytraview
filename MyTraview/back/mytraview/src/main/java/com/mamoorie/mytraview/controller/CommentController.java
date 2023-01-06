package com.mamoorie.mytraview.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.http.ResponseEntity;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mamoorie.mytraview.entity.Article;
import com.mamoorie.mytraview.entity.Comment;
import com.mamoorie.mytraview.entity.User;
import com.mamoorie.mytraview.repository.ArticleRepository;
import com.mamoorie.mytraview.repository.CommentRepository;
import com.mamoorie.mytraview.repository.UserRepository;
import com.mamoorie.mytraview.service.CommentService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("comment")
@RequiredArgsConstructor
@CrossOrigin(origins = "http://localhost:3100")
public class CommentController {
	
	private final UserRepository userRepository;
	
	private final ArticleRepository articleRepository;
	
	private final CommentRepository commentRepository;
	
	private final CommentService commentService;
	
	// 댓글 작성 = C
		@PostMapping("/create")
		public ResponseEntity<?> createComment(@Valid @RequestBody Comment.Request req) {
			Comment comment = Comment.Request.toEntity(req);

			Article findArticle = articleRepository.findById(comment.getArticleId()).get();
			User findUser = userRepository.findByName(req.getWriter());
			comment.setUser(findUser);
			comment.setArticle(findArticle);
			comment.setWriter(findUser.getName()); // writer와 Name 확인용
			comment.setArticleId(findArticle.getId()); // 임시저장
			commentService.saveComment(comment);

			Comment.Response res = Comment.Response.toResponse(comment);
			return ResponseEntity.ok().body(res);
		}

		// 댓글 전체 조회 = R
		@GetMapping("/articleId={id}")
		public ResponseEntity<?> getCommentList(@PathVariable Integer id) {

			List<Comment> comments = commentService.retrieveCommentList(id);
			List<Comment.Response> commentList = Comment.Response.toResponseList(comments);

			return ResponseEntity.ok().body(commentList);
		}
		
		@GetMapping("/name")
		public ResponseEntity<?> getCommentListByName(@RequestBody Comment.Request req){
			List<Comment> comments = commentRepository.findAllByWriter(req.getWriter());
			List<Comment.Response> res = Comment.Response.toResponseList(comments);
			return ResponseEntity.ok().body(res);
		}

		// 댓글 수정 = U
		@PutMapping
		public ResponseEntity<?> updateComment(@Valid @RequestBody Comment.Request req) {

			Comment updatedComment = commentRepository.findById(req.getId()).get();

			if (updatedComment.getWriter().equals(updatedComment.getWriter())) {

				commentService.updateComment(req);
				Comment.Response res = Comment.Response.toResponse(updatedComment);
				return ResponseEntity.ok().body(res);
			}

			return ResponseEntity.ok().body("해당 댓글 작성자만 이 요청을 할 수 있습니다.");
		}

		// 댓글 삭제 = D
		@DeleteMapping
		@Transactional
		public ResponseEntity<?> deleteComment(@RequestBody Comment.Request req) {

			Comment findComment = commentRepository.findById(req.getId()).get();

			if (findComment.getWriter().equals(findComment.getWriter())) {

//			Comment comment = Comment.Request.toEntity(req);

				commentService.deleteComment(findComment);

				List<Comment> updatedComments = commentService.retrieveCommentList(findComment.getArticleId());

				List<Comment.Response> res = Comment.Response.toResponseList(updatedComments);

				return ResponseEntity.ok().body(res);
			}

			return ResponseEntity.badRequest().body("해당 댓글 작성자만 이 요청을 할 수 있습니다.");
		}
		
		// 대댓글 생성
		@PostMapping("/createReply")
		public ResponseEntity<?> createReplyComment(@RequestBody Comment.Request req){
			
			Comment replyComment = Comment.Request.toEntity(req);
			
			Comment findComment = commentRepository.findById(req.getParentId()).get();
			
			replyComment.setCommentLevel(1);
			
			replyComment.setReplyComment(findComment);
			
			Comment createReplyComment = commentRepository.save(findComment);
			
			return ResponseEntity.ok(Comment.Response.toResponse(createReplyComment));
			
		}
		
		// 대댓글 수정
		@PutMapping("/updateReply")
		public ResponseEntity<?> updateReplyComment(@RequestBody Comment.Request req){
			
			Comment findReplyComment = commentRepository.findById(req.getId()).get();
			
			findReplyComment.setContent(req.getContent());
			
			Comment updateReplyComment = commentRepository.save(findReplyComment);
			
			Comment.Response res = Comment.Response.toResponse(updateReplyComment);
			
			return ResponseEntity.ok(res);
			
		}
		
		
		// 대댓글 삭제
		@DeleteMapping("/deleteReply")
		@Transactional
		public ResponseEntity<?> deleteReplyComment(@RequestBody Comment.Request req){
			
			Comment findReplyComment = commentRepository.findById(req.getId()).get();
			
			commentRepository.delete(findReplyComment);
			
			return ResponseEntity.ok(Comment.Response.builder().content("삭제가 정상적으로 완료 되었습니다.").build());
		}
	
}
