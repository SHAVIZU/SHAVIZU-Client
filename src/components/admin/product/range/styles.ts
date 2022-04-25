import styled from '@emotion/styled'

export const Container = styled.div`
    width: 500px;
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
`
export const SettingSize = styled(Container)`
    width: 50px;
    height: 30px;
    justify-content: center;
    border: 1px solid black;
    border-radius: 4px;
    margin: 0;
    & span {
        color: black;
        height: 30px;
    }
`;