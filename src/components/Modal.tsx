import { useEffect } from "react";
import ReactDOM from "react-dom";

interface ModalProps {
  onDismiss: () => void;
  actionBar: React.ReactNode;
  children: React.ReactNode;
}
const Modal = ({ onDismiss, children, actionBar }: ModalProps): JSX.Element => {
  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);

  return ReactDOM.createPortal(
    <div>
      <div
        onClick={onDismiss}
        className="fixed inset-0 bg-gray-300 opacity-80"
      ></div>
      <div className="fixed inset-40 p-10 bg-white rounded-lg">
        <div className="flex flex-col justify-between">
          {children}
          <div className="flex justify-end"> {actionBar}</div>
        </div>
      </div>
    </div>,
    document.querySelector(".modal-container")!
  );
};

export default Modal;
