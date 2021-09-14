import Hr from "components/Common/Hr";
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
                    <Hr />
                    <Main>
                        <Component {...(props as P)} />
                    </Main>
                    <Hr margin="0 0 180px 0" />
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
    padding: 0 ${({ theme }) => theme.size.layoutHorizonPadding};
    margin: 60px 0;
    font-size: 24px;
    color: #424242;
`;
