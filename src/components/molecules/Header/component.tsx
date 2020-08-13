/** @jsx jsx */
import { jsx } from "@emotion/core";
import { FC } from "react";
import { Container } from "../../atoms/Container";
import styled from "@emotion/styled";
import { Props } from "./props";
import { Flexible } from "../../atoms/Flexible";
import { Link } from "./libs/Link";
import { Link as LinkRouter } from "react-router-dom";


const HeaderBase: FC<Props> = ({ logo, links, children, ...rest}: Props) => {
  return (
    <header {...rest}>
      <Container>
        <Flexible>
          <LinkRouter to="/">{logo}</LinkRouter>
          {links &&
            <nav>
              {Object.entries(links).map(([key, value]) => <Link css={{ marginLeft: 15 }} to={value}>{key}</Link>)}
            </nav>
          }
        </Flexible>
      </Container>
    </header>
  );
}

export const Header = styled(HeaderBase)`
    background: #282828;
    color: #fff;
    padding: 20px 0;
`;
