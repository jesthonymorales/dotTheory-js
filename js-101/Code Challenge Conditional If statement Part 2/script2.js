const isAdmin = false;
const isStudent = true;
let message;

if ( isAdmin ) {
  message = 'Welcome admin';
} else if (isStudent === true) {
  message = "Welcome student";
}