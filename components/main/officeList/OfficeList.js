import styled from 'styled-components';
import OfficeItemList from './OfficeItemList';
import OfficeSeach from './OfficeSeach';

const Wrapper = styled.div`
  position: relative;
  top: 8vh;
  float: left;
  width: 25%;
  height: 92vh;
  background: #222;
  overflow-y: scroll;

  @media screen and (max-width: 1170px) {
    width: 100%;
    height: 32vh;
  }
`;

const OfficeList = (props) => {
  return (
    <Wrapper>
      <OfficeSeach className="search" />
      <OfficeItemList map={props.map} />
    </Wrapper>
  );
};

export default OfficeList;
