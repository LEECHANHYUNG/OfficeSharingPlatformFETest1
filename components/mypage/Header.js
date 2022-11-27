import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

const Header = (props) => {
  return (
    <Wrapper>
      <h1>My Page</h1>
      <div className="userInfo">
        <div className="left">
          <div className="userName">이메일 : {props.email}</div>
          <div>가입일 : {'2022.10.11'}</div>
        </div>
        <div className="right">
          <div>
            <div>
              마일리지 <Image src="/svg/won.svg" width="18" height="18" />
            </div>
            <div className="userData">{'3,000'}</div>
          </div>
          <div>
            <div>
              후기 작성 <Image src="/svg/pencil.svg" width="18" height="18" />
            </div>
            <div className="userData">{'5'}</div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 100px;
  height: 300px;
  width: 100%;
  background: #fff;
  display: flex;
  justify-content: flex-start;
  align-items: start;
  flex-direction: column;
  & h1 {
    padding-left: 100px;
    padding-top: 30px;
    width: 100%;
    height: 30px;
    font-size: 3rem;
  }
  & .userInfo {
    width: 100%;
    padding-top: 50px;
    height: 270px;
    font-size: 20px;
    font-weight: 700;
  }
  & .userInfo .left {
    padding-top: 50px;
    padding-left: 150px;
    float: left;
    width: 50%;
    min-width: 150px;
    line-height: 50px;
  }
  & .userInfo .right {
    float: right;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 50%;
    min-width: 150px;
    line-height: 50px;
  }
  & .userInfo .userData {
    font-size: 2rem;
  }
  @media screen and (max-width: 858px) {
    height: 350px;
    & h1 {
      text-align: center;
    }
    & .userInfo .left {
      width: 100%;
      padding-left: 50px;
    }
    & .userInfo .right {
      width: 100%;
      padding: 0 50px;
      display: flex;
      justify-content: space-between;
      align-items: start;
    }
  }
`;
export default Header;
