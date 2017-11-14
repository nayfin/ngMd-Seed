// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyAfKGzC-xdoA363ipOKD69JdA6obGQxVPM",
    authDomain: "tft-materialseed.firebaseapp.com",
    databaseURL: "https://tft-materialseed.firebaseio.com",
    projectId: "tft-materialseed",
    storageBucket: "tft-materialseed.appspot.com",
    messagingSenderId: "1015795404760"
  }
};
