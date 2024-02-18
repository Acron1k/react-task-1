import logo from './logo.svg'; //императивный стиль
import './App.css'; //императивный стиль

export const App = () => {
	const currentYear = new Date().getFullYear();
	return (
		<div className="App">
			{/*декларативный стиль*/}
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" /> {/*декларативный стиль*/}
				<p>Hello World!</p>
				<a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
					Learn React
				</a>
				<p>{currentYear}</p>
			</header>
		</div>
	);
};
