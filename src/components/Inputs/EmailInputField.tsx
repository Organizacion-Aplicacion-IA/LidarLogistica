import { IonInput, IonItem, IonText } from "@ionic/react";
import { useState } from "react";

interface EmailInputFieldProps {
  label: string;
  placeholder: string;
}

const EmailInputField: React.FC<EmailInputFieldProps> = ({ label, placeholder }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [value, setValue] = useState(""); // Estado para el valor del input
  const [error, setError] = useState(false); // Estado para detectar error

  const handleFocus = () => setIsFocused(true);

  const handleBlur = () => {
    setIsFocused(false);
    setError(value.trim() === ""); // Si el input está vacío, activa el error
  };

  // Función para renderizar el label con el asterisco rojo solo si está presente
  const renderLabel = (label: string) => {
    const parts = label.split("*");
    return parts.map((part, index) => (
      <span key={index}>
        {part}
        {index !== parts.length - 1 && <span className="red-asterisk">*</span>}
      </span>
    ));
  };

  return (
    <div>
      <IonText className="input-label">
        {renderLabel(label)}
      </IonText>
      <IonItem className={`custom-input ${isFocused ? "focused" : ""} ${error ? "error" : ""}`}>
        <IonInput 
          type="email" 
          placeholder={placeholder} 
          className="ionic-input"
          value={value}
          onIonInput={(e) => setValue(e.detail.value!)} // Guarda el valor del input
          onFocus={handleFocus}
          onBlur={handleBlur} // Valida cuando pierde el foco
        />
      </IonItem>
    </div>
  );
};

export default EmailInputField;
