import React from "react";
import { IonText } from "@ionic/react";
import Profile from "../../assets/images/icons/user.svg"; //corregido

const PerfilIcon = () => {
    return(
        <div className="icon-perfil-container">
            <img src={Profile} alt="PerfilIcon" className="Perfil-Icon" />
            <IonText className="icon-perfil-Tab4">Perfil</IonText>
        </div>
    );
 };
export default PerfilIcon;