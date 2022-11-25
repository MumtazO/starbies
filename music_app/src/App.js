import { useEffect} from 'react'
import { useNavigate } from "react-router-dom";


function App() {
    const navigate = useNavigate();
       useEffect(() => {
        const hash = window.location.hash
        let token = window.localStorage.getItem("token")
        console.log(hash)
        // getToken()
        if (!token && hash) {
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]
            console.log("the conditional token", token)
            //window.location.hash = ""
            window.localStorage.setItem("token", token)
            navigate("/homepage");
        }
    }, [])
    return (
        <></>
    )
}

export default App;


