import HttpClient from "../client/httpClient";
import AppSettings from "../settings/appi.settings";
import { AsyncStorage } from "react-native";
import CONSTANTS from "../settings/app.constants";

export default class AuthService {
  constructor() {
    this.httpClient = new HttpClient();
    this.appiSettings = new AppSettings();
  }
  getCredentials = async () => {
    const credential = await AsyncStorage.getItem(CONSTANTS.KEY_CREDENTIALS_DATA);
    return JSON.parse(credential);
  };

  saveCredentialsData = async (username, password) => {
    const encode = {
      username,
      password
    };
    const response = await AsyncStorage.setItem(
      CONSTANTS.KEY_CREDENTIALS_DATA,
      JSON.stringify(encode)
    );
  };
  saveRoles = async memberRoles => {
    const response = await AsyncStorage.setItem(
      CONSTANTS.KEY_MEMBER_ROLES,
      JSON.stringify(memberRoles)
    );
  };
  getRoles = async () => {
    const roles = await AsyncStorage.getItem(CONSTANTS.KEY_MEMBER_ROLES);
    return JSON.parse(roles);
  };
  saveCurrentRole = async currentRole => {
    const response = await AsyncStorage.setItem(CONSTANTS.KEY_CURRENT_ROLE, currentRole);
  };
  getCurrentRole = async () => {
    const response = await AsyncStorage.getItem(CONSTANTS.KEY_CURRENT_ROLE);
    return response;
  };
}
