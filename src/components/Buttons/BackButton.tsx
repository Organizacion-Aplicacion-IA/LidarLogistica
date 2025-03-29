import { useHistory } from "react-router-dom";

// Variable 

const backArrow = "https://res.cloudinary.com/diedcfrcv/image/upload/v1742329339/arrowLeft_ilft4o.svg"
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
