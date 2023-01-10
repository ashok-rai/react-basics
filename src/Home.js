import { useState } from "react";

const Home = () => {

	const [name, setName] = useState('Ashok Rai')
	const [age, setAge] = useState(25)

	// let name = 'Ashok';
	
	const handleClick = () => {
		const name = 'Mizal Tandukar'
		setName(name);
		setAge(26)
		console.log('name', name)
	}

	const handleClickAgain = (name) => {
		console.log('Hello' + name)
		alert('Hello ' + name)
	}

	return ( 
		<div className="home">
			<h3>Home Page</h3>
			<p>{name} is { age } years old</p>
			<button onClick={handleClick}>Click me</button>
			<button onClick={() => handleClickAgain('ashok')} >Click Again</button>
		</div>
	 );
}
 
export default Home;