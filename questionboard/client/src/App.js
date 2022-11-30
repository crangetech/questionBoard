import logo from './logo.svg';
import './App.css';



function App() {
  return (
    <div className="App">
      <div>
        <h1>Log In</h1>
        <input type="text" placeholder="Username" id="username" /><br />
        <input type="text" placeholder="Password" id="password" />
        <br /><button type="button">Log In</button>
        <h3>Forgot your Username or Password?</h3>
      </div>
      <div>
        <h1>Sign Up</h1>
        <input type="text" placeholder="Username" id="username" /><br />
        <input type="text" placeholder="Email" id="email" /><br />
        <input type="text" placeholder="Password" id="password" />
        <br /><button type="button">Sign Up</button><br />
        <li><a href="/termsconditions">Terms and Conditions</a></li>
        <li><a href="/privacypolicy">Privacy Policy</a></li>
      </div>
    </div>
  );
}

export default App;
