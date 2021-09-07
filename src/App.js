import "./App.css";
import "@fontsource/nunito";
import { useEffect, useState } from "react";
import Opening from "./components/Opening";
import CherryPickStudents from "./components/CherryPickStudents";

function App() {
  const [isDisabled, setIsDisabled] = useState(true);
  const [isStarted, setIsStarted] = useState(false);
  const [houses, setHouses] = useState({});

  useEffect(() => {
    const obj = {};

    fetch("https://hp-api.herokuapp.com/api/characters/students")
      .then((result) => result.json())
      .then((result) =>
        result.forEach((student) =>
          obj[student.house]
            ? obj[student.house].push(student)
            : (obj[student.house] = [student])
        )
      )
      .then(() => Object.keys(obj).length > 0 && setIsDisabled(false))
      .catch((error) => console.log(`Error: ${error}`));

    setHouses(obj);
  }, []);

  return (
    <>
      {!isStarted ? (
        <Opening isDisabled={isDisabled} setIsStarted={setIsStarted} />
      ) : (
        <CherryPickStudents houses={houses} />
      )}
    </>
  );
}

export default App;
