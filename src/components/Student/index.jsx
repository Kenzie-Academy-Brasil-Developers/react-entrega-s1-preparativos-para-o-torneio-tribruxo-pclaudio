import {
  Card,
  StudentAncestry,
  StudentHouse,
  StudentImage,
  StudentName,
} from "./style";

const Student = ({ student, index }) => {
  const colors = ["#a40201", "#f9e141", "#00a421"];
  const capitalize = (text) => text.charAt(0).toUpperCase() + text.slice(1);

  return (
    <Card>
      <StudentImage
        src={student.image}
        alt={student.name}
        color={colors[index]}
      />
      <StudentName>{student.name}</StudentName>
      <StudentAncestry>
        {student.ancestry ? capitalize(student.ancestry) : "Unknown"}
      </StudentAncestry>
      <StudentHouse color={colors[index]}>{student.house}</StudentHouse>
    </Card>
  );
};

export default Student;
