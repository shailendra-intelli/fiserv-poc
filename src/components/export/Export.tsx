import { Button } from "intelli-ui-components-library";
import { useAppSelector } from "../../store/hooks";
import styles from "./export.module.scss";
import { CopyIcon, DownloadIcon} from "../../assets/icons";
import { useRef, useState } from "react";
import copy from "copy-to-clipboard";

const Export = () => {
  const state = useAppSelector((state) => state);
  const [isCopied, setIsCopied] = useState(false);
  const textRef = useRef();

  function downloadtoLocalFile() {
    const jsonData = textRef.current.value;
    const blob = new Blob([jsonData], { type: "text/json" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "openApi-data.json";
    link.click();
  };
  function copyToClipboard() {
    let copyText = textRef.current.value;
    copy(copyText);
    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 10000);
  };

  return (
    <div className={styles.container}>
      <div className={styles["textarea-container"]}>
        <textarea
          onChange={() => {}}
          value={JSON.stringify(state.export, null, 2)}
          className={`${styles["text-area"]}`}
          name="Open Api Json"
          rows={20}
          ref={textRef}
        />
      </div>
      <div className={`${styles["btn-group"]}`} data-testid="btn-group">
        <Button
          round="round"
          color="success"
          className={styles.button1}
          onClick={copyToClipboard}
        >
          <span className={styles["button-icon"]}>
            <CopyIcon
              stroke="#FFFFFF"
              width="20px"
              height="20px"
            />
          </span>
          {isCopied ? "Copied" : "Copy"}
        </Button>
        <Button
          round="round"
          color="success"
          className={styles.button1}
          onClick={downloadtoLocalFile}
        >
          <span className={styles["button-icon"]}>
            <DownloadIcon
              fill="#FFFFFF"
              width="20px"
              height="20px"
            />
          </span>
          Download
        </Button>
      </div>
    </div>
  );
};
export default Export;
