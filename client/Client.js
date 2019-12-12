import HttpClient from './httpClient';
import AppSettings from '../settings/appi.settings';

class Client {
  constructor() {
    this.httpClient = new HttpClient();
    this.appSettings = new AppSettings();
  }

  login = async (username, password) => {
    let response;
    try {
      const request = { username, password };
      response = await this.httpClient.post(this.appSettings.ENDPOINT_GET_ACCES, request);
    } catch (error) {
      return (response = 401);
    }

    return response;
  };
  //Libros
  getProducto = async id => {
    let response;
    try {
      response = await this.httpClient.get(this.appSettings.ENDPOINT_PRODUCTO + '/' + id, {});
      return response;
    } catch (error) {
      console.log('Mi error' + error);
    }
    
  };
  createBook = async book => {
    const response = await this.httpClient.post(this.appSettings.ENDPOINT_BOOK, book);
    return response.data;
  };

  getBookByName = async filter => {
    const request = {
      filter: {
        where: {
          nombre: filter,
          activo: true
        }
      }
    };
    const response = await this.httpClient.get(this.appSettings.ENDPOINT_BOOK, request);
    return response;
  };
}
export default Client;
