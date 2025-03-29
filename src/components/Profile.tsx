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
    import { useHistory as userHistory } from "react-router-dom";
    import '../../src/pages/styles.css'; //para agregar estilos aunque todavia no se los ponemos 


const Profile: React.FC = () => {
    const history = userHistory();

    const handleLogout = () => {
        console.log("Cerrar Sesion");
        history.push("/login");
    };
    return(
        <IonPage>
            <IonContent>
                <div className="contentPerfil">
                    <IonAvatar className="imagenPerfil">
                        <IonImg
                        src="https://www.transparentpng.com/download/user/gray-user-profile-icon-png-fP8Q1P.png"
                        alt="Foto de perfil"
                         />
                    </IonAvatar>
                </div> {/*He removido el contenedor y he puesto todo en el mismo contenedor, desde la imagen de perfil hasta el boton de cerrar sesion */}
                {/*Informacion del usuario*/}
                <IonList>
                    <IonItem>
                        <IonLabel className="datosUsuario">
                            <h2>Jose Manuel Tadeo</h2>
                            <p>Jose.Tadeo.isw@unipolidgo.edu.mx</p>
                        </IonLabel>
                    </IonItem>
                </IonList>

                {/* Referencias */}
                <IonList>
                    <IonItem className="opcionesPerfil">
                        <IonLabel>Lenguaje: Español</IonLabel>
                    </IonItem>
                    <IonItem>
                        <IonLabel>Modo Claro</IonLabel>
                        <IonToggle color={"dark"} slot="end" checked={true} />
                    </IonItem>
                </IonList>
                {/* Acciones */}
                <IonList>
                        <IonButton className="cerrarButtom" color={"light"} expand ="full" onClick={(handleLogout)}>
                            Cerrar Sesion
                        </IonButton>
                </IonList>
            </IonContent>
        </IonPage>
    )
}
export default Profile;