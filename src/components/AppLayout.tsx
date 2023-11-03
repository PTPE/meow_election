import { Outlet } from "react-router-dom";
export default function AppLayout() {
  return (
    <div>
      header
      <Outlet />
    </div>
  );
}
