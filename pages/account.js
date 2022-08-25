import { useAppLayout } from "../src/provider/AppLayout";
import withAuth from "../src/hooks/withAuth";

const AccountPage = () => {
  const { logout } = useAppLayout();
  return (
    <div>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default withAuth(AccountPage);
