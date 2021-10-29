import logo from "../assets/logo.png";
import styled from "@emotion/styled";
import { useContext } from "react";
import { useHistory } from "react-router";
import { LargeButton } from "../components/Buttons";
import { Container } from "../components/UI/Container";
import { SessionContext } from "../contexts/SessionContext";
import {
  loginAnonymously,
  loginWithGoogle,
  logOut,
} from "../services/firebase/auth";

const LoginContainer = styled.div`
  margin: auto;
  height: 600px;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  h2 {
    font-size: 24px;
    color: var(--gray-2);
    align-self: flex-start;
    margin-left: 45px;
  }
  img {
    width: 270px;
    height: 68px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
  width: inherit;
  gap: 15px;
`;

const Login = () => {
  const { session, signIn, signOut } = useContext(SessionContext);
  const { push } = useHistory();
  const name = session.userData?.displayName || "Guest";

  async function handleSession(e) {
    const buttonText = e.target.textContent;
    let data;

    switch (buttonText) {
      case "Continue as Guest":
        data = await loginAnonymously();
        signIn(data.token, data.user);
        return push("/candidates");
      case "Logout":
        await logOut();
        signOut();
        break;
      default:
        data = await loginWithGoogle();
        signIn(data.token, data.user);
        return push("/candidates");
    }
  }

  const sessionButton = session.token ? (
    <LargeButton onClick={handleSession}>Logout</LargeButton>
  ) : (
    <LargeButton onClick={handleSession}>Login</LargeButton>
  );

  return (
    <Container>
      <LoginContainer>
        <h2> Welcome to ....</h2>
        <img src={logo} alt="Linkable logo" />
        <ButtonContainer>
          <LargeButton onClick={handleSession}>Continue as {name}</LargeButton>
          {sessionButton}
        </ButtonContainer>
      </LoginContainer>
    </Container>
  );
};
export default Login;
