import { IonInput, IonItem, IonText } from "@ionic/react";
import { useState } from "react";
import eyeImage from "../../assets/icons/eye.svg"; // Icono de ojo abierto
import eyeOffImage from "../../assets/icons/eye-off.svg"; // Icono de ojo cerrado

interface PasswordInputFieldProps {
  label: string;
  placeholder: string;
}

const PasswordInputField: React.FC<PasswordInputFieldProps> = ({ label, placeholder }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [value, setValue] = useState(""); // Estado para el valor del input
  const [error, setError] = useState(false); // Estado para detectar error
  const [isFocused, setIsFocused] = useState(false); // Estado para detectar si el input está enfocado

  // Maneja el desenfoque y valida si el input está vacío
  const handleBlur = () => {
    setIsFocused(false);
    setError(value.trim() === ""); // Si el input está vacío, activa el error
  };

  // Función para renderizar el label con el asterisco rojo solo si está presente
  const renderLabel = (label: string) => {
    const parts = label.split("*");
    return parts.map((part, index) => {
      if (index !== parts.length - 1) {
        return (
          <span key={index}>
            {part}
            <span className="red-asterisk">*</span>
          </span>
        );
      }
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <div>
      <IonText className="input-label">
        {renderLabel(label)}
      </IonText>
      <IonItem className={`custom-input ${isFocused ? "focused" : ""} ${error ? "error" : ""}`} style={{ position: "relative" }}>
        <IonInput
          type={showPassword ? "text" : "password"}
          placeholder={placeholder}
          className="ionic-input"
          value={value}
          onIonInput={(e) => setValue(e.detail.value!)} 
          onFocus={() => setIsFocused(true)} 
          onBlur={handleBlur} 
        />
        <div
          className="eye-icon"
          style={{
            position: "absolute",
            right: "0px", /* Lo coloca al final del input */
            top: "55%", /* Lo alinea verticalmente */
            transform: "translateY(-50%)", /* Lo centra verticalmente */
            cursor: "pointer"
          }}
          onClick={() => setShowPassword(!showPassword)}
        >
          <img
            src={showPassword ? eyeImage : eyeOffImage}
            alt="eye-icon"
            className={isFocused ? "focused-svg" : ""} 
          />
        </div>
      </IonItem>
    </div>
  );
};

export default PasswordInputField;
