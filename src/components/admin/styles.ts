import styled from '@emotion/styled'
import { BackgroundColor } from '../../style/color'
export const Container = styled.div`
    width: 100%;
    height: calc(100vh - 80px);
    background-color: ${BackgroundColor};
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const Title = styled.h1`
    font-weight: 700;
    font-size: 36px;
    margin-bottom: 28px;
`;
export const Input = styled.input`
    width: 500px;
    height: 50px;
    background-color: white;
    border:none;
    border-bottom: 1px solid black;
    outline: none;
    margin-top: 32px;
    box-sizing:border-box;
    padding-left: 24px;
    font-size: 18px;
    ::placeholder{
        font-size: 16px;
        color: black;
    }
    display: block;
`
export const LoginProblem = styled.span`
    font-size: 12px;
    text-decoration: underline;
    margin-top: 8px;
        cursor: pointer;
`;
export const Submit = styled.div`
    width: 500px;
    height: 60px;
    background-color: #55B6CE;
    border-radius: 8px;
    color: white;
    font-size: 28px;
    font-weight: 500;
    text-align:center;
    line-height: 60px;
    margin-top: 40px;
    display: flex;
    text-align: center;
    span{
        color: white;
        border-left: 1px solid white;
        width: 50%;
    }
    cursor: pointer;
    justify-content: space-around;
    align-items: center;
`;
export const SignupStepBox = styled.div`
    width: 100px;
    height: 10px;
    display: flex;
    justify-content: space-between;
`
export const SignupStep = styled.div`
    width: 10px;
    height: 10px;
    border-radius:50%;
    background-color: #55B6CE;
`;
export const Map = styled.div`
 width: 300px;
 height: 300px;
 margin-top: 20px;
 background-color: #DDDDDD;
`;
export const ProductImg = styled.div`
    width: 400px;
    height: 520px;
    background-color: #DDDDDD;
    text-align: center;
    color: #666666;
    font-size: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`
export const ProductBox = styled.div`
    display: flex;
    width: 1000px;
    justify-content: space-between;
    margin-top: 50px;
    & span {
        color: #AAAAAA;
        font-weight: 100;
        margin-top: 10px;
    }
`;