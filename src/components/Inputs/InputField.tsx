import { IonInput, IonItem, IonText, IonIcon } from "@ionic/react";
import { eye, eyeOff } from "ionicons/icons";
import { useState } from "react";

interface InputFieldProps {
  label: string;
  type: "text" | "password" | "email";
  placeholder: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, type, placeholder }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [value, setValue] = useState(""); 
  const [error, setError] = useState(false); 
  const [isFocused, setIsFocused] = useState(false); 

  const handleBlur = () => {
    setIsFocused(false);
    setError(value.trim() === "");
  };

  return (
    <div className="input-container">
      <IonText className="input-label">
        {label.split("*").map((part, index) => (
          <span key={index}>
            {part}
            {index === 0 && <span className="red-asterisk">*</span>}
          </span>
        ))}
      </IonText>
      <IonItem className={`custom-input ${isFocused ? "focused" : ""} ${error ? "error" : ""}`}>
        <IonInput
          type={type === "password" ? (showPassword ? "text" : "password") : type}
          placeholder={placeholder}
          className="ionic-input"
          value={value}
          onIonInput={(e) => setValue(e.detail.value!)} 
          onFocus={() => setIsFocused(true)} 
          onBlur={handleBlur} 
        />
        {type === "password" && (
          <IonIcon
            slot="end"
            icon={showPassword ? eye : eyeOff}
            onClick={() => setShowPassword(!showPassword)}
            className="eye-icon"
          />
        )}
      </IonItem>
    </div>
  );
};

export default InputField;
