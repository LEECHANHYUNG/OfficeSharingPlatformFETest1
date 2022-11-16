import styled from 'styled-components';

const Wrapper = styled.div`
  float: left;
  width: 25%;
  background: #222;
  height: 92vh;
  overflow-y: scroll;
  border: 1px solid #111;
`;

const OfficeList = () => {
  return (
    <Wrapper>
      <p>Office List</p>
    </Wrapper>
  );
};

export default OfficeList;
