import { IonInput, IonItem, IonLabel } from "@ionic/react";
import { useRef, useState } from "react";

const SecurityCodeInput: React.FC = () => {
  const [code, setCode] = useState(["", "", "", ""]);
  const inputsRef = useRef<Array<HTMLIonInputElement | null>>([null, null, null, null]);

  // Manejar el cambio de valor en los inputs
  const handleChange = (index: number, value: string) => {
    if (!/^\d?$/.test(value)) return; // Solo permite números (0-9)
    
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // Si el usuario ingresa un número, pasa al siguiente input
    if (value && index < 3) {
      inputsRef.current[index + 1]?.setFocus();
    }
  };

  // Manejar la tecla de retroceso
  const handleKeyDown = (index: number, event: React.KeyboardEvent) => {
    if (event.key === "Backspace" && !code[index] && index > 0) {
      inputsRef.current[index - 1]?.setFocus();
    }
  };

  return (
    <div className="security-code-container">
      <IonLabel className="code-label">Código seguridad</IonLabel>
      <div className="code-inputs">
        {code.map((digit, index) => (
          <IonItem key={index} className="code-item">
            <IonInput
              ref={(el) => (inputsRef.current[index] = el)}
              value={digit}
              type="tel"
              maxlength={1}
              className="code-input"
              onIonInput={(e) => handleChange(index, e.detail.value!)}
              onKeyDown={(e) => handleKeyDown(index, e)}
            />
          </IonItem>
        ))}
      </div>
    </div>
  );
};

export default SecurityCodeInput;