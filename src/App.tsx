import { InputBox } from "./InputBox";
import { Spinner } from "./Spinner";

function App() {
  return (
    <>
      <Spinner color="black" size={80}></Spinner>
      <InputBox animate={true}>text here</InputBox>
    </>
  );
}

export default App;
