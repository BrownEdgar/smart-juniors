import axios from "axios";


const instance = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com/',
    // url:'todos',
    params:{
      _limit:16
            }
})

export default instance