import { IonContent, IonPage } from "@ionic/react";
import { useHistory } from "react-router-dom";
import LogoTitle from "../../components/LogoTitle";
import RegisterLink from "../../components/RegisterLink";
import Button from "../../components/Button/Button";
import BackButton from "../../components/Button/BackButton"; 
import EmailInputField from "../../components/EmailInputField"; 
import "../styles.css";

const Forgot: React.FC = () => {
  const history = useHistory();

  const handleNext = () => {
    console.log("Procesar recuperación de contraseña...");
    history.push("/auth"); 
  };

  return (
    <IonPage>
      <IonContent className="ion-padding forgot-container">
        <div className="forgot-wrapper">
          <LogoTitle 
            title="¿Necesita ayuda con su contraseña?" 
            subtitle="Escriba su correo electrónico para poder ayudarlo." 
          />
          <BackButton />
          <div className="form-container">
            <EmailInputField label="Correo electrónico" placeholder="Tu correo" />
            <Button onClick={handleNext}>Siguiente</Button>
            <RegisterLink />
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Forgot;
