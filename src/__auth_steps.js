/* steps to creating a project using google firebase

*** 1. create a new firebase project in console.google.com
*** 2. run npm install firebase and inisialze firebase creating a file firebase.init.js in src folder
*** 3. import getAuth to export auth from firebase.init.js
*** 4. firebase settings > Authentication > enable Email and password auth
***  5. Create aignup, login component and setup route
***  6. attach form field handler and form submit handler
***  7. npm install --save react-firebase-hooks 
***  8. useCreateUserWithEmailAndPassword from firebase auth hooks github  
***  9. If user is created redirect to expected page
***  10. useSignInWithEmailAndPassword for sign in
***  11. create RequireAuth component ==> check user exists also tract user location
***  12. In route wrap protected component by RequireAuth Component

*/




// Firebase hosting steps
// 1. npm install -g firebase-tools (one time for your computer)
// 2. firebase login (one time for your computer)
// 3. firebase init (one time for each project])
// 4. npm run build (everytime you want to deploy)
// 5. firebase deploy (everytime you want to deploy)