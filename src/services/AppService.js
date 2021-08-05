import { environment } from '../environments';
import axios from 'axios';
import { isEmpty } from 'lodash';

class AppService {

  constructor() {
    this.http = axios.create({
      baseURL: environment.apiMain,
    });  
    this.http.defaults.params = {};
  }  
  init(accessToken = '') {
    this.setAccessToken(accessToken);
  }
  setAccessToken(accessToken) {
    if (!isEmpty(accessToken)) {
      this.http.defaults.headers.common['Authorization'] = 'bearer ' + accessToken;
    } else {
      delete this.http.defaults.headers.common['Authorization'];
    }
  }
  getPath(service) {
    return '/' + service;
  }
}

export default AppService;
