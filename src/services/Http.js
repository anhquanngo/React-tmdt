import axios from "axios";
import ApiConfig from "../config/api";

const Http = axios.create({
  baseURL: ApiConfig.BASE_URL_API,
});

export default Http;
