import { IonContent, IonPage } from "@ionic/react";
import { useHistory } from "react-router-dom";
import LogoTitle from "../../components/LogoTitle";
import RegisterLink from "../../components/RegisterLink";
import Button from "../../components/Buttons/Button";
import BackButton from "../../components/Buttons/BackButton";
import PasswordInputField from "../../components/PasswordInputField"; 
import "../styles.css";

const NewPassword: React.FC = () => {
  const history = useHistory();

  const handleNext = () => {
    console.log("Procesar recuperación de contraseña...");
    history.push("/login"); 
  };

  return (
    <IonPage>
      <IonContent className="ion-padding forgot-container">
        <div className="forgot-wrapper">
          <LogoTitle 
            title="Escribe nueva contraseña " 
            subtitle="Escribir tu nueva contraseña. " 
          />
          <BackButton />
          <div className="form-container">
          <PasswordInputField label="Nueva contraseña" placeholder="Escribe nueva contraseña" />
            <Button onClick={handleNext}>Siguiente</Button>
            <RegisterLink />
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default NewPassword;
