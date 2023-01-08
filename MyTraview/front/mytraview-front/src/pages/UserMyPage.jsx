import { atom, useAtom } from 'jotai'
import { useEffect, useState } from 'react';
import authAtom from '../stores/authAtom';


const UserMypage = () => {
  // const [name,setName] = useState("[]")
  // const [phone,setPhone] = useState("[]")
  // const [pw,setPw] = useState("[]")
  // const [role,setRole] = useState("[]")
//   const [auth, setAuth] = useAtom(authAtom)
  // const [email,setEmail] = useState(auth.email)
  const [user, setUser] = useState("");
  // console.log(auth);
  const accessToken = sessionStorage.getItem("ACCESS_TOKEN")

  console.log("이메일 "+ accessToken);
  useEffect(() => {
    fetch(`http://localhost:8100/users/find`, {
    method: "GET",
    headers: {
     "Content-Type": "application/json",
     "Authorization": "Bearer "+accessToken,
    }
   })
   .then((res) => res.json())
   .then((res) => setUser(res))
  //  .then((res) => {res.json(); setUser(res)})
  } , 

    [])

  return (
    <>
    <h1>MyPage</h1>
    <p>{user.email}</p>
    <p>{user.phone}</p>
    <p>{user.name}</p>
    <p>{user.role}</p>
    <div onClick={() => console.log(user)}>dddddd</div>
    <div>{user.name}</div>
    {/* <button onClick={() => LogoutFunc()}>로그아웃</button>
    {/* {console.log(auth.name)} */}


</>

  )
}

export default UserMypage
