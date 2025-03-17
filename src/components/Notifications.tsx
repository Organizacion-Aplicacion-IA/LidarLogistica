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

const Notifications: React.FC = () => {
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>
                        <div style={{textAlign: "center", color:"black"}}> {/* Recordemos agregarle el nombre de una clase para los estilos */}
                            Notificaciones
                        </div>
                    </IonTitle>
                </IonToolbar>
            </IonHeader>
            {/*Contenido principal*/}
            <IonContent>
                <div style={{padding: '5px', textAlign: "center"}}> {/* Recordemos agregarle el nombre de una clase para los estilos */}
                    <p>Visualiza y gestiona notificaciones en tiempo real</p>
                </div>
                {/*Lista de notificaciones*/}
                <IonList>

                    {/* Notificacion 1 */}
                    <IonItem>
                        <IonLabel>
                            <h2>Stock Critico: 1 Producto</h2>
                            <p>Atencion, equipo de logistica. El inventario de. . .</p>
                        </IonLabel>
                    </IonItem>

                    {/* Notificacion 2 */}
                    <IonItem>
                        <IonLabel>
                            <h2>Stock Critico: 2 Producto</h2>
                            <p>Atencion, equipo de logistica. El inventario de . . .</p>
                        </IonLabel>
                    </IonItem>

                </IonList>
            </IonContent>
        </IonPage>

    );
};

export default Notifications;