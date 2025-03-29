import { useHistory } from "react-router-dom";

interface ForgotPasswordLinkProps {
  text?: React.ReactNode; // Ahora acepta JSX además de strings
  redirectTo: string;
}

const ForgotPasswordLink: React.FC<ForgotPasswordLinkProps> = ({ text, redirectTo }) => {
  const history = useHistory();

  const handleRedirect = () => {
    history.push(redirectTo); // Redirige a la ruta especificada
  };

  return (
    <p className="forgot-password" onClick={handleRedirect}>
      {text}
    </p>
  );
};

export default ForgotPasswordLink;
