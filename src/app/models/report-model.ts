export interface reportData {
    id: number
    date: string
    items: itemsData
    total: number
}

export interface itemsData{
    product: string
    qty: number
    price: number
}