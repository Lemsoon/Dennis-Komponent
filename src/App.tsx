import { InputBox } from "./Components/InputBox";
import { Spinner } from "./Components/Spinner";
import { Accordion } from "./Components/Accordion";

function App() {
  return (
    <>
      <Spinner color="black" size={80}></Spinner>
      <InputBox animate={false}>Text</InputBox>
      <Accordion></Accordion>
    </>
  );
}

export default App;
