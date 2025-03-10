import { IonInput, IonItem, IonText } from "@ionic/react";
import { useState } from "react";

interface EmailInputFieldProps {
  label: string;
  placeholder: string;
}

const EmailInputField: React.FC<EmailInputFieldProps> = ({ label, placeholder }) => {
  const [isFocused, setIsFocused] = useState(false); // Estado para detectar si el input está enfocado

  // Maneja el evento de enfoque
  const handleFocus = () => setIsFocused(true);
  
  // Maneja el evento de desenfoque
  const handleBlur = () => setIsFocused(false);

  return (
    <div>
      <IonText className="input-label">{label}</IonText>
      <IonItem 
        className={`custom-input ${isFocused ? "focused" : ""}`} // Añade la clase 'focused' cuando está enfocado
      >
        <IonInput 
          type="email" 
          placeholder={placeholder} 
          className="ionic-input"
          onFocus={handleFocus} // Detecta cuando el input recibe enfoque
          onBlur={handleBlur}   // Detecta cuando el input pierde el enfoque
        />
      </IonItem>
    </div>
  );
};

export default EmailInputField;
