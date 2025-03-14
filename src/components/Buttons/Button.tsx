import { IonButton } from "@ionic/react";

interface ButtonProps {
  children: React.ReactNode; // Permite contenido dinámico dentro del botón
  onClick?: React.MouseEventHandler<HTMLIonButtonElement>; // Cambio aquí a HTMLIonButtonElement
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <IonButton expand="block" color="dark" onClick={onClick} style={{ marginTop: "30px" }}>
      {children}
    </IonButton>
  );
};

export default Button;
