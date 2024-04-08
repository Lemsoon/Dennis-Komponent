import { InputBox } from "./InputBox";
import { Spinner } from "./Components/Spinner";

function App() {
  return (
    <>
      <Spinner color="black" size={80}></Spinner>
      <InputBox animate={true}>Text</InputBox>
    </>
  );
}

export default App;
