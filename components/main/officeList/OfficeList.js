import styled from 'styled-components';
import OfficeItemList from './OfficeItemList';
import OfficeSearch from './OfficeSearch';

const Wrapper = styled.div`
  position: relative;
  float: left;
  width: 25%;
  height: 92vh;
  background: #fff;
  overflow-y: scroll;

  @media screen and (max-width: 1170px) {
    width: 100%;
    height: 32vh;
  }
`;

const OfficeList = (props) => {
  return (
    <Wrapper>
      <OfficeSearch className="search" />
      <OfficeItemList map={props.map} />
    </Wrapper>
  );
};

export default OfficeList;
