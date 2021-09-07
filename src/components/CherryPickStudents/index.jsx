import { useEffect, useState } from "react";
import { ButtonSection, Main, StudentsCards, TryAgainButton } from "./style";
import Student from "../Student";

const CherryPickStudents = ({ houses }) => {
  const [selectedStudents, setSelectedStudents] = useState([]);

  const selectStudents = () => {
    const housesNames = Object.keys(houses);
    const students = [];

    for (let i = 0; i < 3; i++) {
      const randomHouseIndex = Math.floor(Math.random() * housesNames.length);
      const selectedHouse = housesNames.splice(randomHouseIndex, 1);
      const randomStudentIndex = Math.floor(
        Math.random() * houses[selectedHouse].length
      );
      students.push(houses[selectedHouse][randomStudentIndex]);
    }

    setSelectedStudents(students);
  };

  useEffect(selectStudents, [houses]);

  return (
    <Main>
      <StudentsCards>
        {selectedStudents.map((student, index) => (
          <Student key={index} student={student} index={index} />
        ))}
      </StudentsCards>
      <ButtonSection>
        <TryAgainButton onClick={selectStudents}>
          Tentar novamente
        </TryAgainButton>
      </ButtonSection>
    </Main>
  );
};

export default CherryPickStudents;
