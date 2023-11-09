import { Outlet } from "react-router-dom";

export  function NavigationLayout() {
  return (
    <div>
      navigation
      <Outlet />
    </div>
  );
}
