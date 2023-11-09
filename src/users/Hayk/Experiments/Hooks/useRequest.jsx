import axios from 'axios'
import { useEffect, useState } from 'react'

const initialState = {
  baseURL: "https://jsonplaceholder.typicode.com/",
  url: "",
  timeout: 2000,
  config: {
    params: {}
  },
  data: "",
  status: ""
}

export default function useRequest(state) {
  const [global, setGlobal] = useState({...initialState, ...state})

  axios.defaults.baseURL = global?.baseURL;
  axios.defaults.timeout = global?.timeout;

  useEffect(() => {
    const {url, config} = global;
    axios
    .get(url, config)
    .then(response => setGlobal({...global, data: response.data, status: "OK"}))
    .catch(error => {
      throw new Error(`Something goes to wrong: ${error}`)
    })
  }, [])

  console.log(1);

  return [global, setGlobal]
}







