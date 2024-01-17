export default function Inputs({ values, onInputChange }) {
	return (
		<section id="user-input">
			<div className="input-group">
				<p>
					<label>Initial Investment</label>
					<input
						type="number"
						value={values.initialInvestment}
						required
						onChange={(event) => onInputChange(event.target.value, "initialInvestment")}
					></input>
				</p>
				<p>
					<label>Annual Investment</label>
					<input
						type="number"
						value={values.annualInvestment}
						required
						onChange={(event) => onInputChange(event.target.value, "annualInvestment")}
					></input>
				</p>
			</div>
			<div className="input-group">
				<p>
					<label>Expected Return</label>
					<input
						type="number"
						value={values.expectedReturn}
						required
						onChange={(event) => onInputChange(event.target.value, "expectedReturn")}
					></input>
				</p>
				<p>
					<label>Duration</label>
					<input
						type="number"
						value={values.duration}
						required
						onChange={(event) => onInputChange(event.target.value, "duration")}
					></input>
				</p>
			</div>
		</section>
	);
}
