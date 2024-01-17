import { useState } from "react";
import Header from "./components/Header";
import Inputs from "./components/Inputs";
import Results from "./components/Results";

function App() {
	const [parameters, setParameters] = useState({
		initialInvestment: 0,
		annualInvestment: 0,
		expectedReturn: 0,
		duration: 0,
	});

	function OnValueChange(newValue, index) {
		setParameters(prevParameters => {
			return {
				// Spread the latest state of the parameters to prevent modifying the data then
				// using the index that is passed from the input to update the data.
				...prevParameters,
				[index]: +newValue
			};
		});
	}

	return (
		<>
			<Header />
			<Inputs values={parameters} onInputChange={OnValueChange} />
			<Results data={parameters} />
		</>
	);
}

export default App;
