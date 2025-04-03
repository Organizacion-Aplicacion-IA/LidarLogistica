import React from "react";
import { 
    IonContent,
    IonToolbar,
    IonItem,
    IonLabel,
    IonList,
    IonPage
 } from "@ionic/react";
 import '../../src/pages/styles.css';

interface NotificationProps {
    title: string;
    descripcion: string;
}

const NotificationComponent: React.FC<NotificationProps> = ({title, descripcion}) => {
    return(
    <div className="notificacionContenedor">
    <IonItem className="notification-item">
        <div className="notification-rectangulo"></div>
        <IonLabel className="notification-text">
            <h2>{title}</h2>
            <p>{descripcion}</p>
        </IonLabel>
    </IonItem>
    </div>

    );
    
}
export default NotificationComponent;