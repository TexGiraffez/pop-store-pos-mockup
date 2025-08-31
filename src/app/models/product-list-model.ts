export interface ProductListModel {
    id: number;
    product: string;
    price: number;
    code?: string;
}

export interface CartItem extends ProductListModel{
    qty: number
}

