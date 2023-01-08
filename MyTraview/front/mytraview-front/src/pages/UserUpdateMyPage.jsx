import { useAtom } from 'jotai'
import React, { useEffect, useState } from 'react'
import authAtom from '../stores/authAtom'


const UserUpdateMyPage = () => {
    const [name,setName] = useState("")
    const [phone,setPhone] = useState("")
    const [pw,setPw] = useState("")
    const [role,setRole] = useState("")
    const [email,setEmail] = useAtom(authAtom)
    const [user, setUser] = useState("");

    const onRoleHandler = () => {
        setRole("ROLE_COMM")
      }
    
      const onRoleHandler2 = () => {
        setRole("ROLE_SPEC")
      }

    const handleModify = () => {
    
    if(email === "" || pw === "") {
    
    } else {
        
        let headers = new Headers({
            "Content-Type": "application/json",
        })

        const accessToken = sessionStorage.getItem("ACCESS_TOKEN")
        if(accessToken && accessToken !== null){
            headers.append("Authorization", "Bearer " + accessToken);
        }

        const req = {
            phone : phone,
            pw : pw,
            role: role,
            name : name
        }
        console.log("수정 정보: "+req);
        // console.log("회원 정보 수정을 위한  토큰 확인: " +accessToken );
        const options = {
            method: 'PATCH',
            headers: headers,
            body: JSON.stringify(req)
        };
        
        fetch(`http://localhost:8100/users/patch`, options)
            .then( (res) => res.json() )
            .then( (res) => {
                console.log(res);
            })
            .catch(error => console.error('본인만 수정가능합니다.', error));
        console.log("handleModify clicked button")
        
        }
    }
    const handleEraser = () => {
        let headers = new Headers({
            "Content-Type": "application/json",
        })

        const accessToken = sessionStorage.getItem("ACCESS_TOKEN")
        if(accessToken && accessToken !== null){
            headers.append("Authorization", "Bearer " + accessToken);
        }

        const req = {
            email: email,
            phone : phone,
            pw : pw,
            role: role,
            name : name
        }
        
        const options = {
            method: 'DELETE',
            headers: headers,
        };

        fetch(`http://localhost:8100/users/delete`, options)
            .then(response => {
                if (response) { alert("삭제가 완료되었습니다.") 
                // router.push("/Board")
            } else { alert("본인만 삭제 가능합니다.") }
            })
            .catch(response => response.resMessage);
        console.log("handledelete clicked button")
    }

    useEffect(() => {

        const accessToken = sessionStorage.getItem("ACCESS_TOKEN")
        
        fetch('http://localhost:8100/users/find',{

        method: "GET",
        headers: {
          'Content-Type': 'application/json',
          "Authorization": "Bearer " + accessToken
        }
        
      })
        .then( (res) => res.json() )
        .then( (res) => {setUser(res);
         console.log(res)}
        )
        .catch(error => console.error('본인만 수정가능합니다.', error));
    console.log("handleModify clicked button")  
    },[])

  return (
    <div className="opacity-80">
    <div className='max-w-2xl px-6 py-10 m-auto bg-gray-300 rounded-md bg-opacity-20'>
        </div>
        <div>
            <div className="items-center w-full h-[400px] text-gray-700 bg-gray-100 rounded-md resize-none mb-9 text-center">
                비번
                <textarea type="text" name="pw" value={pw}  placeholder="비밀번호를 수정할 수 있습니다." onChange={(e) => {setPw(e.target.value)}} className="items-center w-full h-[400px] text-gray-700 bg-gray-100 rounded-md resize-none mb-9 text-center" />
            </div>
        </div>
        <div>
            <div className="items-center w-full h-[400px] text-gray-700 bg-gray-100 rounded-md resize-none mb-9 text-center">
                이름
                <textarea type="text" name="name" value={name} placeholder={user.name} onChange={(e) => {setName(e.target.value)}} className="items-center w-full h-[400px] text-gray-700 bg-gray-100 rounded-md resize-none mb-9 text-center" />
            </div>
        </div>
        <div>
            <div className="items-center w-full h-[400px] text-gray-700 bg-gray-100 rounded-md resize-none mb-9 text-center">
                핸드폰
                <textarea type="text" name="phone" value={phone} placeholder={user.phone} onChange={(e) => {setPhone(e.target.value)}} className="items-center w-full h-[400px] text-gray-700 bg-gray-100 rounded-md resize-none mb-9 text-center" />
            </div>
        </div>
        {/* <div>
            <div className="items-center w-full h-[400px] text-gray-700 bg-gray-100 rounded-md resize-none mb-9 text-center">
                권한
                <textarea type="text" name="role" placeholder="당신의 고민을 적어보세요" onChange={(e) => {setRole(e.target.value)}} className="items-center w-full h-[400px] text-gray-700 bg-gray-100 rounded-md resize-none mb-9 text-center" />
            </div>
        </div> */}
        <div><input type="radio" id="common"  name="role" value="common" onClick={onRoleHandler}/>
            <label htmlFor="common">common</label></div>
          <div><input type="radio" id="special" name="role" value="special" onClick={onRoleHandler2}/>
            <label htmlFor="special">special</label>
          </div>
            <button type='delete' onClick={handleEraser} className='float-right px-5 py-2 font-bold border-2 rounded-lg text-neutral-100 hover:bg-sky-300'>글 삭제</button>
            <button type='modify' onClick={handleModify} className='float-right px-5 py-2 font-bold border-2 rounded-lg text-neutral-100 hover:bg-sky-300'>글 수정</button>

    </div>
    )
  }
export default UserUpdateMyPage