import { IonContent, IonPage } from "@ionic/react";
import { useHistory } from "react-router-dom";
import LogoTitle from "../../components/LogoTitle";
import RegisterLink from "../../components/RegisterLink";
import Button from "../../components/Buttons/Button";
import BackButton from "../../components/Buttons/BackButton"; 
import EmailInputField from "../../components/Inputs/EmailInputField"; 
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
        <div style={{ marginBottom: "40px"}}>
          <LogoTitle 
            title="¿Necesita ayuda con su contraseña?" 
            subtitle="Escriba su correo electrónico para poder ayudarlo." 
          />
          </div>
          <div style={{ marginBottom: "40px" }}>
          <BackButton />
          </div>
          <div className="form-container">
            
            <div style={{ marginBottom: "40px" }}>
            <EmailInputField label="Correo electrónico" placeholder="" />
            </div>

            <div style={{ marginBottom: "222px" }}>
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

export default Forgot;
