import { IonContent, IonPage } from "@ionic/react";
import { useHistory } from "react-router-dom";
import LogoTitle from "../../components/LogoTitle";
import RegisterLink from "../../components/RegisterLink";
import Button from "../../components/Buttons/Button";
import BackButton from "../../components/Buttons/BackButton";
import PasswordInputField from "../../components/Inputs/PasswordInputField"; 
import "../styles.css";

const NewPassword: React.FC = () => {
  const history = useHistory();

  const handleNext = () => {
    console.log("Procesar recuperación de contraseña...");
    history.push("/tabs"); 
  };

  return (
    <IonPage>
      <IonContent className="ion-padding forgot-container">
        <div className="forgot-wrapper">
          <LogoTitle title="Escribe nueva contraseña " subtitle="Escribir tu nueva contraseña."/>
          <div style={{ marginBottom: "40px", marginTop: "40px"}}>
          <BackButton />
          </div>
          <div className="form-container">
          <div style={{ marginBottom: "24px"}}>
          <PasswordInputField label="Contraseña*" placeholder="" />
          </div>
          <div style={{ marginBottom: "40px"}}>
          <PasswordInputField label="Verifica contraseña*" placeholder="" />
          </div>
          <div style={{ marginBottom: "156px" }}>
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

export default NewPassword;
