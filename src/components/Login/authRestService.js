import restApiService from '../../restApiService/RestApiService';

class AuthRestService {
  logIn(username, password) {
    return restApiService.post('auth', {
      username,
      password,
    });
  }
}

export default new AuthRestService();
