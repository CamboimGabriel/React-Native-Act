import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

let url;
if (__DEV__) {
  url = "https://floating-peak-95047.herokuapp.com/";
} else {
  url = "https://floating-peak-95047.herokuapp.com/";
}

const instance = axios.create({
  baseURL: url,
});

instance.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default instance;
