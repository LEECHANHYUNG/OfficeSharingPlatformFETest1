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
  .stars {
    height: 150px;
    width: 500px;
    text-align: center;
  }
  .start input {
    display: none;
  }
  .stars label {
    float : right;
    font-size: 100px;
    color: #bbb;
    margin  0 5px;
    text-shadow : 1px 1px #bbb;
  }
  .stars label::before {
    content: '⭐';
  }
  .stars input:checked ~ label{
    color : gold;
    text-shadow : 1px 1px #c60;
  }
  .stars input:not(:checked)>label:hover,
  .stars input:not(:checked)>label:hover~label{
    color : gold;
    text-shadow : 1px 1px goldenrod;
  }

  .stars .result:before{
    position : absolute;
    content :'';
    left: 50%;
    transform : translateX(-50%);
    bottom : -30px;
    font-size : 30px;
    font-weight: 500;
    color : gold;
    font-family : 'Poppins', sans-serif;
    display: none;
  }
  .stars input:checked > .result{
    display : block;
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
      <div className="stars">
        <input type="radio" id="five" name="rate" value="5" />
        <label htmlFor="five"></label>
        <input type="radio" id="four" name="rate" value="4" />
        <label htmlFor="five"></label>
        <input type="radio" id="three" name="rate" value="3" />
        <label htmlFor="five"></label>
        <input type="radio" id="two" name="rate" value="2" />
        <label htmlFor="five"></label>
        <input type="radio" id="one" name="rate" value="1" />
        <label htmlFor="five"></label>
      </div>

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
