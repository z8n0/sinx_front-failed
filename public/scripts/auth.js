const url = "http://localhost:8000/api/v1/users/register";
const user = document.getElementById("input-user");
const password = document.getElementById("input-password");
const email = "null.@gmail.com";

console.log(user.value);
console.log(password.value);

// TODO: So, Because user can register and login in one form, we after the form submit, should check is there any user with this username or not, if it was, the script must request to login endpoint and if it wasn't, it must request to register endpoint. I wanted to do this but I thought that It's better that you do it. (login endpoint is not ready yet so just add a log for when it should request to login and I really suggest you to create a class or another file that has all API functions and use them. good luck!)

function post() {
  try {
    const response = axios.post(url, {
      Username: user.value,
      Email: email,
      password: password.value,
    }, {
      headers: {
        'Content-Type': 'application/json'
      },
    });
    console.log(response.data);

  } catch (error) {
    const response = error.response
    switch (response.response.status) {
      case 400:

        if (response.data.err.code === "INVALID_REQUEST") {

          console.error("Invalid JSON format!");
        } else {

          console.error("Invalid JSON format!");
        }
        break;
      case 401:

        if (response.data.err.code === "SOME_SPECIFIC_CODE_FOR_401") {

          console.error("Unauthorized: Specific error code found.");
        } else {

          console.error("Unauthorized: Authentication failed.");
        }
        break;
      case 404:

        if (response.data.err.code === "USER_NOT_FOUND") {

          console.error("User not found!");
        } else {

          console.error("User not found!");
        }
        break;
      case 409:

        if (response.data.err.code === "USERNAME_EXISTS") {

          console.error("Username already exists!");
        } else if (response.data.err.code === "EMAIL_EXISTS") {

          console.error("Email already exists!");
        }
        break;
      case 500:
        // message / code ro nadaram
        if (response.data.err.code === "SOME_SPECIFIC_CODE_FOR_500") {
          // message / code ro nadaram
          console.error("Internal Server Error: Specific error code found.");
        } else {
          // message / code ro nadaram
          console.error("Internal Server Error: An unexpected error occurred on the server.");
        }
        break;
      default:

        console.error(`An unhandled HTTP error occurred with status: ${response.response.status}`);
        break;
    }


  }

}
