import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import * as MemberService from "../service/MemberService";
import SignUpStyle from "../component/scss/SignUp.module.scss";

const SignUpContainer = () => {
  const [state, setState] = useState({
    id: "",
    password: "",
    name: "",
    email: "",
  });
  const history = useHistory();

  const onChange = (e) => {
    const { value, name } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const signUp = () => {
    const data = {
      id: state.id,
      password: state.password,
      name: state.name,
      email: state.email,
    };

    MemberService.signUp(data)
      .then((response) => {
        history.push(`/`);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div>
        회원가입
        <input
          type="text"
          name="id"
          placeholder="아이디"
          onChange={onChange}
        />{" "}
        <br />
        <input
          type="password"
          name="password"
          placeholder="비밀번호"
          onChange={onChange}
        />
        <br />
        <input type="text" name="name" placeholder="이름" onChange={onChange} />
        <br />
        <input
          type="text"
          name="email"
          placeholder="이메일"
          onChange={onChange}
        />
        <br />
        <button type="button">취소</button>
        <button type="button" onClick={signUp}>
          가입
        </button>
      </div>
    </>
  );
};

export default SignUpContainer;
