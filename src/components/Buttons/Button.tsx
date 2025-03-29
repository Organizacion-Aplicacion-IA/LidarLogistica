import { IonButton } from "@ionic/react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLIonButtonElement>;
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <IonButton
      style={{
        width: "100%", // Ancho flexible
        height: "48px", // Altura fija
        boxShadow: "0px 0px 40px 0px rgba(38, 38, 38, 0.20)"// Corregido el camelCase
      }}
      color="dark"
      onClick={onClick}
    >
      {children}
    </IonButton>
  );
};

export default Button;
