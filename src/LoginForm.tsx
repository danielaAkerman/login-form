import React from "react";
import { TextField } from "./TextField";

type formProps = {
  onLogin: (params: { email: string; password: string }) => any;
};

function LoginForm(props: formProps) {
  function onSubmitHandler(e) {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    props.onLogin({ email, password });
  }
  return (
    <form onSubmit={onSubmitHandler}>
      <TextField label="Email" type="email" name="email" />
      <TextField label="Contraseña" type="password" name="password" />
      <button>Entrar</button>
    </form>
  );
}

export { LoginForm };
