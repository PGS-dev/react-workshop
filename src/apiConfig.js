import axios from 'axios';

const axiosInstance = axios.create({});

const urlTransform = (id = '') => `${id}.json`;

const getItems = () => axiosInstance.get(urlTransform());

const getItem = id => axiosInstance.get(urlTransform(id));

const postItem = data => axiosInstance.post(urlTransform(), data);

const editItem = (id, data) => axiosInstance.put(urlTransform(id), data);

const deleteItem = id => axiosInstance.delete(urlTransform(id));

// authentication token is set globally in App.js during login process
const setDefaults = (uid, token) => {
  axiosInstance.defaults.baseURL = `https://react-pgs-workshop.firebaseio.com/${uid}`;
  axiosInstance.defaults.params = { auth: token };
};

export default { getItems, getItem, postItem, editItem, deleteItem, setDefaults };
