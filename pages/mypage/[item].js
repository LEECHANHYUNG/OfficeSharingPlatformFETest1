import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';
import Banner from '../../components/mypage/Banner';
import Header from '../../components/mypage/Header';
import Usage from '../../components/mypage/use/Usage';
import Comment from '../../components/mypage/comment/Comment';
import Point from '../../components/mypage/point/Point';
import Qna from '../../components/mypage/qna/Qna';
import { getSession } from 'next-auth/react';
import axios from 'axios';
import Review from '../../components/mypage/review/Review';
const Wrapper = styled.div`
  overflow-x: hidden;
  overflow-y: hidden;
  & .item {
    width: 70vw;
    display: inline-block;
    float: left;
    padding-left: 20px;
    padding-top: 60px;
  }
  @media screen and (max-width: 1170px) {
    width: 100vw;
    margin: 0;
  }
`;

const Mypage = (props) => {
  const router = useRouter();
  return (
    <Wrapper>
      <Header userData={props.userData} />
      <Banner />
      {router.query.item === '' && <div className="item"></div>}
      {router.query.item === 'usage' && (
        <div className="item">
          <Usage
            item={props.reservationData}
            paginationData={props.paginationData.maxPage}
          />
        </div>
      )}
      {router.query.item === 'review' && (
        <div className="item">
          <Review
            item={props.reviewData}
            paginationData={props.paginationData.maxPage}
          />
        </div>
      )}

      {router.query.item === 'comment' && (
        <div className="item">
          <Comment
            item={props.commentData}
            paginationData={props.paginationData.maxPage}
          />
        </div>
      )}
      {router.query.item === 'point' && (
        <div className="item">
          <Point />
        </div>
      )}
      {router.query.item === 'qna' && (
        <div className="item">
          <Qna
            item={props.qnaData}
            paginationData={props.paginationData.maxPage}
          />
        </div>
      )}
    </Wrapper>
  );
};

export async function getServerSideProps(context) {
  const params = context.params;
  console.log(params);
  const session = await getSession({ req: context.req });
  let userData = {};
  if (!session) {
    return {
      redirect: {
        destination: '/auth/signin',
        permanent: false,
      },
    };
  }
  const accessToken = session.user.accessToken;
  const refreshToken = session.user.refreshToken;
  try {
    const response = await axios({
      url: 'http://localhost:3000/api/auth/token',
      method: 'post',
      data: {
        url: `http://localhost:8080/mypage/${params.item}?page=1`,
        accessToken,
        refreshToken,
      },
    });
    if (response.status === 200) {
      return {
        props: response.data,
      };
    } else {
      throw new Error(response.data);
    }
  } catch (error) {
    userData = { message: '로그인 정보 만료' };
  }
  return {
    props: userData,
  };
}

export default Mypage;
