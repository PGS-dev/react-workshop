import axios from 'axios';

// authentication token is set globally in App.js during login process
const axiosInstance = axios.create({
  baseURL: 'https://react-pgs-workshop.firebaseio.com/',
});

class HTTP {
  static get(url = '') {
    return axiosInstance.get(`${url}.json`);
  }
  static post(url = '', data) {
    return axiosInstance.post(`${url}.json`, data);
  }
  static put(url = '', data) {
    return axiosInstance.put(`${url}.json`, data);
  }
  static delete(url = '') {
    return axiosInstance.delete(`${url}.json`);
  }
  static setDefaults(uid, token) {
    axiosInstance.defaults.baseURL = `https://react-pgs-workshop.firebaseio.com/${uid}`;
    axiosInstance.defaults.params = { auth: token };
  }
}

export default HTTP;
