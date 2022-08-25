import { useAppLayout } from "../src/provider/AppLayout";

const AccountPage = () => {
  const { logout } = useAppLayout();
  return (
    <div>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default AccountPage;
