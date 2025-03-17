import React from "react";
import { IonText } from "@ionic/react";
import Notification from "../../assets/images/icons/notification.svg";

const NotificationIcon = () => {
    return(
        <div className="icon-notification-container">
            <img src={Notification} alt="NotificationIcon" className="Notification-Icon" />
            <IonText className="icon-notification-Tab3">Notificaciones</IonText>
        </div>
    )
}
export default NotificationIcon;