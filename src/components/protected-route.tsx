import { Navigate } from "react-router-dom";
import { auth } from "../firebase";

//로그인한 유저는 볼수있고, 로그인하지 않은 경우 로그인 또는 계정생성페이지로 리이렉션된다
export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = auth.currentUser; //현재 로그인유저or null
  console.log("로그인했나요?",user);
  if (user === null) {
    return <Navigate to="/login" />;
  }
  return children;
}
