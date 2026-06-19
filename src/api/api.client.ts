import axios from 'axios';
import { globalRouter } from '../lib/globalRouter';

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true,
});

apiClient.interceptors.response.use(
  (res) => res.data,
  (err) => {
    if (err.response) {
      const status = err.response.status;
      if (status === 401) {
        // Redirect to error page with 401 details
        if (globalRouter.navigate) {
          globalRouter.navigate('/error?code=401&title=Unauthorized&message=Please login to access this resource.');
        }
      } else if (status === 403) {
        // Redirect to error page with 403 details
        if (globalRouter.navigate) {
          globalRouter.navigate('/error?code=403&title=Access Denied&message=You do not have permission to perform this action.');
        }
      }
    }
    return Promise.reject(err.response?.data || err);
  }
);

export default apiClient;
