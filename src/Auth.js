/* eslint no-restricted-globals: 0 */
import auth0 from 'auth0-js';

const LOGIN_SUCCESS_PAGE = "/secret";
const LOGIN_FAILURE_PAGE = "/";

export default class Auth {
  auth0 = new auth0.WebAuth({
    connection: "google-oauth-2",
    accessType: "offline",
    approvalPrompt: "force",
    domain: "dawn-moon-0315.auth0.com",
    clientID: "txXHcrHgGmSLoD8FI3xTOuRus7hj6Rp1",
    redirectUri: "http://localhost:3000/callback",
    audience: "https://dawn-moon-0315.auth0.com/userinfo",
    responseMode: "form_post",
    responseType: "token id_token",
    scope: "openid profile email offline_access"
  })

  constructor() {
    this.login = this.login.bind(this); 
  }
  
  login() {
    this.auth0.authorize();
  }

  handleAuthentication() {
    this.auth0.parseHash((err, authResults) => {
      if ( authResults && authResults.accessToken && authResults.idToken) {
        let expiresAt = JSON.stringify((authResults.expiresIn) * 1000 + new Date().getTime());
        localStorage.setItem("access_token", authResults.accessToken);
        localStorage.setItem("id_token", authResults.idToken);
        localStorage.setItem("expires_at", expiresAt);
        location.pathname = LOGIN_SUCCESS_PAGE;
      } else if (err) {
        location.pathname = LOGIN_FAILURE_PAGE;
        console.error(err)
      }
    })
  }

  isAuthenticated() {
    let expiresAt = JSON.parse(localStorage.getItem("expires_at"));
    return new Date().getTime() < expiresAt;

  }
}   