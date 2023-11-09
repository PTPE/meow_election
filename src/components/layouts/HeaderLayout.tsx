import { Outlet } from "react-router-dom";
export function HeaderLayout() {
  return (
    <div>
      header
      <Outlet />
    </div>
  );
}
