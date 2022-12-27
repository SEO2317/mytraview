import React, { useState } from 'react'

const JoinPage = () => {
  const [email, setEmail] = useState("")
  const [name, setName] = useState("")
  const [pw, setPw] = useState("")
  const [confirmpw, setConfirmPw] = useState("")
  const [Phone, setPhone] = useState("")
  const [role, setRole] = useState()

  const onEmailHandler = (event) => {
    setEmail(event.target.value)
  }

  const onNameHandler = (event) => {
    setName(event.target.value)
  }

  const onPwHandler = (event) => {
    setPw(event.target.value)
  }

  const onConfirmPwHandler = (event) => {
    setConfirmPw(event.target.value)
  }

  const onPhoneHandler = (event) => {
    setPhone(event.target.value)
  }

  const onRoleHandler = () => {
    setRole("COMN")
  }

  const onRoleHandler2 = () => {
    setRole("SPEC")
  }


  const toChangePage = () => {

    fetch('http://localhost:8100/users/join', {

      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email,
        pw: pw,
        name: name,
        phone: Phone,
        role: role,
      }),
    })
      // .then(res => res.json())
      .then(res => {
        // console.log(res)
      })

  }
  return (
    <div className='flex items-center justify-center h-[100vh]'>
      <div>
        <div><input name="name" type="text" placeholder="이름" onChange={onNameHandler} className='w-[300px] h-[50px] pl-[10px] m-[10px]' /></div>
        <div><input name="email" type="text" placeholder="이메일"  onChange={onEmailHandler} className='w-[300px] h-[50px] pl-[10px] m-[10px]' /></div>
        <div><input name="pw" type="text" placeholder="비밀번호"  onChange={onPwHandler} className='w-[300px] h-[50px] pl-[10px] m-[10px]' /></div>
        <div><input name="confirmpw" type="text" placeholder="비밀번호 확인" value={confirmpw} onChange={onConfirmPwHandler} className='w-[300px] h-[50px] pl-[10px] m-[10px]' /></div>
        <div><input name="phone" type="text" placeholder="휴대폰" onChange={onPhoneHandler} className='w-[300px] h-[50px] pl-[10px] m-[10px]' /></div>
        <div className='flex' onClick={toChangePage}>
          <div><input type="radio" id="common" name="role" value="common" onClick={onRoleHandler}/>
            <label htmlFor="common">common</label></div>
          <div><input type="radio" id="special" name="role" value="special" onClick={onRoleHandler2}/>
            <label htmlFor="special">special</label>
          </div>
          <button onClick={() => console.log(role)}>롤 확인</button>
        </div>
        {/* <div className='flex'>
          <input type="radio" id="html" name="fav_language" value="HTML">
          <label for="html">HTML</label>
          </input>
          </div> */}
        {/* {RoleList.map((x, i) => <div>
        <input
          type="radio"
          name="role"
          value={x.value}
          onClick={() => {{setCheckedRole(x.value); console.log(checkedRole)}}}
        />
        <label key={i}>
        {x.label}
      </label></div>)}  */}
        {/* <div><input name="common" type="checkbox" placeholder="일반" value={role} onClick={commonHandler} className='w-[300px] h-[50px] pl-[10px] m-[10px]'/>일반</div>
          <div><input name="special" type="checkbox" placeholder="스페셜" value={role} onClick={specialHandler} className='w-[300px] h-[50px] pl-[10px] m-[10px]'/>스페셜</div> */}
      </div>
      <div><button type="button" onClick={toChangePage} className='font-bold text-white rounded-[40px] bg-indigo-500 mt-[10px] h-[48px] w-[100%]'>계정 생성하기</button></div>
    </div>

  )
}

export default JoinPage