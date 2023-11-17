import { Link } from "react-router-dom";
import { Icon } from "./Icon";
import styled from "styled-components";

export function Navigation() {
  return (
    <Wrapper>
      <LinkWrapper to="/introduction">
        <Icon icon="introduction" />
      </LinkWrapper>
      <LinkWrapper to="/event">
        <Icon icon="event" />
      </LinkWrapper>
      <LinkWrapper to="/issue">
        <Icon icon="politicalIssue" />
      </LinkWrapper>
      <LinkWrapper to="/donate">
        <Icon icon="donate" />
      </LinkWrapper>
      <LinkWrapper to="/feedback">
        <Icon icon="feedback" />
      </LinkWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  gap: 100px;
  padding: 0px 100px;
`;

const LinkWrapper = styled(Link)`
  width: 100%;
  height: 100%;
`;
