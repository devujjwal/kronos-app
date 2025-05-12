// components/LoggedInLayout.tsx
import Sidebar from "./Sidebar";
import styles from "@/styles/layout.module.scss";

const LoggedInLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <main className={styles.main}>{children}</main>
    </div>
  );
};

export default LoggedInLayout;
