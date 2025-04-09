import React from "react";
import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonList,
    IonItem,
    IonLabel
} from "@ionic/react";
import NotificationComponent from "./NotificationComponent";

const Notifications: React.FC = () => {
    return (
        <IonPage>
                {/*Header*/}
                <IonToolbar>
                    <IonTitle>
                        <div style={{textAlign: "center", color:"black", }}> {/* Recordemos agregarle el nombre de una clase para los estilos */}
                            Notificaciones
                        </div>
                    </IonTitle>
                </IonToolbar>
            
            {/*Contenido principal*/}
            <IonContent>
                <div style={{padding: '5px', textAlign: "center"}}> {/* Recordemos agregarle el nombre de una clase para los estilos */}
                    <p>Visualiza y gestiona notificaciones en tiempo real.
                        Mantente informado sin salir
                    </p>
                </div>
                {/*Lista de notificaciones*/}
                <IonList>

                    {/* Notificacion 1 */}
                    <NotificationComponent //no se como esta estructurada la base de datos pero aqui adapta los parametros segun tus necesidades
                    title="Stock Critico: 1 Producto"
                    descripcion="¡Atencion, equipo de logistica! El inventario de. . ." 
                    />

                    {/* Notificacion 2 */}
                    <NotificationComponent 
                    title="Stock Critico: 2 Producto"
                    descripcion="!Atencion, equipo de logistica¡ El inventario de. . ." 
                    />

                </IonList>
            </IonContent>
        </IonPage>

    );
};

export default Notifications;