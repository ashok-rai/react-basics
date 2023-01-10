
import Navbar from './Navbar';
import Home from './Home';

function App() {
  const title = 'Welcome to the project';
  console.log('title', { title });
  var mysite = "https://ashok-rai.com.np/"

  return (
    <div className="App">
      <Navbar />
      <div className="conent">
        <Home />
        
        <h4>{title}</h4>
        <p>{Math.random() * 100}</p>
        <a href={mysite} target="_blank" rel="noreferrer">My Site</a>
      </div>
    </div>
  );
}

export default App;
