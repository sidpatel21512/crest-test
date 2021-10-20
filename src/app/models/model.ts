export interface IProduct {
    id: number;
    product_name: string;
    product_details: string;
    is_available: boolean;
    purchase_quantity: number;
    quantity: number;
    price: number;
  }
  
  export interface ICart {
    products: IProduct[];
    total: number;
  }