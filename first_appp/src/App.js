import react, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Login from './login';

function App() {
  const [Username, setUsername] = useState("");
  const [Name, setName] = useState("");
  const [Password, setPassword] = useState("");
  const [Clicked, setClicked] = useState(false);

  const Show = () => {
    setClicked(true);

  }

  const RegisterUser = async (event) => {
    event.preventDefault();
    console.log(Username)
    fetch('http://localhost:5000/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        Name: Name,
        username: Username,
        password: Password
      })
    })
  }

  const LoginUser = async (event) => {
    console.log(Username)
    event.preventDefault();
    fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: Username,
        password: Password
      })
    })
  }


  return (
    <Router>
      <Routes>
        <Route exact path='/login' element={<Login />}></Route>
        {/* <Route exact path='/about' element={< About />}></Route>
        <Route exact path='/contact' element={< Contact />}></Route> */}
      </Routes>

      <div className="App" style={containerMain}>
        <form onSubmit={RegisterUser} style={container}>
          <input value={Name} type="text" placeholder='name' onChange={(e) => { setName(e.target.value) }} />
          <br />
          <input value={Username} type="text" placeholder='username' onChange={(e) => { setUsername(e.target.value) }} />
          <br />
          <input value={Password} type="password" placeholder='password' onChange={(e) => { setPassword(e.target.value) }} />
          <br />
          <input type="submit" value="Register" />
        </form>

        <h1 style={{ "textAlign": "center" }}>OR</h1>
        {Clicked ? <>
          <form onSubmit={LoginUser} style={container}>
            <input value={Username} type="text" placeholder='username' onChange={(e) => { setUsername(e.target.value) }} />
            <br />
            <input value={Password} type="password" placeholder='password' onChange={(e) => { setPassword(e.target.value) }} />
            <br />
            <input type="submit" value="Login" />
          </form>
        </> : <><button style={{ "width": "50%", "margin": "0 auto" }} onClick={Show}>LOGIN</button></>}
      </div>
    </Router>

  );
}

const container = {
  "display": "flex",
  "width": "50%",
  "margin": "0 auto",
  "justifyContent": "center",
  "flexDirection": "column",
}
const containerMain = {
  "display": "flex",
  "width": "50%",
  "margin": "0 auto",
  "marginTop": "100px",
  "justifyContent": "center",
  "flexDirection": "column",
}
export default App;
