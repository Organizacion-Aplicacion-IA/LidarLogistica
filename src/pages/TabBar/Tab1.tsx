import React from "react";
import { IonContent, IonPage } from "@ionic/react";

const Tab1: React.FC = () => {
    return(
        <IonPage>
            <IonContent>
                <h1>Inicio</h1>
                <p>Contenido pestaña 1</p>
            </IonContent>
        </IonPage>
    );
};

export default Tab1;