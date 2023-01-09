// import alertGradient from '@material-tailwind/react/theme/components/alert/alertGradient' // 메터리얼-테일윈드
import React, { useState } from 'react'

const SignUpPage = () => {
  const [email, setEmail] = useState()
  const [name, setName] = useState("")
  const [pw, setPw] = useState("")
  const [confirmpw, setConfirmPw] = useState("")
  const [phone, setPhone] = useState("")
  const [role, setRole] = useState()
 
  const [emailMessage,setEmailMessage] = useState("")
  const [nameMessage,setNameMessage] = useState("")
  const [pwMessage,setPwMessage] = useState("")
  const [confirmpwMessage,setConfirmPwMessage] = useState("")
  const [phoneMessage, setPhoneMessage] = useState("")
  const [rollCheckFlag, setRollCheckFlag] = useState(false);
  const [joinFlag, setJoinFlag] = useState(true)
  const [duplicateFlag, setDuplicateFlag] = useState(false)

  const onChangeName = (e) => {
    const currentName = e.target.value;
   setName(currentName);

   if (currentName.length > 5) {
     setNameMessage("이름은 2글자 이상 5글자 이하로 입력해주세요!");
     setJoinFlag(false)
   } else {
     setName(currentName)
     setJoinFlag(true)
   }
  }


  const onChangeEmail = (e) => {
    const currentEmail = e.target.value;
    setEmail(currentEmail)
    const emailRegex =  /^[A-Za-z0-9_]+[A-Za-z0-9]*[@]{1}[A-Za-z0-9]+[A-Za-z0-9]*[.]{1}[A-Za-z]{1,3}$/;
    
    if(!emailRegex.test(currentEmail)) {
      setEmailMessage('이메일이 형식이 올바르지 않습니다.')
      setJoinFlag(false)
    } else {
      setEmailMessage('사용가능한 이메일입니다.')
      setEmail(currentEmail)
      setJoinFlag(true)
    }
  }

  const onChangePw = (e) => {
    const currentPw = e.target.value;
    setPw(currentPw)
    const pwRegex = /^[A-Za-z0-9]{4,12}$/;

    if(!pwRegex.test(currentPw)){
      setPwMessage('비밀번호 형식이 올바르지 않습니다.')
      setJoinFlag(false)
    } else {
      setPwMessage('사용가능한 비밀번호입니다.')
      setPw(currentPw)
      setJoinFlag(true)
    }
  }
  

  const onChangePwConfirm = (e) => {
    const currentPwConfirm = e.target.value;
    if (pw !== currentPwConfirm) {
      setConfirmPwMessage("땡!~ 비밀번호가 일치하지 않습니다.");
      setJoinFlag(false)
    } else {
      setConfirmPwMessage("똑같은 비밀번호를 입력했습니다.");
      setConfirmPw(currentPwConfirm)
      setJoinFlag(true)
    }
  }

  const onChangePhone = (e) => {
    const currentPhone = e.target.value;
    setPhone(currentPhone);
    const phoneRegExp = /^01([0])-?([0-9]{4})-?([0-9]{4})$/;
 
    if (!phoneRegExp.test(currentPhone)) {
      setPhoneMessage("올바른 형식이 아닙니다!");
      setJoinFlag(false)

    } else {
      setPhoneMessage("사용 가능한 번호입니다:-)");
      setPhone(currentPhone)
      setJoinFlag(true)
    }
  }

  const checkEmailDuplicate = () => {
    fetch(`http://localhost:8100/users/duplicate?email=${email}`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(res => res.json())
    .then((res) => {alert(res.resMessage);
      console.log(res);
      if(res.resMessage === "해당 이메일은 사용 가능합니다."){
        setDuplicateFlag(true)
      }else{
        setDuplicateFlag(false)
      }
    })
    .catch((res)=>{
      alert(res.resMessage);
      setDuplicateFlag(false)
    })
  }

  


  const onRoleHandler = () => {
    setRole("COMN");
    setRollCheckFlag(true);
  }

  const onRoleHandler2 = () => {
    setRole("SPEC");
    setRollCheckFlag(true);
  }


  const join = () => {
    // rollCheckFlag === false먼 실행 못하게

    if(duplicateFlag&&email&&name&&pw&&confirmpw&&rollCheckFlag&&phone&&joinFlag){
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
        phone: phone,
        role: role
      })
      
    })
      .then(res => res.json())
      .then((res) => {
        console.log(res);
        alert("회원가입을 환영해요!! 로그인 페이지로 이동합니다~")
        window.location.href = "/SignInPage"
      })
      
    }else{
      alert("입력하신 내용을 확인 후 다시 시도해주세요.")
    }
  }
  return (
    <div className='flex items-center justify-center h-[100vh]'>
      <div>
        <div>
          <input name="name" type="text" placeholder="이름" onChange={onChangeName} className='w-[300px] h-[50px] pl-[10px] m-[10px]' />
          <p className="message"> {nameMessage} </p>
        </div>
        <div>
          <input name="email" type="text" placeholder="이메일"  onChange={onChangeEmail} className='w-[300px] h-[50px] pl-[2px] m-[10px]' />
          <button className='float-right text-[30px] text-white rounded-[40px] bg-indigo-500 px-[20px] mt-[0px] h-[80px] w-[200px]' onClick={checkEmailDuplicate}>중복확인</button>
          <p className="message"> {emailMessage} </p>
        </div>
        <div>
          <input name="pw" type="text" placeholder="비밀번호"  onChange={onChangePw} className='w-[300px] h-[50px] pl-[10px] m-[10px]' />
          <p className="message"> {pwMessage} </p>
        </div>
        <div>
          <input name="confirmpw" type="text" placeholder="비밀번호 확인" onChange={onChangePwConfirm} className='w-[300px] h-[50px] pl-[10px] m-[10px]' />
          <p className="message"> {confirmpwMessage} </p>
        </div>
        <div>
          <input name="phone" type="text" placeholder="휴대폰" onChange={onChangePhone} className='w-[300px] h-[50px] pl-[10px] m-[10px]' />
          <p className="message"> {phoneMessage} </p>
        </div>
        <br />
        <div className='flex'>
          <div>
            <label htmlFor="common">common</label></div>
            <input type="radio" id="common" name="role" value="common" onClick={onRoleHandler}/>
          <div>
            <label htmlFor="special">special</label>
            <input type="radio" id="special" name="role" value="special" onClick={onRoleHandler2}/>
          </div>
        
        </div>
        <br />
        <div>
          <button onClick={() => {console.log(duplicateFlag);}}>duplicateFlag 값 확인용</button>
        </div>
      </div>
      <div><button type="button" onClick={join} className='font-bold text-white rounded-[40px] bg-indigo-500 mt-[370px] h-[48px] w-[100%]'>계정 생성하기</button></div>
    </div>

  )
}

export default SignUpPage