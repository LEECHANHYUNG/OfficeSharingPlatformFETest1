import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import ItemHeader from '../../layout/ItemHeader';
import Item from '../../ui/Item';

const Wrapper = styled.section`
  width: 100%;
  padding: 30px 0;
  padding-bottom: 30px;
  overflow: scroll;
  h1 {
    font-size: 1.5rem;
  }
  main {
    max-height: 60vh;
  }
`;

const ItemListForm = ({ items }) => {
  const selectedType = useSelector((state) => state.reservation.selectedType);
  return (
    <Wrapper>
      <h1>상품 선택</h1>
      <ItemHeader items={items} />
      <main>
        {selectedType === 'desk' && items.desk.exist && (
          <Item
            images={'/image/place2.jpg'}
            type="1인 DESK"
            typeEng={`desk`}
            price={items.desk.price.toLocaleString('ko-KR')}
            availablePerson={'1'}
          />
        )}
        {selectedType === 'meetingRoom' &&
          items.meetingRoom.length !== 0 &&
          items.meetingRoom.map((elem) => (
            <Item
              key={elem.typeCode}
              images={'/image/place3.jpg'}
              type={`${elem.typeCode}인 회의실`}
              typeEng={`meetingRoom${elem.typeCode}`}
              price={elem.price.toLocaleString('ko-KR')}
              availablePerson={elem.typeCode}
            />
          ))}
        {selectedType === 'office' &&
          items.office.length !== 0 &&
          items.office.map((elem) => (
            <Item
              key={elem.typeCode}
              images={'/image/place1.jpg'}
              type={`${elem.typeCode}평 사무실`}
              typeEng={`office${elem.typeCode}`}
              price={elem.price.toLocaleString('ko-KR')}
              availablePerson={elem.typeCode}
              timeUnit={'일'}
            />
          ))}
      </main>
    </Wrapper>
  );
};

export default ItemListForm;
