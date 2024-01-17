import { useState } from "react";
import Header from "./components/Header";
import Inputs from "./components/Inputs";

function App() {
	const [parameters, setParameters] = useState([0, 0, 0, 0]);

	function OnValueChange(event, index) {
		const updatedParameters = parameters.map((oldValue, id) => {
			if (id === index) {
				return (oldValue = +event.target.value); // Update the matching index value
			} else {
				return oldValue; // No changes, return the current value
			}
		});

        // Update the parameters to tell React to re-render the page
        setParameters(updatedParameters);

		// setParameters([...parameters, {type: event.target.name, value: event.target.value}]);
	}

	console.log(parameters);

	return (
		<>
			<Header />
			<Inputs onInputChange={OnValueChange} />
		</>
	);
}

export default App;
