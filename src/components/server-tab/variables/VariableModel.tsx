import { Button, Modal } from "intelli-ui-components-library";
import styles from "./variable.module.scss";
import Variables from "./Variables";

interface variableModelProps {
  serverIndex: number;
  setShowModal: any;
  serverItem: any;
}
const VariableModel: React.FC<variableModelProps> = ({
  serverIndex,
  setShowModal,
  serverItem,
}) => {
  const onCloswModel = () => {
    setShowModal(false);
  };

  return (
    <>
      <Modal
        onHidden={() => {
          setShowModal(false);
        }}
        showOverlay={true}
        setting={{
          modalId: "center-btn",
          className: styles["modal"],
          variant: "action",
        }}
      >
        <Modal.CloseIcon />
        <Modal.Header className={styles["modal-header"]}>
          <p>Variables</p>
        </Modal.Header>
        <Modal.Body className={styles["modal-body"]}>
          <Variables serverIndex={serverIndex} serverItem={serverItem} />
        </Modal.Body>
        <Modal.Footer>
          <Button
            color="default"
            className={styles["close-btn"]}
            onClick={onCloswModel}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default VariableModel;
