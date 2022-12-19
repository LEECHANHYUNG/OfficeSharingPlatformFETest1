import styled from 'styled-components';
import PlaceItemList from './PlaceItemList';
import PlaceSearch from './PlaceSearch';

const Wrapper = styled.div`
  position: absolute;
  top: 0px;
  right: 0px;
  width: 25vw;
  height: 100vh;
  background: #fff;
  overflow-y: scroll;
  padding-top: 100px;

  @media screen and (max-width: 1170px) {
    padding-top: 54px;
    top: 57vh;
    width: 100%;
    height: 43vh;
  }
`;

const PlaceList = (props) => {
  return (
    <Wrapper>
      <PlaceSearch className="search" />
      <PlaceItemList map={props.map} />
    </Wrapper>
  );
};

export default PlaceList;
