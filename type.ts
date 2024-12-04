// Define the type for the review
export type Review = {
  user: string;
  rating: number;
  comment: string;
};

// Define the type for a service or product item
export type ProductItem = {
  id: number | string;
  title: string;
  description: string;
  category: string;
  price: number;
  image: string;
  discount: number;
  offers: string;
  reviews: Review[];
  relatedServices: (number | string)[];
  rating: number;
};
