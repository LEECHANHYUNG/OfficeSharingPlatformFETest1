import axios from 'axios';
import { useSession } from 'next-auth/react';
import React from 'react';
import { useRef } from 'react';
import Input from '../../ui/Input';
import TextArea from '../../ui/TextArea';
const NewQna = () => {
  const titleInputRef = useRef();
  const session = useSession();
  const addQnaHandler = async (e) => {
    const response = await axios({
      url: '/api/mypage/newQna',
      method: 'post',
      data: {
        title: titleInputRef.current.value,
        question: e.target.previousSibling.value,
        accessToken: session.data.user.accessToken,
      },
    });
    if (response.status === 200) {
      alert('1:1문의가 등록되었습니다.');
    }
  };
  return (
    <div>
      <h1>문의 작성</h1>
      <div className="title">
        <label htmlFor="title">제목</label>
        <Input placeholder="제목을 입력해주세요" ref={titleInputRef} />
      </div>
      <div className="content">
        <label htmlFor="content">문의 내용</label>
        <TextArea
          placeholder="문의 내용을 입력해주세요"
          addCommentHandler={addQnaHandler}
        />
      </div>
    </div>
  );
};

export default NewQna;
