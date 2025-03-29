import { IonContent, IonPage } from "@ionic/react";
import {useHistory} from "react-router-dom";
import LogoTitle from "../../components/LogoTitle";
import EmailInputField from "../../components/Inputs/EmailInputField"; 
import PasswordInputField from "../../components/Inputs/PasswordInputField"; 
import Button from "../../components/Buttons/Button"; 
import GoogleButton from "../../components/Buttons/GoogleButton"; 
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
        <div style={{ marginBottom: "40px" }}>
          <LogoTitle />
          </div>

          <div className="form-container">
          <div style={{ marginBottom: "24px" }}>
            <EmailInputField label="Correo electrónico" placeholder="" />
            </div>
            <div style={{ marginBottom: "8px" }}>
            <PasswordInputField label="Contraseña" placeholder="" />
            </div>
            
            <div style={{ marginBottom: "40px" }}>
              <ForgotPasswordLink 
                text={<span style={{ textDecoration: "underline" }}>Has olvidado tu contraseña</span>} 
                redirectTo="/forgot-password" 
              />
            </div>

            <div style={{ marginBottom: "25px", padding: "0px 0px"}}>
            <Button onClick={handleLogin}>Iniciar sesión</Button>
            </div>
            <div style={{ marginBottom: "120px" }}>
            <GoogleButton />
            </div>
            <div className="register-link-container">
            <RegisterLink />
            </div>

          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
