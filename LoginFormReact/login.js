let karthi = React.createElement(
  "form",
  {
    id: "login",
  },

  React.createElement(
    "label",
    null,
    React.createElement(
      "center",
      null,
      React.createElement("br"),
      React.createElement("br"),

      React.createElement("h1", null, "Login Form"),

      React.createElement("b", null, "USERNAME"),
      React.createElement("span", null, " : "),
      React.createElement("input", {
        name: "username",
        type: "text",
        placeholder: "Enter Username",
      })
    )
  ),

  React.createElement("br"),
  React.createElement("br"),

  React.createElement(
    "label",
    null,
    React.createElement(
      "center",
      null,
      React.createElement("b", null, "PASSWORD"),
      React.createElement("span", null, " : "),
      React.createElement("input", {
        name: "password",
        type: "password",
        placeholder: "Enter Password",
      }),
      React.createElement("br"),
      React.createElement("br"),
      React.createElement("button", null, "Signin"),
      React.createElement("span", null, " | "),
      React.createElement("button", null, "Signup")
    )
  )
);

/*

ReactDOM.render(formEl,document.querySelector("#root"))
let h1element = React.createElement("h1", null, "I am Kartheeswaran");
let h2element = React.createElement("h1", null, "From Kovilpatti");
let karthi = React.createElement("div", null ,[h1element,h2element] )
*/

ReactDOM.render(karthi, document.getElementById("root"));
