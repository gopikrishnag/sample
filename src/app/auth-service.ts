export class AuthService {
    loggedIn = false; //true

    isAuthenticate () {
        const promise = new Promise(
            (reslove, reject) => {
                setTimeout(() => {
                    reslove(this.loggedIn);
                }, 800);
            }
        );
        return promise;
    }

    login() {
        this.loggedIn = true;
    }

    logout()    {
        this.loggedIn = false;
    }
}
