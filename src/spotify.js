import axios from 'axios'


const AuthEndPoint = "https://accounts.spotify.com/authorize?"
const clientId = "d9404e2530214ffe8c2c8422cb135b21"
const redirectUri = "http://localhost:5173/"
const scopes = [
                    'user-library-read',
                    'playlist-read-private',
                ]

export const loginEndPoint = `${AuthEndPoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join("%20")}
&response_type=token&show_dialog=true`

const apiClient = axios.create({
    baseURL: 'https://api.spotify.com/v1/',
})

export const setClientToken = (token) =>{
    apiClient.interceptors.request.use(async function(config){
        config.headers.Authorization = `Bearer ${token}`
        return config
    })
}

export default apiClient