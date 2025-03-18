import { IonInput, IonItem, IonText } from "@ionic/react";
import { useState } from "react";
import eyeImage from "../../assets/icons/eye.svg"; // Imagen para el icono 'eye' //corregido
import eyeOffImage from "../../assets/icons/eye-off.svg"; // Imagen para el icono 'eyeOff' //corregido

interface PasswordInputFieldProps {
  label: string;
  placeholder: string;  
}

const PasswordInputField: React.FC<PasswordInputFieldProps> = ({ label, placeholder }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false); // Estado para detectar si el input está enfocado

  // Maneja el enfoque
  const handleFocus = () => setIsFocused(true);
  
  // Maneja el desenfoque
  const handleBlur = () => setIsFocused(false);

  return (
    <div>
      <IonText className="input-label">{label}</IonText>
      <IonItem 
        className={`custom-input ${isFocused ? "focused" : ""}`} // Añadir clase cuando está enfocado
      >
        <IonInput 
          type={showPassword ? "text" : "password"} 
          placeholder={placeholder} 
          className="ionic-input"
          onFocus={handleFocus} // Detecta cuando el input recibe el foco
          onBlur={handleBlur}   // Detecta cuando el input pierde el foco
        />
        <div
          className={`eye-icon ${isFocused ? "focused-icon" : ""}`} // Añadir clase para el ícono enfocado
          style={{ cursor: 'pointer' }}
          onClick={() => setShowPassword(!showPassword)} // Cambia el estado de la contraseña visible
        >
          <img
            src={showPassword ? eyeImage : eyeOffImage}
            alt="eye-icon"
            className={isFocused ? "focused-svg" : ""} // Añadir clase cuando el SVG está enfocado
          />
        </div>
      </IonItem>
    </div>
  );
};

export default PasswordInputField;
