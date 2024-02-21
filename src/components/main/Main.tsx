import React, { useEffect, useState } from "react";
import {
  DataGrid,
  Button,
  Card,
  Checkbox,
  GridColDef,
  IconButton,
  Modal,
} from "intelli-ui-components-library";
import {
  AddIcon,
  CopyIcon,
  DeleteIcon,
  EditIcon,
  SaveIcon,
} from "../../assets/icons";
//@ts-ignore
import styles from "./main.module.scss";
import { useSelector } from "react-redux";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  EnumData,
  JsonDetailsObject,
  ServerData,
} from "../../utils/constant/types";
import {
  ServerState,
  addServer,
  deleteSelectedServers,
} from "../../store/reducers/serversSlice";
import { updateData } from "../../store/reducers/exportSlice";
import {
  convertToCustomStructure,
  convertToOriginalFormat,
} from "../../utils/conertData";

import {
  deleteMethod,
  deletePath,
  updateAllPaths,
} from "../../store/reducers/mainTabsSlice";
import AddOrEditPath from "./AddOrEditPath";

export interface RowData {
  id?: string;
  selected?: boolean;
  url: string;
  description: string;
  enums: EnumData[];
}

const emptyRowData: RowData = {
  id: "",
  selected: false,
  url: "",
  description: "",
  enums: [],
};

const Main = () => {
  const data = useAppSelector((state) => state.export.paths);
  const paths = useAppSelector((state) => state.main.paths);
  const dispatch = useAppDispatch();
  const [showModal, setShowModal] = useState(false);
  const [rows, setRows] = useState<any>([]);
  const [editRowData, setEditRowData] = useState<any>(emptyRowData);

  useEffect(() => {
    dispatch(updateAllPaths({ data }));
  }, [data]);

  useEffect(() => {
    const formatData = convertToCustomStructure(paths, 2);
    setRows(formatData);
    setAllRowsSelected(false);
  }, [paths]);

  const toggleRowSelection = (id: string) => {
    const updatedRows = rows.map((item: any) => {
      if (item.key === id) {
        return {
          ...item,
          selected: !item.selected,
        };
      }
      return item;
    });

    setRows(updatedRows);
  };

  const handleOnHidden = () => {
    setShowModal(false);
    setEditRowData(emptyRowData);
  };

  const handleCopy = () => {
    let seldata: any = [];
    let newData = rows.map((x: any) => {
      if (x.selected) {
        x.selected = false;
        const key = `${x.key}-copy`;
        //@ts-ignore
        if (!paths?.[key] && !x.key.includes("-copy"))
          seldata.push({ ...x, key });
      }
      return x;
    });
    const cpydata: any = [...newData, ...seldata];
    setRows(cpydata);
    dispatch(
      updateData({ key: "paths", data: convertToOriginalFormat(cpydata) })
    );
  };

  const handleDelete = () => {
    setRows((rows: any) => {
      const deleted = rows.filter((x: any) => !x.selected);
      dispatch(
        updateData({ key: "paths", data: convertToOriginalFormat(deleted) })
      );
      return deleted;
    });
    setAllRowsSelected(false);
  };

  const [allRowsSelected, setAllRowsSelected] = useState(false);
  const handleAllSelect = () => {
    setAllRowsSelected((prev: boolean) => {
      setRows(
        rows.map((obj: RowData) => ({
          ...obj,
          selected: !prev,
        }))
      );
      return !prev;
    });
  };

  const handleSaveToExport = () => {
    dispatch(updateData({ key: "paths", data: paths }));
  };

  const columns: GridColDef[] = [
    {
      field: "selected",
      displayName: "",
      description: "",
      sortable: false,
      renderCell: (row) => (
        <div style={{ width: "60px" }}>
          <Checkbox
            checked={row.selected}
            onChange={() => toggleRowSelection(row.key)}
          />
        </div>
      ),
    },
    {
      field: "key",
      displayName: "ID",
      description: "",
      sortable: false,
    },
    {
      field: "key",
      displayName: "Path Name",
      description: "",
      sortable: false,
      renderCell: (row) => <div style={{ width: "150px" }}>{row.key}</div>,
    },

    {
      field: "pathDescription",
      displayName: "Path Description",
      description: "",
      sortable: false,
      renderCell: (row) => (
        <div
          style={{ width: "200px", paddingLeft: "12px", paddingRight: "12px" }}
        >
          {row.data.map((obj: any) => (
            <tr>
              <td style={{ verticalAlign: "middle" }}>{obj.key}</td>
              <td style={{ textAlign: "left", paddingLeft: "8px" }}>
                {obj.data.description}
              </td>
            </tr>
          ))}
        </div>
      ),
    },
    {
      field: "operation",
      displayName: "Operation",
      description: "",
      sortable: false,
      renderCell: (row) => {
        return (
          <div style={{ width: "400px" }}>
            {row?.data?.map((obj: any, i: any) => obj.key).join(", ")}
          </div>
        );
      },
    },
    {
      field: "action",
      displayName: "Actions",
      description: "",
      sortable: false,
      renderCell: (row) => {
        return (
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              width: "100px",
            }}
          >
            <span
              onClick={() => {
                setEditRowData(row);
                setShowModal(true);
              }}
              style={{
                border: "none",
              }}
            >
              <EditIcon width={"20px"} height={"20px"} />
            </span>
            <span
              onClick={() => dispatch(deletePath({ pathName: row.key }))}
              style={{
                border: "none",
              }}
            >
              <DeleteIcon width={"20px"} height={"20px"} />
            </span>
          </div>
        );
      },
    },
  ];
  const headerColumns: GridColDef[] = [
    {
      field: "selected",
      displayName: "",
      description: "",
      sortable: false,
      renderCell: (row) => (
        <div style={{ width: "60px" }}>
          <Checkbox checked={allRowsSelected} onChange={handleAllSelect} />
        </div>
      ),
    },
    {
      field: "id",
      displayName: "ID",
      description: "",
      sortable: false,
      renderCell: (row) => <></>,
    },
    {
      field: "pathName",
      displayName: "Path Name",
      description: "",
      sortable: false,
      renderCell: (row) => (
        <div style={{ width: "150px", fontWeight: "normal" }}>PATH NAME</div>
      ),
    },
    {
      field: "pathDescription",
      displayName: "Path Description",
      description: "",
      sortable: false,
      renderCell: (row) => (
        <div
          style={{ width: "200px", fontWeight: "normal", paddingLeft: "12px" }}
        >
          PATH DESCRIPTIONS
        </div>
      ),
    },
    {
      field: "operation",
      displayName: "Operation",
      description: "",
      sortable: false,
      renderCell: (row) => (
        <div style={{ width: "400px", fontWeight: "normal" }}>OPERATIONS</div>
      ),
    },
    {
      field: "action",
      displayName: "Actions",
      description: "",
      sortable: false,
      renderCell: (row) => (
        <div
          style={{
            width: "100px",
            fontWeight: "normal",
            marginLeft: "24px",
          }}
        >
          ACTIONS
        </div>
      ),
    },
  ];
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        height: "88%",
        position: "relative",
      }}
    >
      <div
        style={{
          height: "20em",
          overflowY: "scroll",
        }}
      >
        {showModal && (
          <AddOrEditPath Key={editRowData.key} onHidden={handleOnHidden} />
        )}

        <div className={styles["card-container"]}>
          <Card className={styles["card"]}>
            <div className={styles["title-section"]}>
              <div className={styles["button-group"]}>
                <Button
                  variant="outline"
                  round="round"
                  className={styles["buttons"]}
                  onClick={handleCopy}
                >
                  <CopyIcon />
                </Button>
                <Button
                  variant="outline"
                  round="round"
                  className={styles["buttons"]}
                  onClick={handleDelete}
                >
                  <DeleteIcon />
                </Button>
                <Button
                  variant="contained"
                  className={`${styles["buttons"]} ${styles["add-btn"]}`}
                  onClick={() => {
                    setShowModal(true);
                    setEditRowData({});
                  }}
                >
                  <AddIcon />
                </Button>
              </div>
            </div>
            {rows.length > 0 ? (
              <>
                <DataGrid.Header
                  columns={headerColumns}
                  className={`${styles["data-grid-header"]}`}
                />
                <DataGrid
                  columns={columns}
                  rows={rows}
                  className={`${styles["data-grid"]}`}
                />
              </>
            ) : (
              <>No Paths Defined yet!</>
            )}
          </Card>
        </div>
      </div>

      <Button
        onClick={() => {
          handleSaveToExport();
        }}
        style={{
          width: "13rem",
          backgroundColor: "#ff6600",
          borderRadius: "4px",
          margin: "16px",
          position: "absolute",
          bottom: "16px",
          right: "50%",
          transform: "translate(50%, 0)",
        }}
      >
        <span className={styles["button-icon"]}>
          <SaveIcon />
        </span>
        Save
      </Button>
    </div>
  );
};
export default Main;
