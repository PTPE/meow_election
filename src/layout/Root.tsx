import { Outlet } from "react-router-dom";
import { Header } from ".";

export function Root() {
  return (
    <>
      <Header></Header>
      <Outlet />
    </>
  );
}
