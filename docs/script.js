let registerUser = async () => {
  let password = document.querySelector("#password").value;
  let RetypePassword = document.querySelector("#retype").value;

  if (password !== RetypePassword) {
    alert("Passwords do not match");
    return;
  }

  let user = {
    name: document.querySelector("#name").value,
    email: document.querySelector("#email").value,
    password,
  };

  try {
    let response = await fetch(
      "https://resetpassworddbase.herokuapp.com/user/signup",
      {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    let responseData = await response.json();
    console.log(responseData);
    alert(responseData.message);
  } catch (error) {
    console.log(error);
  }
};

let loginUser = async () => {
  let email = document.querySelector("#loginEmail").value;
  let password = document.querySelector("#loginPassword").value;

  try {
    let response = await fetch(
      "https://resetpassworddbase.herokuapp.com/user/login",
      {
        method: "POST",
        body: JSON.stringify({
          email,
          password,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    let responseData = await response.json();
    console.log(responseData);
    alert(responseData.message);
  } catch (error) {
    console.log(error);
  }
};

let changePassword = async () => {
  let email = document.querySelector("#change").value;
  try {
    let response = await fetch(
      "https://resetpassworddbase.herokuapp.com/user/change",
      {
        method: "POST",
        body: JSON.stringify({
          email,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    let responseData = await response.json();
    alert("Check you mail id");
  } catch (error) {
    console.log(error);
  }
};
