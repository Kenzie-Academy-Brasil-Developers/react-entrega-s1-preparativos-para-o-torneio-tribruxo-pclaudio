import { Helper, Main, StartButton, Title } from "./style";

const Opening = ({ isDisabled, setIsStarted }) => {
  return (
    <Main>
      <Title>Torneio tribruxo</Title>
      <Helper>Clique no botão para encontrar os fenticeiros!</Helper>
      <StartButton onClick={() => setIsStarted(true)} disabled={isDisabled}>
        {isDisabled ? "Carregando dados..." : "Começar!"}
      </StartButton>
    </Main>
  );
};

export default Opening;
