import axios from "axios"

const instance = axios.create({
    baseURL:"https://api.themoviedb.org/3",
    params: {
        api_key: "8f60a9e71d1bcd98519b31dc7f2de2a9",
        language: "ko-KR",

    }
})

export default instance;