import React from "react";
import { Modal } from "intelli-ui-components-library";
import styles from "./modals.module.scss";

interface ModalsProps {
  header: string;
  description: string;
  onConfirm: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  onCancel: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  showModal: boolean;
  childClassName: string;
}

const Modals: React.FC<ModalsProps> = ({
  header,
  description,
  onConfirm,
  onCancel,
  showModal,
}) => {
  return (
    <>
      {showModal && (
        <Modal
          childClassName={styles.modelChild}
          showOverlay={true}
          setting={{
            modalId: "c{enter-btn",
            className: styles.modalContainer,
            variant: "action",
          }}
        >
          <Modal.Header className={styles["modal-content"]}>
            <div>
              <strong>{header}</strong>
            </div>
          </Modal.Header>
          <Modal.Body className={styles["modal-content"]}>
            <div>{description}</div>
          </Modal.Body>
          <Modal.Footer className={styles["modal-footer"]} bottomButton={false}>
            <Modal.Btn
              onClick={onCancel}
              btnProp={{ color: "default", size: "lg", round: "round" }}
              className={styles["button-cancel"]}
            >
              CANCEL
            </Modal.Btn>
            <Modal.Btn
              onClick={onConfirm}
              btnProp={{ size: "lg", round: "round" }}
              className={styles["button-confirm"]}
            >
              CONFIRM
            </Modal.Btn>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
};

export default Modals;
