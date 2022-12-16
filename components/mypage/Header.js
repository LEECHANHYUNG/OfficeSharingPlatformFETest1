import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

const Header = (props) => {
  const { userName, mileagePoint, totalReviewNumber, joinDate } =
    props.userData;
  return (
    <Wrapper>
      <h1>My Page</h1>
      <div className="userInfo">
        <div className="left">
          <div className="userName">이름 : {userName}</div>
          <div>가입일 :{joinDate}</div>
        </div>
        <div className="right">
          <div>
            <div>
              마일리지 <Image src="/svg/won.svg" width="18" height="18" />
            </div>
            <div className="userData">{mileagePoint.toLocaleString()}</div>
          </div>
          <div>
            <div>
              작성 리뷰 <Image src="/svg/pencil.svg" width="18" height="18" />
            </div>
            <div className="userData">{totalReviewNumber}</div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  position: relative;
  top: 80px;
  margin-top: 20px;
  height: 200px;
  width: 100%;
  background: #fff;
  display: flex;
  justify-content: flex-start;
  align-items: start;
  flex-direction: column;
  border-bottom: 2px solid #111;
  h1 {
    text-align: left;
    width: 100%;
    font-size: 3rem;
    padding-top: 20px;
    padding-left: 150px;
  }
  .userInfo {
    width: 100%;
    font-size: 20px;
    font-weight: 700;
  }
  .userInfo .left {
    padding-left: 150px;
    float: left;
    width: 50%;
    min-width: 150px;
    line-height: 50px;
  }
  .userInfo .right {
    float: right;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 50%;
    min-width: 150px;
    line-height: 50px;
  }
  .userInfo .userData {
    font-size: 2rem;
  }
  @media screen and (max-width: 1170px) {
    height: auto;
    h1 {
      text-align: center;
      padding-left: 0;
    }
    .userInfo {
      font-size: 1rem;
    }
    .userInfo .left {
      width: 100%;
      padding-left: 50px;
    }
    .userInfo .right {
      width: 100%;
      padding: 0 50px;
      display: flex;
      justify-content: space-between;
      align-items: start;
    }
  }
  @media screen and (max-width: 858px) {
    justify-content: space-between;
    .userInfo .right {
      padding: 0 10px;
    }
  }
`;
export default Header;
