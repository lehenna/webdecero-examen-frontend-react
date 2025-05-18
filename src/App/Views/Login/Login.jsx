import LoginForm from "../../../Components/LoginForm/LoginForm";
import Card from "../../../Components/ui/Card/Card";

const Login = () => {
  return (
    <Card className="login-card">
      <h1 className="login-card__title">Iniciar sesión</h1>
      <LoginForm />
    </Card>
  );
};

export default Login;
