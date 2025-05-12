import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";
import LoggedInLayout from "../components/LoggedInLayout";
import styles from "@/styles/team-manage.module.scss";
import usePageTitle from "@/hooks/usePageTitle";
import { format } from "date-fns";

type Role = "super_admin" | "admin" | "manager" | "user";

interface User {
  id: string;
  full_name: string;
  email: string;
  role: Role;
  created_at: string;
}

const TeamManage = () => {
  usePageTitle("Manage Team");
  const [users, setUsers] = useState<User[]>([]);
  const [lastUpdated, setLastUpdated] = useState<string>("");

  const fetchUsers = async () => {
    const { data } = await supabase
      .from("users")
      .select("id, full_name, email, role, created_at")
      .order("created_at", { ascending: false });
    if (data) {
      setUsers(data);
      const now = new Date();
      const formatted = format(now, "MMM dd yyyy, hh:mm a");
      setLastUpdated(formatted);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <LoggedInLayout>
      <div className={styles.page}>
        <div className={styles.header}>
          <h1>Manage Team</h1>
          <p className={styles.lastEdited}>Last Edited at {lastUpdated}</p>
        </div>

        <div className={styles.section}>
          <div className={styles.sectionHeader}>
            <h3>Team Members</h3>
            <button className={styles.addButton}>
              <span className="material-icons">person_add</span> Add New
            </button>
          </div>

          <div className={styles.cardList}>
            {users.map((user) => (
              <div key={user.id} className={styles.userCard}>
                <div className={styles.avatar} />
                <div className={styles.userInfo}>
                  <div className={styles.nameRow}>
                    <span className={styles.name}>{user.full_name}</span>
                    {user.role === "admin" && (
                      <span className={styles.roleBadge}>Manager Admin</span>
                    )}
                  </div>
                  <span className={styles.date}>
                    Added on {new Date(user.created_at).toLocaleString()}
                  </span>
                </div>
                <span className={`material-icons ${styles.moreIcon}`}>
                  more_vert
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </LoggedInLayout>
  );
};

export default TeamManage;
