import styled from '@emotion/styled'
import { BackgroundColor } from '../../style/color'
export const Container = styled.div`
    width: 100%;
    height: calc(100vh - 100px);
    background-color: ${BackgroundColor};
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const SignupContainer = styled(Container)`
    height: 180vh;
`;
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
export const OptionInputContainer = styled.div`
    width: 500px;
    height: 50px;
    background-color: white;
    border-bottom: 1px solid black;
    margin-top: 32px;
    box-sizing:border-box;
    padding:  0 10px;
    font-size: 16px;
    cursor: pointer;
    & span {
        color: black;
        line-height: 50px;
    }
`;
export const PriceInputContainer = styled(OptionInputContainer)`
    cursor: default;
    width: 240px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    & span {
        margin: 0;
    }
`;
export const PriceInputWrap = styled.div`
    width: 500px;
    display: flex;
    justify-content: space-between;
    

`;
export const PriceInput = styled.input`
    outline: none;
    border: none;
    text-align: right;
    font-size: 16px;
    width: 150px;
    ::-webkit-inner-spin-button{
    -webkit-appearance: none; 
    margin: 0; 
    }
    ::-webkit-outer-spin-button{
    -webkit-appearance: none; 
    margin: 0; 
    } 
`;
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
export const ProductImg = styled.div<{is_url?: boolean}>`
    width: 400px;
    height: 520px;
    background-color: #DDDDDD;
    text-align: center;
    color: #666666;
    font-size: 20px;
    display: ${props=>props.is_url ? "none" : "flex"};
    flex-direction: column;
`
export const SearchWrap = styled.div`
    display: flex;
    align-items: center;
    margin: 10px 0 0 10px;
`
export const StyleCode = styled.div`
    width: 350px;
    height: 30px;
    border-bottom: 1px solid #EEEEEE;
    font-size: 14px;
    color: #AAAAAA;
    margin: 10px 0 0 10px;
    text-align: left;
    line-height: 20px;
    padding-left: 10px;
    cursor: pointer;
`;
export const SearchStyleCodeInput = styled.input`
    outline: none;
    border: none;
    width: 300px;
    height: 40px;
    background:none;
    border-bottom: 1px solid #CCCCCC;
    font-size: 18px;
    padding: 10px;
`;
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
export const StockListWrap = styled(PriceInputWrap)`
    overflow-x: scroll;
    ::-webkit-scrollbar {
    display: none;
}
`;
export const StockListContainer = styled.div`
    height: 80px;
    display: flex;
    justify-content: space-between;
`;
export const StockListItem = styled.div`
    width: 80px;
    height: 80px;
    border: 1px solid black;
    border-radius: 10%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-right:6px;
    & span{
        color: #FF6F69;
        font-size: 20px;
        margin: 0;
    }
    & h5{
        font-size: 30px;
    }
`;
export const StockChangeWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 50px;
    & span{
        font-size: 12px;
        color: black;
        margin: 0;
        font-weight: 500;
        text-align: center;
    }
`;
export const StockChangeItem = styled.div`
    width: 24px;
    height: 24px;
    border: 1px solid #DDDDDD;
    border-radius: 8px;
`
interface ImgSize {
    imgWidth: string;
    imgHeight: string;
}
export const ImgWrap = styled.div`
    height: 795px;
    width: 1125px;
    margin-top: 40px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
`;
export const SignupImg = styled.label<ImgSize>`
    width: ${props=>props.imgWidth};
    height: ${props=>props.imgHeight};
    background-color: #DDDDDD;
    & span {
        color: #AAAAAA;
    }
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
   `
export const ProductInfoWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 450px;
`;
export const InputBtn = styled.div`
    width: 80px;
    height: 30px;
    background-color: #55B6CE;
    color: white;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
    line-height: 25px;
`;