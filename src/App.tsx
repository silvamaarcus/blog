import InputCheckbox from "./components/ui/InputCheckbox";
import InputRadio from "./components/ui/InputRadio";

function App() {
  return (
    <>
      <h1>Página teste</h1>
      <InputCheckbox label="Checkbox" />

      <InputCheckbox label="Checkbox" disable={true} className="mt-2" />

      <InputRadio label="Radio" />
    </>
  );
}

export default App;
