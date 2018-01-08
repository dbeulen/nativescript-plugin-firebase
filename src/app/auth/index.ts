import * as firebase from "../../firebase";
import { LoginType, User } from "../../firebase";

export module auth {
  export class Auth {
    private authStateChangedHandler;
    public currentUser: User;

    public onAuthStateChanged(handler: (user: User) => void): void {
      this.authStateChangedHandler = handler;
      console.log(">> added onAuthStateChanged handler");
    };

    public signOut(): Promise<any> {
      return new Promise((resolve, reject) => {
        firebase.logout()
            .then(() => {
              this.currentUser = undefined;
              this.authStateChangedHandler && this.authStateChangedHandler();
              resolve();
            })
            .catch(err => {
              reject({
                // code: "",
                message: err
              });
            });
      });
    }

    public signInWithEmailAndPassword(email: string, password: string): Promise<any> {
      return new Promise((resolve, reject) => {
        firebase.login({
          type: LoginType.PASSWORD,
          passwordOptions: {
            email: email,
            password: password
          }
        }).then((user: User) => {
          this.currentUser = user;
          this.authStateChangedHandler && this.authStateChangedHandler(user);
          resolve();
        }, (err => {
          reject({
            // code: "",
            message: err
          });
        }));
      });
    }

    public createUserWithEmailAndPassword(email: string, password: string): Promise<any> {
      return firebase.createUser({
        email: email,
        password: password
      });
    }

    public signInAnonymously(): Promise<any> {
      return new Promise((resolve, reject) => {
        firebase.login({
          type: LoginType.ANONYMOUS
        }).then((user: User) => {
          this.currentUser = user;
          this.authStateChangedHandler && this.authStateChangedHandler(user);
          resolve();
        }, (err => {
          reject({
            // code: "",
            message: err
          });
        }));
      });
    }

    public fetchProvidersForEmail(email: string): Promise<any> {
      return firebase.fetchProvidersForEmail(email);
    }
  }
}
