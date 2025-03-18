import { useHistory } from "react-router-dom";
import backArrow from "../../assets/icons/back.svg"; // Asegúrate de que la ruta sea correcta //se corrigio la ruta ademas de que fue documencata pero asegurate de usar el ../ para retroceder

const BackButton: React.FC = () => {
  const history = useHistory();

  const handleBack = () => {
    history.push("/login"); // Redirige al login
  };

  return (
    <div style={{ paddingLeft: '25px' }}> {/* Contenedor con padding */}
      <img
        src={backArrow} // Usar el archivo SVG
        alt="Back"
        style={{ width: '30px', cursor: 'pointer' }} // Ajusta el tamaño y cursor
        onClick={handleBack} // Acción de redirección al hacer clic
      />
    </div>
  );
};

export default BackButton;
