import React, { Component } from 'react';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import ImageUploader from "quill-image-uploader";
import ImageResize from 'quill-image-resize';

Quill.register("modules/imageUploader", ImageUploader);
Quill.register("modules/ImageResize", ImageResize);

class EditorComponent extends Component {
  constructor(props) {
    super(props);
  }

  modules = {
    toolbar: [
      //[{ 'font': [] }],
      [{ 'header': [1, 2, 3, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
      ['link', 'image'],
      [{ 'align': [] }, { 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
      ['clean']
    ],

    ImageResize: { // 이미지 사이즈 조절 모듈
      parchment: Quill.import('parchment')
    },

    imageUploader: { // 이미지 업로더 모듈
      upload: (file) => {
        return new Promise((resolve, reject) => {
          const formData = new FormData();
          formData.append("image", file);

          fetch(
            "https://api.imgbb.com/1/upload?key=e5ca28d22d9a24e39caad1601854387e",
            {
              method: "POST",
              body: formData,
            }
          )
            .then((response) => response.json())
            .then((result) => {
              console.log(result);
              resolve(result.data.url);
            })
            .catch((error) => {
              reject("Upload failed");
              console.error("Error:", error);
            });
        });
      },
    },
  }

  formats = [
    //'font',
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image',
    'align', 'color', 'background',
  ]

  render() {
    const { value, onChange } = this.props;
    return (
      // div가 검정, quill이 흰 선
      <div style={{ height: "120vh"}}> 

        <ReactQuill
          style={{ height: "100vh"}}
          theme="snow"
          modules={this.modules}
          formats={this.formats}
          value={value || ''}
          onChange={(content, delta, source, editor) => onChange(editor.getHTML())} />
      </div>
    )
  }
}
export default EditorComponent