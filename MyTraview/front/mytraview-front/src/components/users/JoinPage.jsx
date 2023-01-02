// import alertGradient from '@material-tailwind/react/theme/components/alert/alertGradient' // 메터리얼-테일윈드
import React, { useState } from 'react'

const JoinPage = () => {
  const [email, setEmail] = useState()
  const [name, setName] = useState("")
  const [pw, setPw] = useState("")
  const [confirmpw, setConfirmPw] = useState("")
  const [agrees,setAgrees] = useState(false)
  const [Phone, setPhone] = useState("")
  const [role, setRole] = useState()

  const [emailError, setEmailError] = useState(false)
  const [pwError,setPwError] = useState(false)
  const [confirmpwError,setConfirmPwError] = useState(false)
  const [nameError,setNameError] = useState(false)
  const [phoneError,setPhoneError] = useState(false)

  const onEmailHandler = (event) => {
    const emailRegex = new RegExp("([0-9a-zA-Z_\.-]+)@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$");
    if(!event.target.value || !(emailRegex.test(event.target.value))) 
    setEmail(false);
    else {setEmailError(true);
    setEmail(event.target.value)}
  }

  const onNameHandler = (event) => {
    setNameError(false);
    setName(event.target.value)
  }

  const onPwHandler = (event) => {
    const pwRegex = new RegExp("^[A-Za-z0-9]{4,12}$");
    if((!event.target.value && (pwRegex.test(event.target.value))))
    setPwError(false);
    else setConfirmPwError(true);
    setPw(event.target.value)
  }

  const onConfirmPwHandler = (event) => {
    if(pw === event.target.value) setConfirmPwError(false);
    else setConfirmPwError(true);
    setConfirmPw(event.target.value)
  }

  const onPhoneHandler = (event) => {
    // const phoneRegex = new RegExp("(010)-\d{3,4}-\d{4}");
    // if((!event.target.value || (phoneRegex.test(event.target.value))))
    // setPhone(false);
    // else setPhoneError(true);
    setPhone(event.target.value)
  }

  const onRoleHandler = () => {
    setRole("COMN")
  }

  const onRoleHandler2 = () => {
    setRole("SPEC")
  }
  
  const checkAgreeHandler = () => {
    agrees === false ? setAgrees(true) : setAgrees(false)
  }


  const validation = () => {
    if(!email) setEmailError(true);
    if(!pw) setPwError(true);
    if(!confirmpw) setConfirmPwError(true);
    if(!Phone) setPhoneError(true);
    if(!agrees) setAgrees(true);
    if(!name) setName(true);

    if(email && pw && confirmpw && name && Phone) return true;
    else return false;
  }

  const toChangePage = () => {
    validation()
     
    fetch('http://localhost:8100/users/join', {

      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept' : 'application/json'
      },
      body: JSON.stringify({
        email: email,
        pw: pw,
        name: name,
        phone: Phone,
        role: role,
        agrees: agrees,
      })
      
    })
      .then(res => res.json())
      .then(res => {
        console.log(res)
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
          <div className="flex">
						<input type="checkbox" name='agrees' onClick={checkAgreeHandler} className="mt-10 mb-16 border-sky-400" defaultValue="" />
					</div>
          {/* <div><input type="checkbox" onClick={toChangePage} className="mt-10 mb-16 border-sky-400" defaultValue="" /></div> */}
          <button onClick={() => {console.log(role);}}>롤 확인</button>
          <button onClick={() => {console.log(email);}}>이메일 확인</button>
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