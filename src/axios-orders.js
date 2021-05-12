import axios from "axios";

const instance = axios.create({
  baseURL: "https://react-my-burger-6c980-default-rtdb.firebaseio.com/",
});

export default instance;
