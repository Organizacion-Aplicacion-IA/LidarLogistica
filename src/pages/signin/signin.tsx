import { IonContent, IonPage } from "@ionic/react";
import LogoTitle from "../../components/LogoTitle";
import EmailInputField from "../../components/EmailInputField"; 
import PasswordInputField from "../../components/PasswordInputField"; 
import BackButton from "../../components/BackButton";
import Button from "../../components/Button"; 
import RegisterLink from "../../components/RegisterLink"; // Importa el componente
import "../styles.css";

const Login: React.FC = () => {
  return (
    <IonPage>
      <IonContent className="ion-padding login-container">
        <div className="login-wrapper">
        <LogoTitle 
            title="Registrandose " 
            subtitle="Por favor, introduzca sus datos " 
          />
          <BackButton />

          <div className="form-container">
            <EmailInputField label="Nombre(s)" placeholder="" />
            <EmailInputField label="Apellido(s)" placeholder="" />
            <EmailInputField label="Correo electrónico" placeholder="" />
            <PasswordInputField label="Contraseña" placeholder="" />
            <PasswordInputField label="Confirma contraseña" placeholder="" />
            
            <Button>Registrate</Button>

            <RegisterLink text="¿Ya tienes una cuenta?" route="/login" linkText="Inicia sesión"/>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
