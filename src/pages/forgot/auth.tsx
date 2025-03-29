import { IonContent, IonPage } from "@ionic/react";
import { useHistory } from "react-router-dom";
import LogoTitle from "../../components/LogoTitle";
import RegisterLink from "../../components/RegisterLink";
import Button from "../../components/Buttons/Button";
import BackButton from "../../components/Buttons/BackButton";
import "../styles.css";
import ForgotPasswordLink from "../../components/ForgotPasswordLink"; 
import SecurityCodeInput from "../../components/Inputs/SecurityCodeInput";

const Auth: React.FC = () => {
  const history = useHistory();

  const handleNext = () => {
    console.log("Procesar recuperación de contraseña...");
    history.push("/new-password"); 
  };

  const handlePrivacyPolicyClick = () => {
    history.push("/forgot-password");
  };

  return (
    <IonPage>
      <IonContent className="ion-padding forgot-container">
        <div className="forgot-wrapper">
        <div style={{ marginBottom: "29px" }}>
          <LogoTitle 
            title="Verificación de seguridad" 
            subtitle="Hemos enviado un código de seguridad a *****@gmail.com"/>
            </div>
          <div style={{ marginBottom: "40px" }}>
          <BackButton />
          </div>
          <div className="form-container">

            <div style={{ marginBottom: "24px" }}>
            <SecurityCodeInput />
            </div>

            <div style={{ textAlign: "center", marginBottom: "40px",  fontSize: "14px", color: "#262627" }}>
            <p>No recibí un código{" "}
              <span style={{ textDecoration: "underline", cursor: "pointer" }}onClick={handlePrivacyPolicyClick}>Haga clic para reenviar </span>
            </p>
          </div>

            <div style={{ marginBottom: "151px" }}>            
            <Button onClick={handleNext}>Siguiente</Button>
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

export default Auth;
