import LoggedInLayout from "@/components/LoggedInLayout";
import usePageTitle from "@/hooks/usePageTitle";

const Dashboard = () => {
  usePageTitle("Dashboard");

  return (
    <LoggedInLayout>
      <h1>Dashboard</h1>
      <p>This is a placeholder dashboard for Kronos.</p>
    </LoggedInLayout>
  );
};

export default Dashboard;
