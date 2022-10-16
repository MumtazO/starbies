import { Button } from '@chakra-ui/react'
import { Link } from '@chakra-ui/react'
import "./login.css"


const AUTH_URL = "https://accounts.spotify.com/authorize?client_id=81ff2f0dc507455993f54ab71e8cc8bb&response_type=code&redirect_uri=http://localhost:3000/homepage&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state%20user-library-modify"

// const authEndpoint = "https://accounts.spotify.com/authorize?"
// const clientId = "81ff2f0dc507455993f54ab71e8cc8bb"
// const redirectUri = "http://localhost:3000/homepage"
// const scopes = ["user-read-email", "user-read-private", "user-library-read", "user-library-modify", "user-read-playback-state", "user-modify-playback-state", "user-library-modify"]

// export const loginEndpoint = `${authEndpoint}client_id=${clientId}&redirect_url=${redirectUri}&scope=${scopes.join("%20")}&response_type=token&show_dialogue=true`

function Login(){
    return(<div className="login-btn">
        <h1>Welcome to Canticum</h1>
        <Button  
        bg={'green'}>
        <Link href={AUTH_URL}>
        Login to Spotify
        </Link>
        </Button>
       
    
    </div>)
}
console.log(Button)
export default Login; 
