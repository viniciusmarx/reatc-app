import "./styles/app.css";
import Paragraph from "./components/Paragraph";
import Button from "./components/button";

function App() {
	return (
		<>
			<Paragraph text="Lorem ipsum dolor sit amet, consectetur adipisicing elit." color="purple" />
			<Button label="Baixar CV" />
		</>
	);
}

export default App;
