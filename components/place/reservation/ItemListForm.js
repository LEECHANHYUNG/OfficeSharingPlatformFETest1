import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import ItemHeader from '../../layout/ItemHeader';
import Item from '../../ui/Item';

const Wrapper = styled.section`
  width: 100%;
  padding: 30px 0;
  padding-bottom: 30px;
  h1 {
    font-size: 1.5rem;
  }
  main {
    max-height: 60vh;
    overflow-y: scroll;
  }
`;

const ItemListForm = ({ items = [DESK, MEETINGROOM, OFFICE] }) => {
  const selectedType = useSelector((state) => state.reservation.selectedType);
  const arr = [1, 2, 3];
  return (
    <Wrapper>
      <h1>상품 선택</h1>
      <ItemHeader items={items} />
      <main>
        {selectedType === '1인 데스크' &&
          arr.map((elem) => <Item key={elem} images={'/image/place1.jpg'} />)}
        {selectedType === '회의실' &&
          arr.map((elem) => <Item key={elem} images={'/image/place2.jpg'} />)}
        {selectedType === '사무실' &&
          arr.map((elem) => <Item key={elem} images={'/image/place3.jpg'} />)}
      </main>
    </Wrapper>
  );
};

export default ItemListForm;
