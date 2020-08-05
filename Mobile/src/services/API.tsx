import Axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

const http = Axios.create({
  baseURL: 'http://192.168.1.68:3000/api',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

http.interceptors.request.use(async (config) => {
  const token = await AsyncStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// http.interceptors.response.use(
//   (response) => {
//     if (response && response.data) {
//       return response.data.data;
//     }

//     return response;
//   },
//   (error) => {
//     if (error.response) {
//       const statusSemAcesso = [403, 401];
//       const semAcesso = statusSemAcesso.indexOf(error.response.status) >= 0;
//       if (semAcesso) return Promise.reject('Você não tem acesso');
//       else {
//         return Promise.reject(error.message);
//       }
//     } else {
//       return Promise.reject(error.message);
//     }
//   },
// );

export class API {
  static post(resource: string, data: object) {
    return http.post(resource, data);
  }

  static patch(resource: string, data: object) {
    return http.patch(resource, data);
  }

  static put(resource: string, data: object) {
    return http.put(resource, data);
  }

  static delete(resource: string) {
    return http.delete(resource);
  }

  static get(resource: string) {
    return http.get(resource);
  }
}

export default API;
