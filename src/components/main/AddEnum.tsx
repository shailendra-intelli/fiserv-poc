// @ts-nocheck
import React from "react";
import { Input, No ,InputWithMovingLabel} from "intelli-ui-components-library";
import styles from './maintab.module.scss';
import { AddIcon, DeleteIcon } from "../../assets/icons";

const AddEnum = (props) => {
  let { e, i, enumValObj, addEnumCount, setAddEnumCount, handleAddIcon, handleDeleteIcon,data, handleAddEnum, handleAddEnumInputChange } = props;
  console.log("enumValObj", enumValObj[i])

  return (
    <div className={styles.inputEnum}>
      <div className={styles.inputIcon}>
        <span onClick={() => handleAddIcon(handleAddEnum, i,addEnumCount,data)}> <AddIcon width="20" height="20" fill="black" /></span>
        <span onClick={() => handleDeleteIcon(handleAddEnum, i,addEnumCount,data)}><DeleteIcon width="20" height="20" fill="black" /></span>
      </div>
      <label className={styles.enumLabel}>Enum Value</label>
      <input name="addEnum" type= "text" value= {enumValObj[i]?.addenumVal || ""} onChange={handleAddEnumInputChange(handleAddEnum, i,addEnumCount,data)}
      />
    </div>
  )
};

export default AddEnum;