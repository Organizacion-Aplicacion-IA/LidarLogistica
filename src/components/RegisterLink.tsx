import { useHistory } from "react-router-dom";

interface RegisterLinkProps {
  text?: string;        // Texto antes del enlace
  route?: string;       // Ruta a la que redirigir
  linkText?: string;    // Texto del enlace
}

const RegisterLink: React.FC<RegisterLinkProps> = ({
  text = "¿No tienes una cuenta?", // Texto predeterminado
  route = "/sign-in",            // Ruta predeterminada
  linkText = "Registrate",        // Texto predeterminado para el enlace
}) => {
  const history = useHistory();

  const handleRedirect = () => {
    history.push(route); // Redirige a la ruta proporcionada
  };

  return (
    <p className="register-text" onClick={handleRedirect}>
      {text} <span className="register-link">{linkText}</span> {/* Aquí se muestra el texto del enlace */}
    </p>
  );
};

export default RegisterLink;
