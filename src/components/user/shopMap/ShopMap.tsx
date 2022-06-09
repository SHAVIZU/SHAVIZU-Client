import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Header from "../../header/Header";
import { markerHtml } from "./markerHtml";
import * as S from "./styles";
import ShopItem from "../../shopInfo/ShopInfo";
import {
  mapSearchIcon,
  mapCurrentLocationIcon,
  mapCommentIcon,
} from "../../../assets";

const ShopMap = () => {
  const [myLocation, setMyLocation] = useState<
    { latitude: number; longitude: number } | string
  >("");
  const [myMap, setMyMap] = useState<any>();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    }

    function success(position: any) {
      setMyLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });

      setMyMap({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    }

    function error() {
      setMyLocation({ latitude: 37.4979517, longitude: 127.0276188 });
    }
  }, []);

  const mapRef = useRef<HTMLElement | null | any>(null);

  useEffect(() => {
    if (typeof myLocation !== "string")
      mapRef.current = new naver.maps.Map("map", {
        center: new naver.maps.LatLng(
          myLocation.latitude,
          myLocation.longitude
        ),
        zoomControl: false,
      });
  }, [mapRef, myLocation]);

  const data = [
    {
      id: 1,
      name: "윤준기팀",
      image_url: "https://shavizu.s3.ap-northeast-2.amazonaws.com/",
      opening_hours: "8:20 AM - 8:30 PM",
      address: "대덕소프트웨어마이스터고등학교",
      latitude: 36.3504119,
      longitude: 127.3845475,
    },
    {
      id: 2,
      name: "소공",
      image_url: "https://shavizu.s3.ap-northeast-2.amazonaws.com/",
      opening_hours: "8:20 AM - 8:30 PM",
      address: "대덕대학교 정곡관",
      latitude: 36.3504119,
      longitude: 127.3845475,
    },
    {
      id: 3,
      name: "샤비쥬",
      image_url: "https://shavizu.s3.ap-northeast-2.amazonaws.com/",
      opening_hours: "8:20 AM - 8:30 PM",
      address: "대덕대학교 이공관",
      latitude: 36.3504119,
      longitude: 127.3845475,
    },
  ];

  const markerRef = useRef<any | null>(null);

  useEffect(() => {
    markerRef.current = new naver.maps.Marker({
      position: new naver.maps.LatLng(36.3904673, 127.3713544),
      map: mapRef.current,
      icon: {
        content: [markerHtml()].join(""),
        anchor: new naver.maps.Point(11, 11),
      },
    });
  }, []);

  const searchCurrentMap = () => {
    const currentMap = mapRef.current.getBounds();
    console.log(
      currentMap._max._lat +
        " // " +
        currentMap._max._lng +
        " // " +
        currentMap._min._lat +
        " // " +
        currentMap._min._lng +
        " // "
    );
  };

  const moveCurrentMap = () => {
    mapRef.current.panTo(
      new naver.maps.LatLng(myMap.latitude, myMap.longitude)
    );

    searchCurrentMap();
  };

  return (
    <>
      <Header />
      <S.Container>
        <div
          style={{
            position: "relative",
          }}
        >
          <S.Map id="map"></S.Map>
          <S.MapMore>
            <S.MapMoreItem>
              <S.MapMoreIcon onClick={searchCurrentMap}>
                <img src={mapSearchIcon} alt="" />
              </S.MapMoreIcon>
              <S.MapComment>
                <img src={mapCommentIcon} alt="" />
                <span>현재 위치 기반 검색</span>
              </S.MapComment>
            </S.MapMoreItem>
            <S.MapMoreItem>
              <S.MapMoreIcon onClick={moveCurrentMap}>
                <img src={mapCurrentLocationIcon} alt="" />
              </S.MapMoreIcon>
              <S.MapComment>
                <img src={mapCommentIcon} alt="" />
                <span>현재 위치로 이동</span>
              </S.MapComment>
            </S.MapMoreItem>
          </S.MapMore>
        </div>
        <S.List>
          <h1>Result</h1>
          {data.map((item) => (
            <ShopItem key={item.id} shopInfo={item} isMap={true} />
          ))}
        </S.List>
      </S.Container>
    </>
  );
};

export default ShopMap;
