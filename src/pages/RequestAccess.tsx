import { useNavigate } from "react-router-dom";
import AuthLayout from "@/components/AuthLayout";
import styles from "@/styles/login.module.scss";
import usePageTitle from "@/hooks/usePageTitle";
import { supabase } from "@/lib/supabaseClient";

const RequestAccess = () => {
  const navigate = useNavigate();
  usePageTitle("Request Access");

  const handleBackToLogin = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  return (
    <AuthLayout>
      <div className={styles.loginBox}>
        <h2 className={styles.heading}>Request Access</h2>
        <p className={styles.description}>
          You don’t have access to this application yet.
        </p>

        <div className={styles.requestBox}>
          Request access by writing out to&nbsp;
          <a href="mailto:etai.kronos@timesinternet.in">
            etai.kronos@timesinternet.in
          </a>
        </div>

        <button
          onClick={handleBackToLogin}
          className={styles.googleBtn}
          style={{ marginTop: "24px" }}
        >
          ← Back to Login
        </button>

        <div className={styles.powered}>
          <span>Powered By</span>
          <img
            src="/img/et-ai-logo.svg"
            alt="ET AI"
            className={styles.logo}
            style={{ cursor: "pointer" }}
            onClick={handleBackToLogin}
          />
        </div>
      </div>
    </AuthLayout>
  );
};

export default RequestAccess;
