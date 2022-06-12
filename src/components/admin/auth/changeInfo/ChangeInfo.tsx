import React from "react";
import * as S from "../../styles";
const ChangeInfo = () => {
  const getLocation = (address: string) => {
    naver.maps.Service.geocode(
      {
        query: address,
      },
      function (status, response) {
        if (status !== naver.maps.Service.Status.OK) {
          return alert("Something wrong!");
        }

        var result = response.result, // 검색 결과의 컨테이너
          items = result.items; // 검색 결과의 배열
        console.log(items);
        // do Something
      }
    );
  };

  return (
    <S.Container>
      <S.Title>편집샵 정보 수정</S.Title>
      <S.Input placeholder="주소" />
      <S.Input placeholder="상세주소" />
      <S.Input placeholder="전화번호" />
      <S.Input placeholder="상세설명" />
      <S.Input placeholder="영업시간" />
      <S.Submit onClick={() => getLocation("가정북로76")}>변경</S.Submit>
    </S.Container>
  );
};

export default ChangeInfo;
