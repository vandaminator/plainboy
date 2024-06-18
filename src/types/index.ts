export type Product = {
  id: string;
  title: string;
  image: string;
  price: number;
  quantity: number;
  avaliableQty?: number;
};

export type fetchProduct = {
  result: Product[];
};

export type Category = { id: string; name: string };
export type fetchCatgory = { result: Category[] };

export type idProduct = {
  id: string;
  title: string;
  images: string[];
  price: number;
  // category: { name: string; id: string };
  quantity: number;
};
export type fetchIdProduct = { result: idProduct[], rating?: number | null };

export type Order = {
  cart: Product[];
  phoneNumbers: string;
  price: number;
};

export type fetchQuantities = { id: string; quantity: number };

export type fetchComments = {
  created_at: string;
  id: number;
  message: string;
  product: number;
  rating: number;
  user: number;
  Users: {
    firstName: string;
    lastName: string;
  } | null;
}[];
