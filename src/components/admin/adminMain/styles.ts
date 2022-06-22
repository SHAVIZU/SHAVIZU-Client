import styled from '@emotion/styled'
import * as S from '../../user/shopProducts/styles'
export const Container = styled.div`
  width: calc(100% - 480px);
  margin: auto;
  display: flex;
  flex-direction: column;
  position: relative;
`;
export const TitleContainer = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
export const UserDeleteBtn = styled.div`
    font-size: 16px;
    color: red;
    height: 16px;
    line-height: 9;
    cursor: pointer;
`;
export const UserLogoutBtn = styled(UserDeleteBtn)`
    color: black;
    margin-left: 500px;
`;
export const Line = styled(S.Topic)`
    margin-top: 0;
    height: 15px;
`;
export const ModalWrapper = styled.div<{isNone:boolean}>`
    width: 100%;
    height: 100%;
    position: absolute;
    background: rgba(0, 0, 0, 0.32);
    backdrop-filter: blur(8px);
    top: 0;
    display: ${props=>props.isNone ? "flex": "none"};
    justify-content: center;
    align-items: center;
`;
export const ModalContainer = styled.div`
    width: 1100px;
    height: 700px;
    background-color: white;
    border-radius: 5px;
    box-sizing: border-box;
    padding: 20px 30px;
`;
export const ModalExitBtn = styled.div`
    font-size: 20px;
    color: #BBBBBB;
    text-align: right;
    cursor: pointer;
`;
export const ModalItemInfoContainer = styled.div`
    width: 90%;
    height: 80%;
    margin: 40px 50px;
    display: flex;
    img { 
        width: 50%;
        height: 100%;
    }
`;
export const ModalItemInfo = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    > span {
        margin-top: 5px;
        font-size: 16px;
    }
`;
export const ModalPriceContainer = styled.div`
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    > span {
        font-size: 20px;
    }
`;
export const ItemNumberContainer = styled.div`
    width: 500px;
    height: 200px;
    margin-left: 90px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    overflow-y: scroll;
    margin-bottom: 30px;
`;
export const PriceInputContainer = styled.div`
    width: 210px;
    height: 50px;
    background-color: white;
    border-bottom: 1px solid black;
    box-sizing:border-box;
    padding: 0 20px;
    font-size: 16px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    & span {
        color: black;
        line-height: 50px;
        margin: 0;
    }
`;
export const PriceInput = styled.input`
    outline: none;
    border: none;
    text-align: right;
    font-size: 16px;
    width: 100px;
    ::-webkit-inner-spin-button{
    -webkit-appearance: none; 
    margin: 0; 
    }
    ::-webkit-outer-spin-button{
    -webkit-appearance: none; 
    margin: 0; 
    } 
`;
export const ItemChangeInfo = styled.div`
    width: 200px;
    height: 70px;
    margin-left: 320px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;