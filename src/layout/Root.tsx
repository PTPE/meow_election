import { Outlet } from "react-router-dom";
import { Header } from ".";
import styled from "styled-components";

const Main = styled.main`
  height: calc(100vh - 70px);
`;

export function Root() {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
    </>
  );
}
