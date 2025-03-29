import { IonContent, IonPage } from "@ionic/react";
import { useHistory } from "react-router-dom";
import { useState } from "react";

import LogoTitle from "../../components/LogoTitle";
import EmailInputField from "../../components/Inputs/EmailInputField"; 
import PasswordInputField from "../../components/Inputs/PasswordInputField"; 
import BackButton from "../../components/Buttons/BackButton";
import Button from "../../components/Buttons/Button"; 
import RegisterLink from "../../components/RegisterLink"; 
import "../styles.css";

const SignIn: React.FC = () => {
  const history = useHistory();
  const [isChecked, setIsChecked] = useState(false);

  const handleRegister = () => {
    if (isChecked) {
      history.push("/tabs");
    } else {
      alert("Debes aceptar nuestra política de privacidad.");
    }
  };

  const handlePrivacyPolicyClick = () => {
    history.push("/privacy-policy");
  };

  return (
    <IonPage>
      <IonContent className="ion-padding login-container">
        <div className="login-wrapper">
          <LogoTitle 
            title="Registrándose" 
            subtitle="Por favor, introduzca sus datos"
          />
          <div style={{ marginBottom: "40px" }}>
            <BackButton />
          </div>
          <div className="form-container">
            <div style={{ marginBottom: "24px" }}>
              <EmailInputField label="Nombre(s)*" placeholder="" />
            </div>
            <div style={{ marginBottom: "24px" }}>
              <EmailInputField label="Apellido(s)*" placeholder="" />
            </div>
            <div className="input-container" style={{ marginBottom: "24px"}}>
              <EmailInputField label="Fecha nacimiento*" placeholder="" />
              <EmailInputField label="País/Región*" placeholder="" />
            </div>
            <div style={{ marginBottom: "24px" }}>
              <EmailInputField label="Correo electrónico*" placeholder="" />
            </div>
            <div style={{ marginBottom: "24px" }}>
              <PasswordInputField label="Contraseña*" placeholder="" />
            </div>
            <div style={{ marginBottom: "24px" }}>
              <PasswordInputField label="Confirma contraseña*" placeholder="" />
            </div>

            <div style={{ marginBottom: "40px", color: "#737373", fontSize: "14px" }}>
              <label>
                <input type="checkbox" checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)}/> Acepta nuestra amigable{" "}
                <span style={{ textDecoration: "underline", color: "#737373", cursor: "pointer" }} onClick={handlePrivacyPolicyClick}> política de privacidad
                </span>
              </label>
            </div>

            <div style={{ paddingBottom: "30px" }}>
              <Button onClick={handleRegister}>Regístrate</Button>
            </div>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default SignIn;
