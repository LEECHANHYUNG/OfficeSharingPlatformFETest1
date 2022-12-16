import React from 'react';
import styled from 'styled-components';
import Button from '../../ui/Button';
import Card from '../../ui/Card';
const StyledCard = styled(Card)`
  border: 3px solid #6a9eff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 90%;
  h1 {
    text-align: center;
  }
  .second-row {
    display: flex;
    justify-content: space-between;
  }
  .third-row {
    margin-bottom: 20px;
  }
  .second-row input {
    width: 100px;
  }

  .input-field {
    border: 1px solid #999;
  }
  .input-field input {
    border: none;
    outline: none;
    padding: 10px;
  }
  .selection {
    display: flex;
    justify-content: start;
    align-items: center;
  }
  .selection select {
    padding: 10px;
    width: 100px;
    margin-right: 20px;
  }
  .card-number {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .card-number .input-field input {
    width: 70px;
  }
  .card-number .dash {
    font-weight: 700;
  }
  .pw .input-field,
  .pw .input-field input {
    width: 30px;
  }
`;
const CreditCardForm = () => {
  const date = new Date();
  return (
    <StyledCard>
      <h3>카드 정보 입력</h3>
      <div className="first-row">
        <h5>카드 번호</h5>
        <div className="card-number">
          <div className="input-field">
            <input type="text" placeholder="●●●●" maxLength={4} />
          </div>
          <div className="dash">-</div>
          <div className="input-field">
            <input type="text" placeholder="●●●●" maxLength={4} />
          </div>
          <div className="dash">-</div>
          <div className="input-field">
            <input type="text" placeholder="●●●●" maxLength={4} />
          </div>
          <div className="dash">-</div>
          <div className="input-field">
            <input type="text" placeholder="●●●●" maxLength={4} />
          </div>
        </div>
      </div>
      <div className="second-row">
        <div className="birth">
          <h5>생년월일</h5>
          <div className="input-field">
            <input type="text" maxLength={6} />
          </div>
        </div>
        <div className="pw">
          <h5>비밀번호 앞 두자리</h5>
          <div className="input-field">
            <input type="password" maxLength={2} />
          </div>
        </div>
      </div>
      <div className="third-row">
        <h5>유효기간</h5>
        <div className="selection">
          <select name="months" id="months">
            <option value="1">1</option>
            <option value="1">2</option>
            <option value="1">3</option>
            <option value="1">4</option>
            <option value="1">5</option>
            <option value="1">6</option>
            <option value="1">7</option>
            <option value="1">8</option>
            <option value="1">9</option>
            <option value="1">10</option>
            <option value="1">11</option>
            <option value="1">12</option>
          </select>
          <select name="years" id="years">
            <option value={date.getFullYear()}>{date.getFullYear()}</option>
            <option value={date.getFullYear() + 1}>
              {date.getFullYear() + 1}
            </option>
            <option value={date.getFullYear() + 2}>
              {date.getFullYear() + 2}
            </option>
            <option value={date.getFullYear() + 3}>
              {date.getFullYear() + 3}
            </option>
            <option value={date.getFullYear() + 4}>
              {date.getFullYear() + 4}
            </option>
            <option value={date.getFullYear() + 5}>
              {date.getFullYear() + 5}
            </option>
            <option value={date.getFullYear() + 6}>
              {date.getFullYear() + 6}
            </option>
            <option value={date.getFullYear() + 7}>
              {date.getFullYear() + 7}
            </option>
          </select>
        </div>
      </div>
      <Button>결제</Button>
    </StyledCard>
  );
};

export default CreditCardForm;
