import styled from '@emotion/styled'
import { BackgroundColor } from '../../style/color'
export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: ${BackgroundColor};
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Title = styled.h1`
    font-weight: 700;
    font-size: 48px;
    margin-bottom: 32px;
`;
export const Input = styled.input`
    width: 600px;
    height: 64px;
    background-color: white;
    border:none;
    border-bottom: 1px solid black;
    outline: none;
    margin-top: 48px;
    box-sizing:border-box;
    padding-left: 24px;
    font-size: 18px;
    ::placeholder{
        font-size: 16px;
        color: black;
    }
`
export const LoginProblem = styled.span`
    font-size: 12px;
    text-decoration: underline;
    margin-top: 8px;
`;
export const Submit = styled.div`
    width: 600px;
    height: 80px;
    background-color: #55B6CE;
    border-radius: 8px;
    color: white;
    font-size: 32px;
    font-weight: 500;
    text-align:center;
    line-height: 75px;
    margin-top: 58px;
`;