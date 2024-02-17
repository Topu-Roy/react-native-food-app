export type Product = {
    id: number;
    name: string;
    image: string | null;
    price: number;
}

export type PizzaSizes = "S" | "M" | "L" | "XL"

export type CartItemType = {
    id: string,
    product: Product,
    product_id: number,
    size: PizzaSizes,
    quantity: number
}