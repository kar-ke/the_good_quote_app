import { useState } from "react";
import "./App.css";

function App() {
	const [quote, setQuote] = useState("Hello world !");

	const fetchQuote = async () => {
		try {
			let response = await fetch("https://api.adviceslip.com/advice");
			let data = await response.json();
			setQuote(data.slip.advice);
		} catch (error) {
			console.error("Error fetching data:", error);
		}
	};

	const handleClick = () => {
		fetchQuote();
	};

	return (
		<div className="app">
			<div className="logocontainer">
				<img src="src/assets/quotefevicon.png" alt="logoo" className="w-16" />
				<h1 className="text-3xl text-white">The Good Quote</h1>
			</div>
			<div className="card mb-32">
				<p className="quote">{quote}</p>
				<button onClick={handleClick} className="button">
					<span>give me advice</span>
				</button>
			</div>
		</div>
	);
}

export default App;
