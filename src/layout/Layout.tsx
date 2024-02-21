import SelectionTab from "../components/sidebar/SelectionTab";
import Sidebar from "../components/sidebar/Sidebar";
import { sidebarMenu } from "../components/sidebar/config";
import TopNavbar from "../components/topnavbar/TopNavbar";
import styles from "./layout.module.scss";

const Layout: React.FC = () => {
  return (
    <div className={styles["layout-container"]}>
      <TopNavbar />
      <div className={styles["app"]}>
        <div className={styles["app-section"]}>
          <Sidebar />
        </div>

        <div className={`${styles["app-section"]} ${styles["app-main"]}`}>
          <SelectionTab />
        </div>
      </div>
    </div>
  );
};
export default Layout;
