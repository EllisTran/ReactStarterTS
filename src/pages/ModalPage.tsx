import { useState } from "react";
import Button from "../components/Button";
import Modal from "../components/Modal";

const ModalPage = (): JSX.Element => {
  const [showModal, setShowModal] = useState(false);
  const handleClick = (): void => {
    setShowModal(true);
  };

  const handleDismiss = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button primary onClick={handleDismiss}>
        I accept
      </Button>
    </div>
  );

  const modal = (
    <Modal onDismiss={handleDismiss} actionBar={actionBar}>
      <p>Here is an important agreement for you to accept</p>
    </Modal>
  );

  return (
    <div>
      <Button onClick={handleClick} primary>
        Open Modals
      </Button>
      {showModal && modal}
    </div>
  );
};

export default ModalPage;
