import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Results({ data }) {
	// Store the year by year data based on the user inputs
	const results = calculateInvestmentResults(data);

	return (
		<section>
			<table id="result">
				<thead>
					<tr>
						<th>Year</th>
						<th>Investment Value</th>
						<th>Interest (Year)</th>
						<th>Total Interest</th>
						<th>Invested Capital</th>
					</tr>
				</thead>
				<tbody>
					{/* Map the calculated results and display each year in a row */}
					{results.map((data) => (
						<tr key={data.year}>
							<td>{data.year}</td>
							<td>{formatter.format(data.valueEndOfYear)}</td>
							<td>{formatter.format(data.interest)}</td>
							<td>{formatter.format(data.totalInterest)}</td>
							<td>{formatter.format(data.valueEndOfYear - data.totalInterest)}</td>
						</tr>
					))}
				</tbody>
			</table>
		</section>
	);
}
