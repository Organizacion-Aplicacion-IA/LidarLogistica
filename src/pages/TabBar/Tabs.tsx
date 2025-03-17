import React from "react";
import {IonTabs, IonTabBar, IonTabButton, IonIcon, IonContent, IonRouterOutlet} from "@ionic/react";
import {home, camera, notifications, person, scan} from "ionicons/icons";
import { Route, Redirect } from "react-router-dom";
import Tab1 from "./Tab1";
import Tab2 from "./Tab2";
import Tab3 from "./Tab3";
import Tab4 from "./Tab4";
import "../styles.css";
import HomeIcon from "../../components/Iconos/HomeIconComponent"; //rutas corregidas a las nuevas ubicaciones
import InventoryIcon from "../../components/Iconos/InventoryIcon";
import NotificationIcon from "../../components/Iconos/NotificationIcon";
import PerfilIcon from "../../components/Iconos/PerfilIcon";


const Tabs: React.FC = () => {
    return(
        <IonTabs>
            <IonRouterOutlet>
                <Route path="/tabs/tab1" component={Tab1} exact />
                <Route path="/tabs/tab2" component={Tab2} exact />
                <Route path="/tabs/tab3" component={Tab3} exact />
                <Route path="/tabs/tab4" component={Tab4} exact />
                <Redirect from ="/tabs" to="/tabs/tab1" exact />
            </IonRouterOutlet>

            <IonTabBar slot="bottom">
                <IonTabButton tab="tab1" href="/tabs/tab1">
                    <HomeIcon />
                </IonTabButton>
                <IonTabButton tab="tab2" href="/tabs/tab2">
                    <InventoryIcon />
                </IonTabButton>
                <IonTabButton tab="tab3" href="/tabs/tab3">
                    <NotificationIcon />
                </IonTabButton>
                <IonTabButton tab="tab4" href="/tabs/tab4">
                    <PerfilIcon />
                </IonTabButton>
            </IonTabBar>

        </IonTabs>
        
    );
};
export default Tabs;

