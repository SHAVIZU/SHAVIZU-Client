import styled from '@emotion/styled'

export const Container = styled.div`
    width: 500px;
    height: 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
`
export const FreeContainer = styled(Container)`
    margin: 0;
    align-items: flex-start;
    box-sizing: border-box;
    padding: 0 12px;
    & span {
        color: black;
        margin: 0;
        font-size: 12px;
    }
`;
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