import React from 'react';
import styled from 'styled-components';
import { Row, Col } from 'antd';
import bg from './images/bg_signin.png';

const Page = styled(Row).attrs(() => ({
  type: 'flex',
  align: 'middle',
}))`
  height: 100vh;
`;

const Title = styled.div`
  text-align: center;
  font-family: Roboto;
  font-size: 40px;
  font-weight: bold;
  color: #642828;
  text-transform: uppercase;
`;

const SubTitle = styled.div`
  text-align: center;
  font-family: Roboto;
  font-size: 27px;
  font-weight: bold;
  text-transform: uppercase;
`;

const Underline = styled.div`
  width: 200px;
  height: 8px;
  margin-right: auto;
  margin-left: auto;
  margin-top: 20px;
  background: linear-gradient(to right, #803b32, #ddb49b);
`;

const Contents = styled.div`
  display: flex;
  margin-top: 50px;
  background-color: #f3f7f8;
  margin-left: auto;
  margin-right: auto;
  width: 800px;
`;

const FormTitle = styled.div`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
`;

function App() {
  return (
    <Page>
      <Col span={24}>
        <Title>REVIEW SERVICE FOR BOOKS</Title>
        <SubTitle>PLEASE SHARE YOUR OPINION ON WEB DEVELOPMENT BOOKS.</SubTitle>
        <Underline />
        <Contents>
          <Col span={12}>
            <img src={bg} style={{ width: 400 }} alt="Signin" />
          </Col>
          <Col span={12} style={{ verticalAlign: 'top' }}>
            <FormTitle>LOG IN. START SEARCHING.</FormTitle>
            <div>
              <span>Email </span>
              <input type="email" />
            </div>
            <div>
              <span>Password </span>
              <input type="password" />
            </div>
            <button type="submit">SIGN IN</button>
            <div>
              <span>Need to create an account?</span>
              <button>SIGN UP</button>
            </div>
            <div>
              <span>Forget your password?</span>
              <button>RECOVERY</button>
            </div>
          </Col>
        </Contents>
      </Col>
    </Page>
  );
}

export default App;
