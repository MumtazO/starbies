import Login from './pages/Login'
// import setClientToken from "./components/Spotify.js"
// import apiClient from "./components/Spotify.js"
import { useState, useEffect} from 'react'
import axios from "axios"


const apiClient = axios.create({
    baseURL: "https://api.spotify.com/v1/",
    
})

const setClientToken = (token) => {
    apiClient.interceptors.request.use(async function (config) {
      config.headers.Authorization = "Bearer " + token;
      console.log("config value is",config)
      return config;
    });
  };


function App() {
    const [token, setToken] = useState("")
    const [album, setAlbum] = useState()

    useEffect(()=>{
        apiClient.get("albums").then(response => {
            console.log("trying to get album data", response.data)
            
        })
    },[])

    useEffect(()=>{
        const token =  window.localStorage.getItem("_token stored")
        const hash = window.location.search
        if (!token && hash){
            const _token = hash.split("=")[1]
            window.localStorage.setItem("_token stored", _token)
            setToken(_token)
            setClientToken(_token)
        } else {
            setToken(token)
            setClientToken(token)
        }
    },[])
    
    return !token ? (
        <Login/> 
       
    ): (
        <>You have successfully logged in</>
    )
}

export default App;


