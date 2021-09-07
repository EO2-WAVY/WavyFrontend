import styled from "styled-components";
import theme from "styles/theme";

interface ITemplate {
    title: string;
    rule: JSX.Element;
}

const Template = ({ title, rule }: ITemplate) => {
    return (
        <TemplateLayout>
            <Header>
                <Title>{title}</Title>
            </Header>
            <Main>{rule}</Main>
        </TemplateLayout>
    );
};

export default Template;

const TemplateLayout = styled.div`
    max-width: ${theme.size.maxWidth};
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
