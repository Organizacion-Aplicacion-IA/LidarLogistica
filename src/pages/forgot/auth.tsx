import { IonContent, IonPage } from "@ionic/react";
import { useHistory } from "react-router-dom";
import LogoTitle from "../../components/LogoTitle";
import RegisterLink from "../../components/RegisterLink";
import Button from "../../components/Buttons/Button";
import BackButton from "../../components/Buttons/BackButton";
import EmailInputField from "../../components/EmailInputField"; 
import "../styles.css";

const Auth: React.FC = () => {
  const history = useHistory();

  const handleNext = () => {
    console.log("Procesar recuperación de contraseña...");
    history.push("/new-password"); 
  };

  return (
    <IonPage>
      <IonContent className="ion-padding forgot-container">
        <div className="forgot-wrapper">
          <LogoTitle 
            title="Verificación de seguridad" 
            subtitle="Hemos enviado un código de seguridad a *****@gmail .com" 
          />
          <BackButton />
          <div className="form-container">
            <EmailInputField label="Codigo de verficacion" placeholder="Ingresa codigo" />
            <Button onClick={handleNext}>Siguiente</Button>
            <RegisterLink />
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Auth;
