import { GithubAuthProvider, signInWithPopup, signInWithRedirect } from "firebase/auth";
import { styled } from "styled-components";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

const Button = styled.span`
  margin-top: 50px;
  background-color: white;
  font-weight: 500;
  width: 100%;
  color: black;
  padding: 10px 20px;
  border-radius: 50px;
  border: 0;
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const Logo = styled.img`
  height: 25px;
`;

export default function GithubButton() {
  const navigate=useNavigate();
  const onClick = async () => {
    try {
      const provider = new GithubAuthProvider();
      // await signInWithPopup(auth, provider);//팝업창으로 요청,취소하면 에러창나옴
      await signInWithRedirect(auth, provider);//요청창으로 이동
      navigate("/")
    } catch (e) {
      console.log(e);
      //이메일로가입한 계정과 깃허브계정의 이메일이 같을경우 발생하는 에러

    }
  };
  return (
    <Button onClick={onClick}>
      <Logo src="/github-logo.svg" />
      Continue with Github
    </Button>
  );
}
