import React, { useState } from "react";
import { getTrackBackground, Range } from "react-range";
import * as S from "./styles";
const RangeComponent = () => {
  const [rangeValue, setRangeValue] = useState([50, 350]);
  const [isFree, setIsFree] = useState(false);
  return (
    <>
      <S.Container isFree={isFree}>
        <S.SettingSize isFree={isFree}>
          <span>{rangeValue[0]}</span>
        </S.SettingSize>
        <Range
          values={rangeValue}
          onChange={(rangeValue) => {
            setRangeValue(rangeValue);
          }}
          min={0}
          max={400}
          renderTrack={({ props, children }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: "1px",
                width: "70%",
                background: getTrackBackground({
                  min: 0,
                  max: 400,
                  values: rangeValue,
                  colors: ["#000", "#55B6CE", "#000"],
                }),
              }}
            >
              {children}
            </div>
          )}
          renderThumb={({ props }) => (
            <div
              {...props}
              style={{
                borderRadius: "50%",
                ...props.style,
                height: "20px",
                width: "20px",
                backgroundColor: "#55B6CE",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  backgroundColor: "#fff",
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                }}
              />
            </div>
          )}
        />
        <S.SettingSize isFree={isFree}>
          <span>{rangeValue[1]}</span>
        </S.SettingSize>
      </S.Container>
      <S.FreeContainer>
        <span
          style={isFree ? { visibility: "hidden" } : { visibility: "visible" }}
        >
          MIN
        </span>
        <S.SetFreeSize isFree={isFree} onClick={() => setIsFree(!isFree)}>
          free
        </S.SetFreeSize>
        <span
          style={isFree ? { visibility: "hidden" } : { visibility: "visible" }}
        >
          MAX
        </span>
      </S.FreeContainer>
    </>
  );
};

export default RangeComponent;
