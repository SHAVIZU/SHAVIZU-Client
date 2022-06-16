export type itemType = {
  id: number;
  image_url: string;
  brand_name: string;
  item_name: string;
  style_code: string;
};

export type shopType = {
  id: number;
  name: string;
  image_url: string;
  opening_hours: string;
  address: string;
  inventories: [
    {
      size: string;
      amount: number;
    }
  ];
};
