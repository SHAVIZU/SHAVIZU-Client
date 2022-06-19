type shopInfo = {
  id: number;
  name: string;
  image_url: string;
  opening_hours: string;
  address: string;
  latitude: number;
  longitude: number;
};

export const currentLocation = () => `
  <div class="currentLocation" />
`;

export const markerHtml = () => `
  <div class="notClickedMarker" />
`;

export const clickMarkerHtml = () => `
  <div class="clickedMarker" />
`;

export const explanationShop = (shop: shopInfo) => `
  <div class="explanationShop">
    <img src=${shop?.image_url} />
    <div>
      <h1>${shop?.name}</h1>
      <div>
        <span>${shop?.opening_hours}</span>
        <span> | ${shop?.address}</span>
      </div>
    </div>
    <div>
      <a href=http://localhost:3000/shop-intro?id=${shop.id}>자세히 보기</a>
    </div>
  </div>
`;
