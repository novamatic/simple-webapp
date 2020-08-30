import axios from 'axios';
import { createApiUrl } from './restApiServiceUtils';

class RestApiService {
  get(resourceUrl, config = {}) {
    return axios.get(createApiUrl(resourceUrl), config);
  }

  post(resourceUrl, payload = {}, config = {}) {
    return axios.post(createApiUrl(resourceUrl), payload, config);
  }

  put(resourceUrl, payload = {}, config = {}) {
    return axios.put(createApiUrl(resourceUrl), payload, config);
  }
}

export default new RestApiService();
