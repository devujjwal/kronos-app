import { useNavigate } from "react-router-dom";
import styles from "@/styles/login.module.scss";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.leftPanel}>
        <img
          src="/img/et-ai-logo.svg"
          alt="ET AI"
          className={styles.logo}
          style={{ cursor: "pointer" }}
          onClick={() => navigate("/")}
        />

        <div className={styles.contentCenter}>
          <h1 className={styles.title}>
            Trusted Stories,
            <br />
            <span className={styles.highlight}>Humanized.</span>
          </h1>
          <p className={styles.subtitle}>Powered by AI</p>
        </div>

        <img
          src="/img/times-internet-logo.svg"
          alt="Times Internet Logo"
          className={styles.productLogo}
        />
      </div>

      <div className={styles.rightPanel}>{children}</div>
    </div>
  );
};

export default AuthLayout;
