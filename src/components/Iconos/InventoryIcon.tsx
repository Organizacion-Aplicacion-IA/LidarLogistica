import React from "react";
import { IonText } from "@ionic/react";
import Archive from "../assets/images/icons/archieve.svg";

const InventoryIcon = () => {
    return(
        <div className="icon-inventory-container">
            <img src={Archive} alt="InventoryIcon" className="Inventory-Icon" />
            <IonText className="icon-inventory-Tab2">Inventario</IonText>
        </div>
    );
};

export default InventoryIcon;