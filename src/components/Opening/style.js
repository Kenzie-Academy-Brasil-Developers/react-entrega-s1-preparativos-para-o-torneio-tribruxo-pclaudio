import styled from "styled-components";

export const Main = styled.section`
  max-width: 545px;
`;

const Paragraph = styled.p`
  text-align: center;
  color: #f5f5f5;
`;

export const Title = styled(Paragraph)`
  font-size: 70px;
  line-height: 95px;
  margin-bottom: 20px;
`;

export const Helper = styled(Paragraph)`
  font-weight: 400;
  font-size: 40px;
  line-height: 55px;
  margin-bottom: 60px;
`;

export const StartButton = styled.button`
  cursor: pointer;
  font-size: 30px;
  line-height: 41px;
  color: #1f1f1f;
  width: 100%;
  height: 50px;
  background-color: ${(props) => (props.disabled ? "#f1f1f1" : "#f9e141")};
  border-style: none;
  border-radius: 15px;
  box-shadow: 0 4px 4px rgba(0, 0, 0, 0.25);
`;
