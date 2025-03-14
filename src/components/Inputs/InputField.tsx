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

  return (
    <div>
      <IonText className="input-label">{label}</IonText>
      <IonItem className="custom-input">
        <IonInput 
          type={type === "password" ? (showPassword ? "text" : "password") : type}
          placeholder={placeholder} 
          className="ionic-input"  // Asegura que se use esta clase
        />
        {type === "password" && (
          <IonIcon 
            slot="end" 
            icon={showPassword ? eye : eyeOff} 
            onClick={() => setShowPassword(!showPassword)}
          />
        )}
      </IonItem>
    </div>
  );
};

export default InputField;
