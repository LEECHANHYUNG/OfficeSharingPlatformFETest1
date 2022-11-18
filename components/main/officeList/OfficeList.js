import { useSelector } from 'react-redux';
import styled from 'styled-components';
import OfficeItemList from './OfficeItemList';
import OfficeSeach from './OfficeSeach';

const Wrapper = styled.div`
  float: left;
  width: 25%;
  height: 92vh;
  background: #222;
  border: 1px solid #111;
  overflow-y: scroll;
`;

const OfficeList = () => {
  const selectedPlaceId = useSelector(
    (state) => state.officeList.selectedPlaceId
  );
  return (
    <Wrapper>
      <OfficeSeach />
      <OfficeItemList />
    </Wrapper>
  );
};

export default OfficeList;
