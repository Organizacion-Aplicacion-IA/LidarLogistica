import { IonContent, IonPage } from "@ionic/react";
import {useHistory} from "react-router-dom";
import LogoTitle from "../../components/LogoTitle";
import EmailInputField from "../../components/EmailInputField"; 
import PasswordInputField from "../../components/PasswordInputField"; 
import Button from "../../components/Button"; 
import GoogleButton from "../../components/GoogleButton"; 
import ForgotPasswordLink from "../../components/ForgotPasswordLink"; 
import RegisterLink from "../../components/RegisterLink"; 
import "../styles.css";

const Login: React.FC = () => {
  const history = useHistory();

  const handleLogin = () => {
    history.push("/Tabs");
  };
  return (
    <IonPage>
      <IonContent className="ion-padding login-container">
        <div className="login-wrapper">
          <LogoTitle />

          <div className="form-container">
            <EmailInputField label="Correo electrónico" placeholder="Tu correo" />
            <PasswordInputField label="Contraseña" placeholder="Tu contraseña" />
            
            <ForgotPasswordLink text="Has olvidado tu contraseña" redirectTo="/forgot-password" />
            
            <Button onClick={handleLogin}>Iniciar sesión</Button>

            <GoogleButton />

            <RegisterLink />
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
