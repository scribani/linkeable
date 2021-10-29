import styled from "@emotion/styled";
import React from "react";
import { LargeButton } from "../components/Buttons";
import { Container } from "../components/UI/Container";

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
    color:var(--gray-2);
    align-self: flex-start;
    margin-left: 45px;
  }
  p {
    margin: 0;
    font-size: 48px;
    font-weight: bold;
    span {
      background-color: var(--gray-2);
      color: #fff;
      padding: 2px;
      border-radius: 10px;
    }
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
  return (
    <Container>
      <LoginContainer>
        <h2> Welcome to ....</h2>
        <p>
          Linke <span>able</span>
        </p>
        <ButtonContainer>
          <LargeButton> Continue As  Guest</LargeButton>
          <LargeButton>Login</LargeButton>
        </ButtonContainer>
      </LoginContainer>
    </Container>
  );
};
export default Login;