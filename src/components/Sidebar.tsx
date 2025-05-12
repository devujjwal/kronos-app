// Sidebar.tsx
import { useNavigate, useLocation } from "react-router-dom";
import { supabase } from "@/lib/supabaseClient";
import styles from "@/styles/sidebar.module.scss";
import clsx from "clsx";

const menuItems = [
  { label: "Home", icon: "home", path: "/dashboard" },
  { label: "Create", icon: "add", path: "/create-video" },
  { label: "Projects", icon: "folder", path: "/projects" },
  { label: "Billing", icon: "payments", path: "/billing" },
  { label: "Templates", icon: "article", path: "/templates" },
  { label: "Team", icon: "groups", path: "/team-manage" },
  { label: "Profile", icon: "person", path: "/profile" },
  { label: "Logout", icon: "logout", path: "/logout" }, // path is dummy for now
];

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/");
  };

  const handleNavClick = (item: (typeof menuItems)[0]) => {
    if (item.label === "Logout") {
      handleLogout();
    } else {
      navigate(item.path);
    }
  };

  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        <img src="/img/et-ai-logo.svg" alt="ET AI" />
      </div>
      <nav className={styles.nav}>
        {menuItems.map((item) => (
          <div
            key={item.label}
            className={clsx(styles.navItem, {
              [styles.active]: location.pathname.startsWith(item.path),
            })}
            onClick={() => handleNavClick(item)}
          >
            <span className="material-icons">{item.icon}</span>
            <span className={styles.label}>{item.label}</span>
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
