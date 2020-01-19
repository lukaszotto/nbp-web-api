import styled from '@emotion/styled';

export const Container = styled.section`
    padding: 20px;
    @media (min-width: 800px) {
        padding-left: 360px;
    }
`

export const Sidebar = styled.aside`
    padding: 20px;
    @media (min-width: 800px) {
        position: absolute;
        left: 0px;
        top: 0px;
        height: 100vh;
        width: 300px;
    }
`

export const CurrencyItemWrap = styled.p`
    display: flex;
    flex-wrap: wrap;
    > * {
        text-align: center;
        width: ${props => props.customStyle === 'aside' ? '33%' : '20%'};
        margin: 0;
    }
    > span {
        display: ${props => props.customStyle === 'aside' ? 'none' : 'inline'};
    }
`