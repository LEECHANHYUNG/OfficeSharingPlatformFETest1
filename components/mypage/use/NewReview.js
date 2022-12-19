import axios from 'axios';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import React from 'react';
import styled from 'styled-components';
import TextArea from '../../ui/TextArea';
const Wrapper = styled.section`
  position: relative;
  width: 60vw;
  float: left;
  top: 80px;
  margin-left: 150px;

  margin-top: 50px;
  h1 {
    font-size: 25px;
  }
`;
const NewReview = () => {
  const session = useSession();
  const router = useRouter();
  const addCommentHandler = async (e) => {
    const comment = e.target.parentNode.childNodes[1].value;
    try {
      const response = await axios({
        url: '/api/mypage/review',
        method: 'post',
        data: {
          accessToken: session.data.user.accessToken,
          ratingScore: '1',
          ratingReview: comment,
          reservationId: router.query.id,
        },
      });
      if (response.status === 200) {
        alert('리뷰 등록 완료');
        router.replace('/mypage/review');
      } else {
        throw new Error(response.data);
      }
    } catch (error) {
      console.error(error.response.data);
    }
  };

  return (
    <Wrapper>
      <h1>리뷰 작성</h1>
      <TextArea
        placeholder={'최대 100자 입력 가능'}
        addCommentHandler={addCommentHandler}
        maxLength={100}
        newReview={true}
      />
    </Wrapper>
  );
};

export default NewReview;
