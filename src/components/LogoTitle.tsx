import { IonText } from "@ionic/react";

interface LogoTitleProps {
  title?: string;
  subtitle?: string;
}

const LogoTitle: React.FC<LogoTitleProps> = ({ title = "Bienvenido a Laserlogistica", subtitle = "Por favor, introduzca sus datos" }) => {
  return (
    <div className="logo-title-container">
      {/* Logo */}
      <div className="logo-container">
        <img src="/src/assets/images/logo.svg" alt="Logo" className="logo" />
      </div>
      
      {/* Texto de bienvenida dinámico */}
      <IonText className="title">
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </IonText>
    </div>
  );
};

export default LogoTitle;
