import { useState, useEffect } from "react";
import styles from "./header.module.scss";
import headerValues from "../../utils/constant/header";
import {
  Button,
  DropDown,
  InputWithMovingLabel,
} from "intelli-ui-components-library";
import { UserIcon, MailIcon, LinkIcon, SaveIcon } from "../../assets/icons";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { exportData } from "../../store/reducers/exportSlice";

const Header = () => {
  const updatedInfo = useAppSelector((state: any) => state.export);
  const newObj = { ...updatedInfo };
  const info = (updatedInfo && updatedInfo.info) || {};

  const [value, setValue] = useState(info?.license?.name || "");
  const [url, setUrl] = useState(info?.license?.url || "");

  const [inputValues, setInputValues] = useState({
    title: info?.title,
    version: info?.version,
    description: info?.description,
    contact_name: info?.contact?.name,
    contact_email: info?.contact?.email,
    contact_url: info?.contact?.url,
    terms_of_service_url: info?.termsOfService,
    external_docs: info?.value?.externalDocs,
    documentation_url: info?.value?.documentationUrl,
  });
  useEffect(() => {
    setValue(info?.license?.name);
  }, [updatedInfo]);
  const dispatch = useAppDispatch();
  const handleInputChange = (event: any) => {
    const { name, value } = event.target;
    setInputValues({
      ...inputValues,
      [name]: value,
    });
  };
  console.log(inputValues.description);
  const handleSubmit = (event: any) => {
    event.preventDefault();
    newObj.info = inputValues;
    dispatch(exportData({ ...newObj }));
  };

  const [optionLists] = headerValues
    .filter((item) => item.values)
    .map((item) => item.values);
  const options = optionLists?.map((item: any) => ({
    label: item.name,
    key: item.name,
  }));

  const handleLicenseNameChange = (e: any) => {
    const selectedLicenseName = e.key;
    setValue(selectedLicenseName);
    const selectedLicense = optionLists?.find(
      (option) => option.name === selectedLicenseName
    );
    if (selectedLicense) {
      setUrl(selectedLicense.update || "");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div
          style={{
            height: "320px",
            overflowY: "scroll",
          }}
        >
          <div className={`${styles["input-container"]}`}>
            <h4 className={`${styles["header-details-h4"]}`}>Header Details</h4>
            <div className={`${styles["header-details"]}`}>
              <InputWithMovingLabel
                inputProps={{
                  label: "Title",
                  name: "title",
                  value: inputValues.title,
                  onChange: handleInputChange,
                  type: "text",
                }}
                top
              />
              <InputWithMovingLabel
                inputProps={{
                  label: "Version",
                  name: "version",
                  value: inputValues.version,
                  onChange: handleInputChange,
                  type: "text",
                }}
                top
              />
            </div>
            <div className={`${styles["header-details-h4"]}`}>
              <InputWithMovingLabel
                inputProps={{
                  label: "Bio",
                  name: "description",
                  value: inputValues.description,
                  onChange: handleInputChange,
                  type: "text",
                }}
                multiLine
                rows={2}
                top
              />
            </div>
          </div>
          <div className={`${styles["input-container"]}`}>
            <h4 className={`${styles["header-details-h4"]}`}>
              Contact Details
            </h4>
            <div className={`${styles["contact-details"]}`}>
              <div className={`${styles["input-container"]}`}>
                <InputWithMovingLabel
                  inputProps={{
                    label: "Contact Name",
                    name: "contact_name",
                    value: inputValues?.contact_name,
                    onChange: handleInputChange,
                    type: "text",
                    className: `${styles["input-container-padding"]}`,
                  }}
                  top
                />
                <div className={styles["input-icon"]}>
                  <UserIcon width="20" height="20" fill="black" />
                </div>
              </div>
              <div className={`${styles["input-container"]}`}>
                <InputWithMovingLabel
                  inputProps={{
                    label: "Contact Email",
                    name: "contact_email",
                    value: inputValues.contact_email,
                    onChange: handleInputChange,
                    type: "email",
                    className: `${styles["input-container-padding"]}`,
                  }}
                  top
                />
                <div className={styles["input-icon"]}>
                  <MailIcon width="20" height="20" fill="black" />
                </div>
              </div>
            </div>
            <div className={`${styles["url-details"]}`}>
              <div className={`${styles["input-container"]}`}>
                <InputWithMovingLabel
                  inputProps={{
                    label: "Contact URL",
                    name: "contact_url",
                    value: inputValues.contact_url,
                    type: "text",
                    onChange: handleInputChange,
                    className: `${styles["input-container-padding"]}`,
                  }}
                  top
                />
                <div className={styles["input-icon"]}>
                  <LinkIcon width="20" height="20" fill="black" />
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles["input-container"]}`}>
            <h4 className={`${styles["header-details-h4"]}`}>
              URL and other Details
            </h4>
            <div className={`${styles["url-details"]}`}>
              <div className={`${styles["input-container"]}`}>
                <InputWithMovingLabel
                  inputProps={{
                    label: "Contact URL",
                    name: "contact_url",
                    value: inputValues.contact_url,
                    onChange: handleInputChange,
                    type: "text",
                    className: `${styles["input-container-padding"]}`,
                  }}
                  top
                />
                <div className={styles["input-icon"]}>
                  <LinkIcon width="20" height="20" fill="black" />
                </div>
              </div>
              <InputWithMovingLabel
                inputProps={{
                  label: "Terms of Service URL",
                  name: "terms_of_service_url",
                  value: inputValues.terms_of_service_url,
                  onChange: handleInputChange,
                  type: "text",
                }}
                top
              />
            </div>
            <div className={`${styles["url-details"]}`}>
              <DropDown
                optionList={options}
                label="License Name"
                value={value}
                onChange={handleLicenseNameChange}
              />
              <div className={`${styles["input-container"]}`}>
                <InputWithMovingLabel
                  inputProps={{
                    label: "License URL",
                    name: "license_url",
                    onChange: (e: any) => setUrl(e.target.value),
                    value: url,
                    type: "text",
                    className: `${styles["input-container-padding"]}`,
                  }}
                  top
                />
                <div className={styles["input-icon"]}>
                  <LinkIcon width="20" height="20" fill="black" />
                </div>
              </div>
            </div>
            <div className={`${styles["header-details-h4"]}`}>
              <InputWithMovingLabel
                inputProps={{
                  label: "External Docs",
                  name: "external_docs",
                  value: inputValues.external_docs,
                  onChange: handleInputChange,
                  type: "text",
                }}
                multiLine
                rows={2}
                top
              />
            </div>
            <div className={`${styles["url-details"]}`}>
              <div className={`${styles["input-container"]}`}>
                <InputWithMovingLabel
                  inputProps={{
                    label: "Documentation URL",
                    name: "documentation_url",
                    value: inputValues.documentation_url,
                    onChange: handleInputChange,
                    type: "text",
                    className: `${styles["input-container-padding"]}`,
                  }}
                  top
                />
                <div className={styles["input-icon"]}>
                  <LinkIcon width="20" height="20" fill="black" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles["button"]}`}>
          <Button type="submit" className={styles["save-button"]}>
            <span className={styles["button-icon"]}>
              <SaveIcon />
            </span>
            Save
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Header;
