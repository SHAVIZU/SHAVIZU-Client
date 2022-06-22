import React, { useEffect, useState } from "react";
import * as AdminStyle from "./styles";
import * as ShopStyle from "../../user/shopProducts/styles";
import * as S from "../styles";
import Products from "../../products/Products";
import { deleteUserRequest } from "../../../lib/api/deleteUser";
import { getMyShopsItem } from "../../../lib/api/getMyShopsItem";
import { getItemDetailRequest } from "../../../lib/api/getItemDetail";
import Header from "../../header/Header";
import { deleteItemRequest } from "../../../lib/api/deleteItem";
import { patchItemDiscountRequest } from "../../../lib/api/patchItemDiscount";
import { patchItemNumberRequest } from "../../../lib/api/patchItemNumber";
type itemInfoType = {
  inventories?: [
    {
      item_size_id: number;
      size: string;
      amount: number;
    }
  ];
  item_dto?: {
    brand: string;
    image_url: string;
    name: string;
  };
  sell?: {
    discount_price: number;
    discount_rate: number;
    price: number;
  };
};
type sizeType = {
  inventories: [
    {
      item_size_id: number;
      amount: number;
      size?: number;
    }
  ];
};
const AdminMain = () => {
  const token = localStorage.getItem("access_token");
  const [modal, setModal] = useState(false);
  const [itemInfo, setItemInfo] = useState<itemInfoType>();
  const [itemId, setItemId] = useState(0);
  const [discount_input, setDiscount_input] = useState<any>();
  const [itemSize, setItemSize] = useState<sizeType>();
  const requestDeleteUserApi = () => {
    const token = localStorage.getItem("access_token");
    if (token) {
      deleteUserRequest(token)
        .then(() => {
          alert("탈퇴가 완료되었습니다.");
          localStorage.removeItem("access_token");
          window.location.href = "/";
        })
        .catch(() => {
          alert("탈퇴에 실패하셨습니다.");
        });
    }
  };
  const [product, setProduct] = useState<any[]>([]);
  useEffect(() => {
    if (token) {
      getMyShopsItem(token).then((res) => setProduct(res.data.sells));
    }
  }, [token]);
  const requestGetItemDetail = (item_id: number) => {
    if (token) {
      getItemDetailRequest(token, item_id)
        .then((res) => {
          setItemId(item_id);
          setItemInfo(res.data);
          setDiscount_input(res.data.sell.discount_rate);
          setModal(true);
          let arr = res.data.inventories;
          setItemSize({ inventories: arr });
        })
        .catch(() => alert("오류가 발생하였습니다."));
    }
  };
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDiscount_input(e.target.value);
  };
  const requestDeleteItemApi = () => {
    if (token) {
      deleteItemRequest(token, itemId).then(() => {
        alert("제품삭제가 완료되었습니다.");
        window.location.href = "/main";
      });
    }
  };
  const requestPatchItemInfo = () => {
    if (token) {
      patchItemDiscountRequest(token, itemId, Number(discount_input))
        .then(() => {
          if (itemSize) {
            let arr = itemSize.inventories;
            arr.forEach((i) => {
              delete i.size;
            });
            const obj = { inventories: arr };
            patchItemNumberRequest(token, itemId, obj)
              .then(() => {
                alert("제품 정보 수정이 완료되었습니다.");
                window.location.href = "/main";
              })
              .catch(() => alert("오류가 발생하였습니다."));
          }
        })
        .catch(() => {
          alert("오류가 발생하였습니다.");
        });
    }
  };
  const onClickLogout = () => {
    localStorage.removeItem("access_token");
    alert("로그아웃이 완료되었습니다.");
    window.location.href = "/";
  };
  return (
    <div
      style={
        modal
          ? { overflowY: "hidden", position: "relative", height: "100vh" }
          : { overflowY: "visible", position: "relative", height: "100vh" }
      }
    >
      <Header />
      <AdminStyle.Container>
        <AdminStyle.TitleContainer>
          <ShopStyle.ShopName>WORKSOUT</ShopStyle.ShopName>
          <AdminStyle.UserLogoutBtn onClick={onClickLogout}>
            로그아웃
          </AdminStyle.UserLogoutBtn>
          <AdminStyle.UserDeleteBtn onClick={() => requestDeleteUserApi()}>
            회원 탈퇴
          </AdminStyle.UserDeleteBtn>
        </AdminStyle.TitleContainer>
        <AdminStyle.Line />
        <ShopStyle.ProductList>
          {product.map((item, index) => {
            return (
              <Products
                key={index}
                product={item}
                isSearch={false}
                onClick={() => requestGetItemDetail(item.sell_id)}
              />
            );
          })}
        </ShopStyle.ProductList>
      </AdminStyle.Container>
      <AdminStyle.ModalWrapper isNone={modal}>
        <AdminStyle.ModalContainer>
          <AdminStyle.ModalExitBtn onClick={() => setModal(!modal)}>
            X
          </AdminStyle.ModalExitBtn>
          <AdminStyle.ModalItemInfoContainer>
            <img src={itemInfo?.item_dto?.image_url} alt="" />
            <AdminStyle.ModalItemInfo>
              <h1>{itemInfo?.item_dto?.brand}</h1>
              <span>{itemInfo?.item_dto?.name}</span>
              <AdminStyle.ModalPriceContainer>
                <span>정가 : {itemInfo?.sell?.price}원</span>
                <AdminStyle.PriceInputContainer>
                  <span>할인율</span>
                  <AdminStyle.PriceInput
                    type="number"
                    name="sale"
                    value={discount_input}
                    onChange={onChange}
                  />
                  <span>%</span>
                </AdminStyle.PriceInputContainer>
              </AdminStyle.ModalPriceContainer>
              <AdminStyle.ItemNumberContainer>
                {itemSize?.inventories.map((item, i) => (
                  <S.StockListContainer
                    key={i}
                    style={{ marginBottom: "10px" }}
                  >
                    <S.StockListItem>
                      <h5>{item.size}</h5>
                      <span>{item.amount + "개"}</span>
                    </S.StockListItem>
                    <S.StockChangeWrap>
                      <S.StockChangeItem
                        onClick={() => {
                          if (item.amount >= 0) {
                            let arr = itemSize.inventories;
                            arr[i].amount += 1;
                            setItemSize({ inventories: [...arr] });
                          }
                        }}
                      />
                      <span>재고</span>
                      <S.StockChangeItem
                        onClick={() => {
                          if (item.amount > 0) {
                            let arr = itemSize.inventories;
                            arr[i].amount -= 1;
                            setItemSize({ inventories: [...arr] });
                          }
                        }}
                      />
                    </S.StockChangeWrap>
                  </S.StockListContainer>
                ))}
              </AdminStyle.ItemNumberContainer>
              <AdminStyle.ItemChangeInfo>
                <S.InputBtn onClick={requestPatchItemInfo}>적용</S.InputBtn>
                <span
                  style={{ color: "red", cursor: "pointer" }}
                  onClick={requestDeleteItemApi}
                >
                  제품 삭제
                </span>
              </AdminStyle.ItemChangeInfo>
            </AdminStyle.ModalItemInfo>
          </AdminStyle.ModalItemInfoContainer>
        </AdminStyle.ModalContainer>
      </AdminStyle.ModalWrapper>
    </div>
  );
};

export default AdminMain;
