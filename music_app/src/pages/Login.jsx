import { Button } from '@chakra-ui/react'
import { Link } from '@chakra-ui/react'
import "./login.css"


const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
const CLIENT_ID = "81ff2f0dc507455993f54ab71e8cc8bb"
const REDIRECT_URI = "http://localhost:3000/homepage"
const RESPONSE_TYPE = "token"


function Login(){
    return(<div className="login-btn">
        <h1>Welcome to Canticum</h1>
        <Button  
        bg={'green'}>
        <Link href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>
        Login to Spotify
        </Link>
        </Button>
       
    
    </div>)
}
console.log(Button)
export default Login; 
