import HomePage from "./pages/HomePage"
import Login from "./pages/Login"

const code = new URLSearchParams(window.location.search).get('code')

function App() {
    return code ? <HomePage code={code}/> : <Login/>
}

export default App;
