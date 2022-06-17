export type shopProductsType = {
  shop_name: string;
  items: [
    {
      discount_price: number;
      discount_rate: number;
      item_name: string;
      image_url: string;
      brand_name: string;
      inventories: [
        {
          size: string;
          amount: number;
        }
      ];
    }
  ];
};
