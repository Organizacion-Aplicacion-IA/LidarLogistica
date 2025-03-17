import React from "react";
import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonItem,
    IonLabel,
    IonList,
    IonToggle,
    IonButton,
    IonAvatar,
    IonImg} from "@ionic/react";
    import '../../src/pages/styles.css'; //para agregar estilos aunque todavia no se los ponemos 


const Profile: React.FC = () => {
    return(
        <IonPage>
            <IonContent>
                <div className="">
                    <IonAvatar>
                        <IonImg
                        src=""
                        alt="Foto de perfil"
                         />
                    </IonAvatar>
                </div>
            </IonContent>
            <IonContent>
                {/*Informacion del usuario*/}
                <IonList>
                    <IonItem>
                        <IonLabel>
                            <h2>Jose Manuel Tadeo</h2>
                            <p>Jose.Tadeo.isw@unipolidgo.edu.mx</p>
                        </IonLabel>
                    </IonItem>
                </IonList>

                {/* Referencias */}
                <IonList>
                    <IonItem>
                        <IonLabel>Lenguaje: Español</IonLabel>
                    </IonItem>
                    <IonItem>
                        <IonLabel>Modo Claro</IonLabel>
                        <IonToggle color={"dark"} slot="end" checked={true} />
                    </IonItem>
                </IonList>
                {/* Acciones */}
                <IonList>
                    <IonItem>
                        <IonButton expand ="full" color = "dark" onClick={() => console.log("Cerrar Sesion")}>
                            Cerrar Sesion
                        </IonButton>
                    </IonItem>
                </IonList>
            </IonContent>
        </IonPage>
    )
}
export default Profile;