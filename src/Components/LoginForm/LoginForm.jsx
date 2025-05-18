import { nonEmpty, object, pipe, string } from "valibot";

import useLogin from "../../Hooks/Login";
import useProfileContext from "../../Hooks/ProfileContext";

import UserIcon from "../Icons/UserIcon";
import LockIcon from "../Icons/LockIcon";
import Field from "../ui/Form/Field/Field";
import Form from "../ui/Form/Form";
import Input from "../ui/Input/Input";
import Button from "../ui/Button/Button";
import loginUser from "../../Api/Login";

const schema = object({
  username: pipe(string(), nonEmpty("Usuario requerido")),
  password: pipe(string(), nonEmpty("Contraseña requerida")),
});

const LoginForm = () => {
  const { fetchProfile } = useProfileContext();
  const { onSubmit, loading } = useLogin(loginUser, fetchProfile);

  return (
    <Form onSubmit={onSubmit} schema={schema}>
      <Field
        name="username"
        icon={<UserIcon />}
        render={(props) => <Input placeholder="Usuario" {...props} />}
      />
      <Field
        name="password"
        icon={<LockIcon />}
        render={(props) => (
          <Input {...props} placeholder="Contraseña" type="password" />
        )}
      />
      <Button type="submit" disabled={loading}>
        {loading ? "AUTENTICANDO..." : "AUTENTICAR"}
      </Button>
    </Form>
  );
};

export default LoginForm;
