import axios from "axios";

export const apis = () => {
  return axios.create({
    baseURL: "https://dummyapi.io/data/v1/",
    headers: { 
      'app-Id': '63a89fd8ad85a11d1fd0d094',
      limit:"10"
    }
  });
};
