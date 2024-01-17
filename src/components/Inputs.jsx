export default function Inputs({ onInputChange }) {
	return (
		<section id="user-input">
			<div className="input-group">
				<p>
					<label>Initial Investment</label>
					<input
						type="number"
						name="initial-investment"
						required
						onChange={(event) => onInputChange(event, 0)}
					></input>
				</p>
				<p>
					<label>Annual Investment</label>
					<input
						type="number"
						name="annual-investment"
						required
						onChange={(event) => onInputChange(event, 1)}
					></input>
				</p>
			</div>
			<div className="input-group">
				<p>
					<label>Expected Return</label>
					<input
						type="number"
						name="expected-return"
						required
						onChange={(event) => onInputChange(event, 2)}
					></input>
				</p>
				<p>
					<label>Duration"</label>
					<input
						type="number"
						name="duration"
						required
						onChange={(event) => onInputChange(event, 3)}
					></input>
				</p>
			</div>
		</section>
	);
}
