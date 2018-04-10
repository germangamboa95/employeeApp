// Initialize Firebase
var config = {
  apiKey: "AIzaSyDw6Eov1v2G0QfdsVqj3D98iefXgX-D0UA",
  authDomain: "feedback-5b053.firebaseapp.com",
  databaseURL: "https://feedback-5b053.firebaseio.com",
  projectId: "feedback-5b053",
  storageBucket: "feedback-5b053.appspot.com",
  messagingSenderId: "90869171582"
};
firebase.initializeApp(config);

const database = firebase.database();



// New employee added event listener
database.ref('employee').on('child_added', function(snapshot) {
  console.log(snapshot.val());
  add_row(snapshot.val());
});


addEmployee('Shahar','designer', '1234', '9000');

// add employee to database
function addEmployee(name, role, start_date, monthly_rate ) {
  const employee_model = {
    name: name,
    role: role,
    start_date: start_date,
    monthly_rate: monthly_rate,
    added_date: firebase.database.ServerValue.TIMESTAMP
  }

  database.ref('employee').push().set(employee_model);

}


function add_row(data) {
  console.log(data);
  $('table').append(`<tr> he ${data.name} </tr>`);
}
