import { Outlet } from "react-router-dom";

export default function NavigationLayout() {
  return (
    <div>
      navigation
      <Outlet />
    </div>
  );
}
