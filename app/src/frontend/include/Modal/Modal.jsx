import ReactDom from "react-dom";
import { useEffect } from "react";
import { IoClose } from "react-icons/io5";
import "./modal.css";

export default function Modal({ open, children, onClose }) {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden"; 
    } else {
      document.body.style.overflow = "auto"; 
    }
    return () => {
      document.body.style.overflow = "auto"; 
    };
  }, [open]);

  if (!open) return null;
  return ReactDom.createPortal(
    <div>
      <div className="overlay-style"></div>
      <div className="modal-style">
        <button onClick={onClose}><IoClose className="modal-close-button"/></button>
        {children}
      </div>
    </div>,
    document.getElementById("portal"),
  );
}
