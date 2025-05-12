import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";
import type { ReactNode } from "react";
import Loader from "@/components/Loader";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { user, loading } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading) {
      if (!user || !user.approved) {
        navigate("/request-access");
      }
    }
  }, [user, loading]);

  if (loading) return <Loader />;
  return children;
};

export default ProtectedRoute;
