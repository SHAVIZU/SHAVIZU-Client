import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Header from "../../header/Header";
import {
  currentLocation,
  markerHtml,
  clickMarkerHtml,
  explanationShop,
} from "./markerHtml";
import * as S from "./styles";
import ShopItem from "../../shopInfo/ShopInfo";
import {
  mapSearchIcon,
  mapCurrentLocationIcon,
  mapCommentIcon,
} from "../../../assets";
import { getSearchShop } from "../../../lib/api/searchMap";

type shopLoc = {
  lat: number;
  long: number;
};

type shopInfo = {
  id: number;
  name: string;
  image_url: string;
  opening_hours: string;
  address: string;
  latitude: number;
  longitude: number;
};

const ShopMap = () => {
  const [shopsInfo, setShopsInfo] = useState<shopInfo[]>([]);
  const [shopsLocation, setShopsLocation] = useState<shopLoc[]>([]);
  const [myLocation, setMyLocation] = useState<any>("");

  const mapRef = useRef<HTMLElement | null | any>(null);

  const searchCurrentMap = () => {
    const currentMap = mapRef.current.getBounds();

    getSearchShop(
      currentMap._max._lat,
      currentMap._max._lng,
      currentMap._min._lat,
      currentMap._min._lng
    )
      .then((res) => {
        setShopsInfo(res.data);
        console.log(res.data);

        res.data.map((info: any, index: any) => {
          setShopsLocation(
            shopsLocation.concat({ lat: info?.latitude, long: info?.longitude })
          );
        });
      })
      .catch((err) => console.log(err));
  };

  const moveCurrentMap = () => {
    mapRef.current.panTo(
      new naver.maps.LatLng(myLocation.latitude, myLocation.longitude)
    );
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(success, error);
    }

    function success(position: any) {
      setMyLocation({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    }

    function error() {
      setMyLocation({ latitude: 37.4979517, longitude: 127.0276188 });
    }
  }, []);

  useEffect(() => {
    if (typeof myLocation !== "string") {
      const currentPosition = [myLocation.latitude, myLocation.longitude];

      mapRef.current = new naver.maps.Map("map", {
        center: new naver.maps.LatLng(currentPosition[0], currentPosition[1]),
        zoomControl: false,
      });

      const currentMarker = new naver.maps.Marker({
        position: new naver.maps.LatLng(currentPosition[0], currentPosition[1]),
        map: mapRef.current,
        icon: {
          content: [currentLocation()].join(""),
        },
      });
    }
  }, [myLocation]);

  useEffect(() => {
    if (typeof myLocation !== "string") {
      const markers: naver.maps.Marker[] = [];
      const infowindows: naver.maps.InfoWindow[] = [];

      for (let i = 0; i < shopsLocation.length; i += 1) {
        const otherMarkers = new naver.maps.Marker({
          position: new naver.maps.LatLng(
            shopsLocation[i].lat,
            shopsLocation[i].long
          ),
          map: mapRef.current,
          icon: {
            content: [markerHtml()].join(""),
          },
        });

        const infowindow = new naver.maps.InfoWindow({
          content: [explanationShop(shopsInfo[i])].join(""),
          borderColor: "#fff",
        });

        markers.push(otherMarkers);
        infowindows.push(infowindow);
      }

      naver.maps.Event.addListener(mapRef.current, "idle", () => {
        updateMarkers(mapRef.current, markers);
      });

      const updateMarkers = (
        isMap: naver.maps.Map,
        isMarkers: naver.maps.Marker[]
      ) => {
        const mapBounds: any = isMap.getBounds();
        let marker;
        let position;

        for (let i = 0; i < isMarkers.length; i += 1) {
          marker = isMarkers[i];
          position = marker.getPosition();

          if (mapBounds.hasLatLng(position)) {
            showMarker(isMap, marker);
          } else {
            hideMarker(marker);
          }
        }
      };

      const showMarker = (isMap: naver.maps.Map, marker: naver.maps.Marker) => {
        marker.setMap(isMap);
      };

      const hideMarker = (marker: naver.maps.Marker) => {
        marker.setMap(null);
      };

      const getClickHandler = (seq: number) => {
        return () => {
          const infoWindow = infowindows[seq];

          if (infoWindow.getMap()) {
            infoWindow.close();

            markers[seq].setIcon({
              content: [markerHtml()].join(""),
            });
          } else {
            infoWindow.open(mapRef.current, markers[seq]);
            markers[seq].setIcon({
              content: [clickMarkerHtml()].join(""),
            });
          }
        };
      };

      for (let i = 0; i < markers.length; i += 1) {
        naver.maps.Event.addListener(markers[i], "click", getClickHandler(i));
      }
    }
  }, [myLocation, shopsLocation]);
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
          {shopsInfo.length === 0 ? (
            <h1>해당 맵에 편집샵이 존재하지 않습니다 T.T</h1>
          ) : (
            <>
              <h1>Result</h1>
              {shopsInfo.map((item: shopInfo) => (
                <ShopItem key={item.id} shopInfo={item} isMap={true} />
              ))}
            </>
          )}
        </S.List>
      </S.Container>
    </>
  );
};

export default ShopMap;
