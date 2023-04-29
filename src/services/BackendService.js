import axios from "axios";

// อ่าน Token จาก local storage

let token = ''

if(localStorage.getItem('user')){
  
  let userStorage = localStorage.getItem('user')
  let userStorageJSON = JSON.parse(userStorage)
  token = userStorageJSON['token']
}else{
  token = ''
}


const BackendService = axios.create({
  baseURL: "http://localhost:8000/api/",
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
    "Authorization": `Bearer ${token}`
  },
});

export default BackendService;