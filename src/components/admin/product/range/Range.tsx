import React, { useState } from "react";
import { getTrackBackground, Range } from "react-range";
import * as S from "./styles";
const RangeComponent = () => {
  const [rangeValue, setRangeValue] = useState([25, 75]);
  return (
    <S.Container>
      <Range
        values={rangeValue}
        onChange={(rangeValue) => {
          setRangeValue(rangeValue);
        }}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: "1px",
              width: "100%",
              background: getTrackBackground({
                values: rangeValue,
                colors: ["#000", "#55B6CE", "#000"],
                min: 0,
                max: 100,
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
    </S.Container>
  );
};

export default RangeComponent;
