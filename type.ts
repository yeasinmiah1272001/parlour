// Define the type for the review
export type Review = {
  user: string; // User's name
  rating: number; // Rating out of 5
  comment: string; // Review comment
};

// Define the type for a service or product item
export type ProductItem = {
  id: number | string; // Unique ID (could be a string or number)
  title: string; // Title of the service/product
  description: string; // Description of the service/product
  category: string; // Category like 'Skin Care', 'Health', etc.
  price: number; // Price of the service/product
  image: string; // Image URL for the service/product
  discount: number; // Discount percentage (optional)
  offers: string; // Special offers (optional)
  reviews: Review[]; // Array of reviews
  relatedServices: (number | string)[]; // Related services (can be an array of IDs)
  rating: number; // Rating out of 5
};
