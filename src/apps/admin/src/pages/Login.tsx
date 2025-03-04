import styled from "styled-components";
import { useState } from "react";
import { useApolloClient, useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";

import { LOGIN_USER_MUTATION } from "../graphql";
import { ShieldAlert, User, KeyRound } from "lucide-react";

export const Login = () => {
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const navigate = useNavigate();

  const [loginUser, { loading, error }] = useMutation<
    { loginUser: { success: boolean; error?: string; token?: string } },
    { data: { userName: string; password: string } }
  >(LOGIN_USER_MUTATION);

  const client = useApolloClient();

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 

    try {
      const res = await loginUser({ 
        variables: { 
          data: { 
            userName, 
            password 
          } 
        }
      });

      console.log("Login response:", res.data);

      if (res.data?.loginUser.success && res.data.loginUser.token) {
        localStorage.setItem("token", res.data.loginUser.token);
        
        await client.resetStore();
        navigate("/main");

      } else {
        alert(res.data?.loginUser.error || "Login failed");
      }
    } catch (err) {
      console.error("Login Error:", err);
      alert("Login failed. Please try again.");
    }
  };

  return (
    <Wrapper>
      <Form onSubmit={handleLogin}>
        <Title>
          <ShieldAlert color="black" size={24} />
          Login
        </Title>
        <IdWrapper>
          <User color="black" size={24} />
          <Id 
            type="text"
            placeholder="Username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
        </IdWrapper>
        <PasswordWrapper>
          <KeyRound color="black" size={24} />
          <Password 
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </PasswordWrapper>
        <LoginButton type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </LoginButton>
        {error && <ErrorMessage>{error.message}</ErrorMessage>}
      </Form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Form = styled.form`
  width: 360px;
  height: 320px;
  border-radius: 25px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

const Title = styled.div`
  display: flex;
  width: 108px;
  gap: 8px;
  font-size: 28px;
  border-bottom: 4px solid black;
  align-items: center;
`;

const IdWrapper = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 2px solid rgb(175, 172, 172);
  padding-bottom: 8px;
  gap: 8px;
`;

const Id = styled.input`
  border: none;
  width: 100%;
`;

const PasswordWrapper = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 2px solid rgb(175, 172, 172);
  padding-bottom: 8px;
  gap: 8px;
`;

const Password = styled.input`
  border: none;
  width: 100%;
`;

const LoginButton = styled.button`
  width: 100%;
  height: 40px;
  background-color: black;
  color: white;
  border-radius: 10px;
  cursor: pointer;
  &:disabled {
    background-color: gray;
    cursor: not-allowed;
  }
`;

const ErrorMessage = styled.p`
  color: red;
  font-size: 14px;
  text-align: center;
`;
