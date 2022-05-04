import InputGroup from "../../components/InputGroup";
import MainContainer from "../../components/MainContainer";
import Button from "../../components/Button";

const Home = () => {
  return (
    <div>
      <MainContainer>
        <InputGroup label="Dupla 1" />
        <InputGroup label="Dupla 2" />
        <Button text="Iniciar" onClick={() => alert("laura linda princesa")} />
      </MainContainer>
    </div>
  );
};

export default Home;
