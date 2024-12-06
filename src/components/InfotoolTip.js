import React from "react";
import PopupWithForm from "./PopupWithForm";
import "../blocks/popup.css";

export default function InfotoolTip({ handleClose, open, isSuccess }) {
  return (
    <>
      <PopupWithForm>
        <div
          className={
            isSuccess ? "popup__register_alert" : "popup__register_alert_wrong"
          }
        >
          {isSuccess
            ? "¡Correcto! Ya estás registrado."
            : "Uy, algo salió mal. Por favor, inténtalo de nuevo."}
        </div>
      </PopupWithForm>
    </>
  );
}
