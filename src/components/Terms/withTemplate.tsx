import { ComponentType, FC } from "react";
import styled from "styled-components";

import Hr from "components/Common/Hr";
import Layout from "components/Common/Layout";

const withTemplate =
    (title: string) =>
    <P extends object>(Component: ComponentType<P>): FC<P> => {
        return (...props) => {
            return (
                <Layout>
                    <Header>
                        <Title>{title}</Title>
                    </Header>
                    <Hr />
                    <Main>
                        <Component {...(props as P)} />
                    </Main>
                    <Hr margin="0 0 180px 0" />
                </Layout>
            );
        };
    };

export default withTemplate;

const Header = styled.header`
    width: 100%;
    height: 280px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Title = styled.h1`
    font-size: 40px;
`;

const Main = styled.main`
    margin: 60px 0;
    font-size: 24px;
    color: #424242;
`;
