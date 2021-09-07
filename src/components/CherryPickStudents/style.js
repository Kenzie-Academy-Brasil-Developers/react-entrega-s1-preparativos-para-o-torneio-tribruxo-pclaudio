import styled from "styled-components";

export const Main = styled.section`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 10px 0 20px;

  @media (min-width: 768px) {
    width: 80vw;
  }
`;

export const StudentsCards = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 50px;
  }
`;

export const ButtonSection = styled.div`
  text-align: center;
`;

export const TryAgainButton = styled.button`
  cursor: pointer;
  font-size: 30px;
  line-height: 41px;
  color: #1f1f1f;
  width: 100%;
  max-width: 545px;
  height: 50px;
  background-color: #f9e141;
  border-style: none;
  border-radius: 15px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
`;
