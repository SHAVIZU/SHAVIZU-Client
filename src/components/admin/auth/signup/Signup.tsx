import React from "react";
import { useState } from "react";
import * as S from "../../styles";
import { signupRequest } from "../../../../lib/api/signup";
import { useNavigate } from "react-router-dom";

const imgSizeArr = [
  { width: "400", height: "280", id: "se" },
  { width: " 450", height: "475", id: "th" },
  { width: "600", height: "400", id: "4th" },
];

const Signup = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    id: "",
    pw: "",
    pwCheck: "",
    reNum: "",
    shopName: "",
    name: "",
    openDate: "",
  });
  const { id, pw, pwCheck, reNum, shopName, name, openDate } = inputs;
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  const requestSignupApi = () => {
    signupRequest(id, pw, shopName, reNum, name, openDate)
      .then((res) => {
        localStorage.setItem("access_token", res.data.access_token);
        alert("회원가입이 완료되었습니다.");
        navigate("/");
      })
      .catch((err) => {
        if (err.response.status === 400) {
          alert("아이디 혹은 비밀번호를 확인해주세요");
        } else if (err.response.status === 409) {
          alert("이미 존재하는 아이디 혹은 사업자 등록번호입니다.");
        } else {
          alert("예기치못한 오류가 발생하였습니다.");
        }
      });
  };
  const addFileFunc = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files;
    if (!file) {
      return;
    }
    console.log(file);
  };
  return (
    <>
      <S.Input placeholder="아이디" name="id" value={id} onChange={onChange} />

      <form>
        <S.Input
          autoComplete="off"
          placeholder="비밀번호"
          type="password"
          name="pw"
          value={pw}
          onChange={onChange}
        />
      </form>

      <form>
        <S.Input
          autoComplete="off"
          placeholder="비밀번호 확인"
          type="password"
          name="pwCheck"
          value={pwCheck}
          onChange={onChange}
        />
      </form>

      <S.Input
        placeholder="사업자 등록번호"
        name="reNum"
        value={reNum}
        onChange={onChange}
      />
      <S.Input
        placeholder="편집샵 이름"
        name="shopName"
        value={shopName}
        onChange={onChange}
      />
      <S.Input
        placeholder="대표자명"
        name="name"
        value={name}
        onChange={onChange}
      />
      <S.Input
        placeholder="개업일자 (YYYY-MM-DD)"
        name="openDate"
        value={openDate}
        onChange={onChange}
      />
      <S.ImgWrap>
        <S.SignupImg imgWidth="485px" imgHeight="275px" htmlFor="fi">
          <span>1200 X 680</span>
        </S.SignupImg>
        <input
          type="file"
          id={"fi"}
          style={{ display: "none" }}
          accept=".jpg, jpeg, .png"
          onChange={addFileFunc}
        />
        {imgSizeArr.map((size, i) => (
          <S.SignupImg
            imgWidth={size.width + "px"}
            imgHeight={size.height + "px"}
            htmlFor={size.id}
            key={i}
          >
            <span>
              {size.width} X {size.height}
            </span>
            <input
              type="file"
              id={size.id}
              onChange={addFileFunc}
              style={{ display: "none" }}
              accept=".jpg, jpeg, .png"
            />
          </S.SignupImg>
        ))}
      </S.ImgWrap>
      <S.Submit onClick={() => requestSignupApi()}>회원가입</S.Submit>
    </>
  );
};

export default Signup;
