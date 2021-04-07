import { create } from 'apisauce';
import Config from 'react-native-config';

const api = create({
  baseURL: Config.API_BASE_URL
});

export default api;
