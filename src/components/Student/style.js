import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 321px;
  max-width: 100%;
  margin-bottom: 30px;
`;

export const StudentImage = styled.img`
  width: 301px;
  height: 373px;
  border: 5px solid ${(props) => props.color};
  border-radius: 15px;
  margin-bottom: 30px;
`;

const Paragraph = styled.p`
  font-size: 30px;
  line-height: 41px;
  text-align: center;
`;

export const StudentName = styled(Paragraph)`
  color: #eee;
  margin-bottom: 10px;
`;

export const StudentAncestry = styled(StudentName)``;

export const StudentHouse = styled(Paragraph)`
  color: ${(props) => props.color};
`;
