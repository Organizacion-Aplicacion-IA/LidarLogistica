import { IonText } from "@ionic/react";
import React from "react";
import HomeIcon from "../../assets/icons/home.svg"; //cambiare la ruta para que este mas organizado

const HomeIconComponent = () => {
    return(
        <div className="icon-home-container">
            <img src={HomeIcon} alt="HomeIcon" className="Home-Icon" />
            <IonText className="icon-home-Tab1">Inicio</IonText>
        </div>
    )
}
export default HomeIconComponent;