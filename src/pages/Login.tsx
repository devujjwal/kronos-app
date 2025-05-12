import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../lib/supabaseClient";
import AuthLayout from "@/components/AuthLayout";
import styles from "@/styles/login.module.scss";
import usePageTitle from "@/hooks/usePageTitle";

const Login = () => {
  const navigate = useNavigate();
  usePageTitle("Login");
  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) navigate("/dashboard");
    });

    const { data: authListener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        if (event === "SIGNED_IN" && session) {
          navigate("/dashboard");
        }
      }
    );

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, []);

  const handleLogin = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/`,
      },
    });
  };

  return (
    <AuthLayout>
      <div className={styles.loginBox}>
        <h2 className={styles.heading}>Get Started</h2>
        <p className={styles.description}>
          Generate high-quality digital clone videos to increase content
          consumption in a more bite-sized format.
        </p>

        <button className={styles.googleBtn} onClick={handleLogin}>
          <img src="/img/google-icon.svg" alt="Google Icon" />
          Login with Google
        </button>

        <div className={styles.divider}>
          <hr /> <span>OR</span> <hr />
        </div>

        <div className={styles.requestBox}>
          Request access by writing out to&nbsp;
          <a href="mailto:etai.kronos@timesinternet.in">
            etai.kronos@timesinternet.in
          </a>
        </div>

        <div className={styles.powered}>
          <span>Powered By</span>
          <img
            src="/img/et-ai-logo.svg"
            alt="ET AI"
            className={styles.logo}
            style={{ cursor: "pointer" }}
            onClick={() => navigate("/")}
          />
        </div>
      </div>
    </AuthLayout>
  );
};

export default Login;
