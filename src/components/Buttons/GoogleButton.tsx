import { IonButton } from "@ionic/react";
import googleLogo from "../../assets/images/icons/google-icon.svg"; // Importa la imagen PNG

const GoogleButton: React.FC = () => {
  return (
    <IonButton expand="block" fill="outline" className="google-button">
      <img src={googleLogo} alt="Google" style={{ width: '20px', marginRight: '10px' }} /> {/* Usa la imagen PNG */}
      Google
    </IonButton>
  );
};

export default GoogleButton;
