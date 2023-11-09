import { Outlet } from "react-router-dom";
export default function HeaderLayout() {
  return (
    <div>
      header
      <Outlet />
    </div>
  );
}
