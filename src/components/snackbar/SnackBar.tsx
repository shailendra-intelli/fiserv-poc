import { Snackbar } from "intelli-ui-components-library";
import { useState, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../store/hooks";
import { toastFile } from "../../store/reducers/showToastSlice";
import "./snackBar.module.scss";
const SnackBar = () => {
  const newState = useAppSelector((state) => state.toast.toastObj);
  const [showToast, setShowToast] = useState(newState.isVisible);
  const dispatch = useAppDispatch();
  const handleClose = () => {
    dispatch(
      toastFile({
        message: "",
        bgColor: "",
        isVisible: false,
        
      })
    );
  };
  useEffect(() => {
    setShowToast(newState.isVisible);
  }, [newState]);
  return (
    <>
      {showToast && (
          <Snackbar 
            message={newState.message}
            isVisible={newState.isVisible}
            bgColor={newState.bgColor}
            onCloseClick={handleClose}
            position={"bottom"}
            height={"-15px"}
          />
      )}
    </>
  );
};

export default SnackBar;
