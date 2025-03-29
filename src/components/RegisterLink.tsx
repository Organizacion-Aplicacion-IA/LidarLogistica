import { useHistory } from "react-router-dom";

interface RegisterLinkProps {
  text?: string;        
  route?: string;      
  linkText?: string;  
}

const RegisterLink: React.FC<RegisterLinkProps> = ({
  text = "¿No tienes una cuenta?", 
  route = "/sign-in",            
  linkText = "Registrate",       
}) => {
  const history = useHistory();

  const handleRedirect = () => {
    history.push(route); 
  };

  return (
    <p className="register-text" onClick={handleRedirect}>
      {text} <span className="register-link">{linkText}</span> 
    </p>
  );
};

export default RegisterLink;
