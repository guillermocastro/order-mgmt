// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  url: 'http://localhost:3400',
  // Firebase config
  firebaseConfig:{
    apiKey: "AIzaSyATHvQtosNbwOFwoEJHCLiIN-dJh53tvfo",
    authDomain: "valkian-e1808.firebaseapp.com",
    databaseURL: "https://valkian-e1808.firebaseio.com",
    projectId: "valkian-e1808",
    storageBucket: "valkian-e1808.appspot.com",
    messagingSenderId: "716981921188"}
};
