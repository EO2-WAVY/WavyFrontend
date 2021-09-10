import React, { ComponentType, FC } from "react";
import styled from "styled-components";

const withTemplate =
    (title: string) =>
    <P extends object>(Component: ComponentType<P>): FC<P> => {
        return (...props) => {
            return (
                <TemplateLayout>
                    <Header>
                        <Title>{title}</Title>
                    </Header>
                    <Main>
                        <Component {...(props as P)} />
                    </Main>
                </TemplateLayout>
            );
        };
    };

export default withTemplate;

const TemplateLayout = styled.div`
    max-width: ${({ theme }) => theme.size.maxWidth};
    margin: 0 auto;
`;

const Header = styled.header`
    width: 100%;
    height: 300px;

    display: flex;
    justify-content: center;
    align-items: center;
`;

const Title = styled.h1``;

const Main = styled.main`
    margin: 30px 0 120px 0;
`;
