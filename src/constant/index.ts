import icon1 from "../assets/icons/Group 1372.png";
import icon2 from "../assets/icons/Group 1373.png";
import icon3 from "../assets/icons/Group 1374.png";
import img1 from "../assets/images/Ellipse 90.png";
import img2 from "../assets/images/Ellipse 91.png";
import img3 from "../assets/images/Ellipse 92.png";
import special from "../assets/images/special/images.jpg";
import special2 from "../assets/images/special/services.jpg";
import special3 from "../assets/images/special/servie.jpg";
import special4 from "../assets/images/special/special.jpg";

export const navigation = [
  { title: "Home", path: "/" },
  { title: "Services", path: "/allservicepage" },
  { title: "About Us", path: "/aboutsection" },
  { title: "Gallery", path: "/gallerypage" },
  { title: "Our Experts", path: "/ourExpertspage" },
  { title: "Book Appointment", path: "/appointment" },
  { title: "Contact Us", path: "/contactuspage" },
];

export const services = [
  {
    icon: icon1,
    title: "Anti Age Face Treatment",
    price: "570",
    des: "Amazing flyers, social media posts and brand representations that would make your brand stand out.",
  },
  {
    icon: icon2,
    title: "Skin Care Treatment",
    price: "590",
    des: "Amazing flyers, social media posts and brand representations that would make your brand stand out.",
  },
  {
    icon: icon3,
    title: "Anti Age Face Treatment",
    price: "570",
    des: "Amazing flyers, social media posts and brand representations that would make your brand stand out.",
  },
  {
    icon: icon1,
    title: "Hair Color & Styleing",
    price: "700",
    des: "Amazing flyers, social media posts and brand representations that would make your brand stand out.",
  },
  {
    icon: icon2,
    title: "Skin Care Treatment",
    price: "590",
    des: "Amazing flyers, social media posts and brand representations that would make your brand stand out.",
  },
  {
    icon: icon3,
    title: "Anti Age Face Treatment",
    price: "570",
    des: "Amazing flyers, social media posts and brand representations that would make your brand stand out.",
  },
];

export const reviews = [
  {
    name: "Alice Johnson",
    rating: 4.5,
    review: "The service was below average. Not satisfied.",
    img: img1,
  },
  {
    name: "Michael Brown",
    rating: 5,
    review: "The service was below average. Not satisfied.",
    img: img2,
  },
  {
    name: "Sophia Martinez",
    rating: 4,
    review: "Great service, but there's rooms for improvement.",
    img: img3,
  },
  {
    name: "James Smith",
    rating: 3.5,
    review: "Good, but expected a bit more attention to detail.",
    img: img1,
  },
  {
    name: "Olivia Davis",
    rating: 2,
    review: "The service was below average. Not satisfied.",
    img: img2,
  },
  {
    name: "Olivia Davis",
    rating: 2,
    review: "The service was below average. Not satisfied.",
    img: img3,
  },
];

export const mainService = [
  {
    id: 1,
    title: "Baby Skin Care",
    discount: 50,
    image: "https://i.ibb.co.com/LNyb9jJ/baby-skin-care.jpg",
    description:
      "Gentle and nurturing baby skin care treatments designed to protect and moisturize sensitive skin. Perfect for ensuring your baby's skin stays soft, healthy, and irritation-free.Gentle and nurturing baby skin care treatments designed to protect and moisturize sensitive skin. Perfect for ensuring your baby's skin stays soft, healthy, and irritation-free.Gentle and nurturing baby skin care treatments designed to protect and moisturize sensitive skin. Perfect for ensuring your baby's skin stays soft, healthy, and irritation-free.",
    category: "Skin Care",
    price: 1200,
    relatedServices: [2, 3],
    reviews: [
      {
        user: "Alice",
        rating: 5,
        comment: "Absolutely amazing care for my baby's skin!",
      },
      {
        user: "Aoe",
        rating: 4,
        comment: "Very gentle and effective. Highly recommend!",
      },
      {
        user: "John",
        rating: 4,
        comment: "Very gentle and effective. Highly recommend!",
      },
      {
        user: "John",
        rating: 4,
        comment: "Very gentle and effective. Highly recommend!",
      },
    ],
    offers: "10% off for first-time customers!",
    rating: 4.5, // Added rating for the service
  },
  {
    id: 2,
    title: "Skin Cleansing Therapy",
    discount: 100,
    image: "https://i.ibb.co.com/BZGvy1Q/skin-clean.jpg",
    description:
      "Deep cleansing therapy to detoxify and refresh your skin. Our professionals use high-quality products to remove dirt, unclog pores, and give your skin a natural glow.Deep cleansing therapy to detoxify and refresh your skin. Our professionals use high-quality products to remove dirt, unclog pores, and give your skin a natural glow.Deep cleansing therapy to detoxify and refresh your skin. Our professionals use high-quality products to remove dirt, unclog pores, and give your skin a natural glow.",
    category: "Skin Care",
    price: 1500,
    relatedServices: [1, 3],
    reviews: [
      {
        user: "Emily",
        rating: 5,
        comment: "Left my skin glowing and refreshed!",
      },
      { user: "Sophia", rating: 4, comment: "Great service, worth the price." },
    ],
    offers: "Buy 1, Get 1 Free for first session!",
    rating: 4.5, // Added rating for the service
  },
  {
    id: 3,
    title: "Men's Face Wash Treatment",
    discount: 200,
    image: "https://i.ibb.co.com/X500mgg/mens-face-wash.jpg",
    description:
      "Rejuvenate your skin with our men's face wash treatment. Specially formulated to cleanse deeply, remove impurities, and leave your skin feeling fresh and energized.Rejuvenate your skin with our men's face wash treatment. Specially formulated to cleanse deeply, remove impurities, and leave your skin feeling fresh and energized.Rejuvenate your skin with our men's face wash treatment. Specially formulated to cleanse deeply, remove impurities, and leave your skin feeling fresh and energized.",
    category: "Skin Care",
    price: 800,
    relatedServices: [1, 2],
    reviews: [
      {
        user: "Michael",
        rating: 4,
        comment: "Skin feels much fresher now. Great treatment!",
      },
      {
        user: "David",
        rating: 5,
        comment: "Fantastic! My face feels rejuvenated.",
      },
    ],
    offers: "Free face mask with every treatment!",
    rating: 4.5, // Added rating for the service
  },
  {
    id: 4,
    title: "Dress Making & Styling",
    discount: 500,
    image: "https://i.ibb.co.com/zhnfRjP/dress-making.jpg",
    description:
      "Customized dress making and styling services for any occasion. From casual wear to intricate bridal designs, our expert tailors ensure a perfect fit and timeless elegance.Customized dress making and styling services for any occasion. From casual wear to intricate bridal designs, our expert tailors ensure a perfect fit and timeless elegance.Customized dress making and styling services for any occasion. From casual wear to intricate bridal designs, our expert tailors ensure a perfect fit and timeless elegance.",
    category: "Fashion & Styling",
    price: 3000,
    relatedServices: [5, 6],
    reviews: [
      {
        user: "Lily",
        rating: 5,
        comment: "The dress was a perfect fit. Absolutely loved it!",
      },
      {
        user: "Sophia",
        rating: 4,
        comment: "Great styling and attention to detail.",
      },
    ],
    offers: "Free consultation for custom designs!",
    rating: 4.5, // Added rating for the service
  },
  {
    id: 5,
    title: "Wedding Makeup Package",
    discount: 200,
    image: "https://i.ibb.co.com/tQqJ5Fq/wedding-makup.jpg",
    description:
      "Create the perfect bridal look with our comprehensive wedding makeup package. From natural beauty to glamorous styles, our experts tailor the experience to match your vision.Create the perfect bridal look with our comprehensive wedding makeup package. From natural beauty to glamorous styles, our experts tailor the experience to match your vision.Create the perfect bridal look with our comprehensive wedding makeup package. From natural beauty to glamorous styles, our experts tailor the experience to match your vision.",
    category: "Fashion & Styling",
    price: 5000,
    relatedServices: [4, 6],
    reviews: [
      {
        user: "Sarah",
        rating: 5,
        comment: "Made me look stunning on my special day!",
      },
      {
        user: "Jessica",
        rating: 4,
        comment: "Wonderful service, very professional.",
      },
    ],
    offers: "20% off for pre-booking!",
    rating: 4.5, // Added rating for the service
  },
  {
    id: 6,
    title: "Women's Hair Wash & Care",
    discount: 100,
    image: "https://i.ibb.co.com/BZGvy1Q/skin-clean.jpg",
    description:
      "Pamper your hair with our nourishing hair wash and care services. We use premium products to ensure healthy, shiny hair while providing a relaxing experience.Pamper your hair with our nourishing hair wash and care services. We use premium products to ensure healthy, shiny hair while providing a relaxing experience.Pamper your hair with our nourishing hair wash and care services. We use premium products to ensure healthy, shiny hair while providing a relaxing experience.",
    category: "Fashion & Styling",
    price: 1000,
    relatedServices: [4, 5],
    reviews: [
      {
        user: "Olivia",
        rating: 5,
        comment: "My hair has never been so soft and shiny!",
      },
      { user: "Emma", rating: 4, comment: "Very relaxing and great results." },
    ],
    offers: "Get a free scalp massage with every session!",
    rating: 4.5, // Added rating for the service
  },
  {
    id: 7,
    title: "Bridal Makeup",
    discount: 200,
    image: "https://i.ibb.co.com/tQqJ5Fq/wedding-makup.jpg",
    description:
      "Transform into the perfect bride with our luxurious bridal makeup service. Tailored to your preferences, ensuring you shine on your special day.Transform into the perfect bride with our luxurious bridal makeup service. Tailored to your preferences, ensuring you shine on your special day.Transform into the perfect bride with our luxurious bridal makeup service. Tailored to your preferences, ensuring you shine on your special day.",
    category: "Makeup & Hair",
    price: 7000,
    relatedServices: [8, 9],
    reviews: [
      {
        user: "Chloe",
        rating: 5,
        comment: "Perfect makeup! Looked stunning all day.",
      },
      {
        user: "Sophia",
        rating: 4,
        comment: "Amazing work, highly skilled artists.",
      },
    ],
    offers: "Free trial makeup session for bookings above $5000!",
    rating: 4.5, // Added rating for the service
  },

  {
    id: 9,
    title: "Occasion Makeup",
    discount: 530,
    image: "https://i.ibb.co.com/X500mgg/mens-face-wash.jpg",
    description:
      "Get the perfect makeup for any occasion with our expert touch. From subtle to bold looks, we craft makeup that matches your style.Get the perfect makeup for any occasion with our expert touch. From subtle to bold looks, we craft makeup that matches your style.Get the perfect makeup for any occasion with our expert touch. From subtle to bold looks, we craft makeup that matches your style.",
    category: "Makeup & Hair",
    price: 3500,
    relatedServices: [7, 8],
    reviews: [
      {
        user: "Sophia",
        rating: 5,
        comment: "Absolutely loved my look for the party!",
      },
      {
        user: "Grace",
        rating: 4,
        comment: "Great attention to detail and fabulous results.",
      },
    ],
    offers: "10% off for repeat customers!",
    rating: 4.5, // Added rating for the service
  },
];

export const speciaService = [
  {
    id: 1,
    title: "Baby Skin Care",
    discount: 50,
    image: special,
    description:
      "Gentle and nurturing baby skin care treatments designed to protect and moisturize sensitive skin. Perfect for ensuring your baby's skin stays soft, healthy, and irritation-free.Gentle and nurturing baby skin care treatments designed to protect and moisturize sensitive skin. Perfect for ensuring your baby's skin stays soft, healthy, and irritation-free.Gentle and nurturing baby skin care treatments designed to protect and moisturize sensitive skin. Perfect for ensuring your baby's skin stays soft, healthy, and irritation-free.",
    category: "Skin Care",
    price: 1200,
    relatedServices: [2, 3],
    reviews: [
      {
        user: "Alice",
        rating: 5,
        comment: "Absolutely amazing care for my baby's skin!",
      },
      {
        user: "Aoe",
        rating: 4,
        comment: "Very gentle and effective. Highly recommend!",
      },
      {
        user: "John",
        rating: 4,
        comment: "Very gentle and effective. Highly recommend!",
      },
      {
        user: "John",
        rating: 4,
        comment: "Very gentle and effective. Highly recommend!",
      },
    ],
    offers: "10% off for first-time customers!",
    rating: 4.5, // Added rating for the service
  },
  {
    id: 2,
    title: "Skin Cleansing Therapy",
    discount: 100,
    image: special2,
    description:
      "Deep cleansing therapy to detoxify and refresh your skin. Our professionals use high-quality products to remove dirt, unclog pores, and give your skin a natural glow.Deep cleansing therapy to detoxify and refresh your skin. Our professionals use high-quality products to remove dirt, unclog pores, and give your skin a natural glow.Deep cleansing therapy to detoxify and refresh your skin. Our professionals use high-quality products to remove dirt, unclog pores, and give your skin a natural glow.",
    category: "Skin Care",
    price: 1500,
    relatedServices: [1, 3],
    reviews: [
      {
        user: "Emily",
        rating: 5,
        comment: "Left my skin glowing and refreshed!",
      },
      { user: "Sophia", rating: 4, comment: "Great service, worth the price." },
    ],
    offers: "Buy 1, Get 1 Free for first session!",
    rating: 4.5, // Added rating for the service
  },
  {
    id: 3,
    title: "Men's Face Wash Treatment",
    discount: 200,
    image: special3,
    description:
      "Rejuvenate your skin with our men's face wash treatment. Specially formulated to cleanse deeply, remove impurities, and leave your skin feeling fresh and energized.Rejuvenate your skin with our men's face wash treatment. Specially formulated to cleanse deeply, remove impurities, and leave your skin feeling fresh and energized.Rejuvenate your skin with our men's face wash treatment. Specially formulated to cleanse deeply, remove impurities, and leave your skin feeling fresh and energized.",
    category: "Skin Care",
    price: 800,
    relatedServices: [1, 2],
    reviews: [
      {
        user: "Michael",
        rating: 4,
        comment: "Skin feels much fresher now. Great treatment!",
      },
      {
        user: "David",
        rating: 5,
        comment: "Fantastic! My face feels rejuvenated.",
      },
    ],
    offers: "Free face mask with every treatment!",
    rating: 4.5, // Added rating for the service
  },
  {
    id: 4,
    title: "Dress Making & Styling",
    discount: 500,
    image: special4,
    description:
      "Customized dress making and styling services for any occasion. From casual wear to intricate bridal designs, our expert tailors ensure a perfect fit and timeless elegance.Customized dress making and styling services for any occasion. From casual wear to intricate bridal designs, our expert tailors ensure a perfect fit and timeless elegance.Customized dress making and styling services for any occasion. From casual wear to intricate bridal designs, our expert tailors ensure a perfect fit and timeless elegance.",
    category: "Fashion & Styling",
    price: 3000,
    relatedServices: [5, 6],
    reviews: [
      {
        user: "Lily",
        rating: 5,
        comment: "The dress was a perfect fit. Absolutely loved it!",
      },
      {
        user: "Sophia",
        rating: 4,
        comment: "Great styling and attention to detail.",
      },
    ],
    offers: "Free consultation for custom designs!",
    rating: 4.5, // Added rating for the service
  },
];

export const allService = [
  {
    id: 1,
    title: "Baby Skin Care",
    discount: 50,
    image: special,
    description:
      "Gentle and nurturing baby skin care treatments designed to protect and moisturize sensitive skin. Perfect for ensuring your baby's skin stays soft, healthy, and irritation-free.Gentle and nurturing baby skin care treatments designed to protect and moisturize sensitive skin. Perfect for ensuring your baby's skin stays soft, healthy, and irritation-free.Gentle and nurturing baby skin care treatments designed to protect and moisturize sensitive skin. Perfect for ensuring your baby's skin stays soft, healthy, and irritation-free.",
    category: "Skin Care",
    price: 1200,
    relatedServices: [2, 3],
    reviews: [
      {
        user: "Alice",
        rating: 5,
        comment: "Absolutely amazing care for my baby's skin!",
      },
      {
        user: "Aoe",
        rating: 4,
        comment: "Very gentle and effective. Highly recommend!",
      },
      {
        user: "John",
        rating: 4,
        comment: "Very gentle and effective. Highly recommend!",
      },
      {
        user: "John",
        rating: 4,
        comment: "Very gentle and effective. Highly recommend!",
      },
    ],
    offers: "10% off for first-time customers!",
    rating: 4.5, // Added rating for the service
  },
  {
    id: 2,
    title: "Skin Cleansing Therapy",
    discount: 100,
    image: special2,
    description:
      "Deep cleansing therapy to detoxify and refresh your skin. Our professionals use high-quality products to remove dirt, unclog pores, and give your skin a natural glow.Deep cleansing therapy to detoxify and refresh your skin. Our professionals use high-quality products to remove dirt, unclog pores, and give your skin a natural glow.Deep cleansing therapy to detoxify and refresh your skin. Our professionals use high-quality products to remove dirt, unclog pores, and give your skin a natural glow.",
    category: "Skin Care",
    price: 1500,
    relatedServices: [1, 3],
    reviews: [
      {
        user: "Emily",
        rating: 5,
        comment: "Left my skin glowing and refreshed!",
      },
      { user: "Sophia", rating: 4, comment: "Great service, worth the price." },
    ],
    offers: "Buy 1, Get 1 Free for first session!",
    rating: 4.5, // Added rating for the service
  },
  {
    id: 3,
    title: "Men's Face Wash Treatment",
    discount: 200,
    image: special3,
    description:
      "Rejuvenate your skin with our men's face wash treatment. Specially formulated to cleanse deeply, remove impurities, and leave your skin feeling fresh and energized.Rejuvenate your skin with our men's face wash treatment. Specially formulated to cleanse deeply, remove impurities, and leave your skin feeling fresh and energized.Rejuvenate your skin with our men's face wash treatment. Specially formulated to cleanse deeply, remove impurities, and leave your skin feeling fresh and energized.",
    category: "Skin Care",
    price: 800,
    relatedServices: [1, 2],
    reviews: [
      {
        user: "Michael",
        rating: 4,
        comment: "Skin feels much fresher now. Great treatment!",
      },
      {
        user: "David",
        rating: 5,
        comment: "Fantastic! My face feels rejuvenated.",
      },
    ],
    offers: "Free face mask with every treatment!",
    rating: 4.5, // Added rating for the service
  },
  {
    id: 4,
    title: "Dress Making & Styling",
    discount: 500,
    image: special4,
    description:
      "Customized dress making and styling services for any occasion. From casual wear to intricate bridal designs, our expert tailors ensure a perfect fit and timeless elegance.Customized dress making and styling services for any occasion. From casual wear to intricate bridal designs, our expert tailors ensure a perfect fit and timeless elegance.Customized dress making and styling services for any occasion. From casual wear to intricate bridal designs, our expert tailors ensure a perfect fit and timeless elegance.",
    category: "Fashion & Styling",
    price: 3000,
    relatedServices: [5, 6],
    reviews: [
      {
        user: "Lily",
        rating: 5,
        comment: "The dress was a perfect fit. Absolutely loved it!",
      },
      {
        user: "Sophia",
        rating: 4,
        comment: "Great styling and attention to detail.",
      },
    ],
    offers: "Free consultation for custom designs!",
    rating: 4.5, // Added rating for the service
  },
  {
    id: 5,
    title: "Baby Skin Care",
    discount: 50,
    image: "https://i.ibb.co.com/LNyb9jJ/baby-skin-care.jpg",
    description:
      "Gentle and nurturing baby skin care treatments designed to protect and moisturize sensitive skin. Perfect for ensuring your baby's skin stays soft, healthy, and irritation-free.Gentle and nurturing baby skin care treatments designed to protect and moisturize sensitive skin. Perfect for ensuring your baby's skin stays soft, healthy, and irritation-free.Gentle and nurturing baby skin care treatments designed to protect and moisturize sensitive skin. Perfect for ensuring your baby's skin stays soft, healthy, and irritation-free.",
    category: "Skin Care",
    price: 1200,
    relatedServices: [2, 3],
    reviews: [
      {
        user: "Alice",
        rating: 5,
        comment: "Absolutely amazing care for my baby's skin!",
      },
      {
        user: "Aoe",
        rating: 4,
        comment: "Very gentle and effective. Highly recommend!",
      },
      {
        user: "John",
        rating: 4,
        comment: "Very gentle and effective. Highly recommend!",
      },
      {
        user: "John",
        rating: 4,
        comment: "Very gentle and effective. Highly recommend!",
      },
    ],
    offers: "10% off for first-time customers!",
    rating: 4.5, // Added rating for the service
  },
  {
    id: 6,
    title: "Skin Cleansing Therapy",
    discount: 100,
    image: "https://i.ibb.co.com/BZGvy1Q/skin-clean.jpg",
    description:
      "Deep cleansing therapy to detoxify and refresh your skin. Our professionals use high-quality products to remove dirt, unclog pores, and give your skin a natural glow.Deep cleansing therapy to detoxify and refresh your skin. Our professionals use high-quality products to remove dirt, unclog pores, and give your skin a natural glow.Deep cleansing therapy to detoxify and refresh your skin. Our professionals use high-quality products to remove dirt, unclog pores, and give your skin a natural glow.",
    category: "Skin Care",
    price: 1500,
    relatedServices: [1, 3],
    reviews: [
      {
        user: "Emily",
        rating: 5,
        comment: "Left my skin glowing and refreshed!",
      },
      { user: "Sophia", rating: 4, comment: "Great service, worth the price." },
    ],
    offers: "Buy 1, Get 1 Free for first session!",
    rating: 4.5, // Added rating for the service
  },
  {
    id: 7,
    title: "Men's Face Wash Treatment",
    discount: 200,
    image: "https://i.ibb.co.com/X500mgg/mens-face-wash.jpg",
    description:
      "Rejuvenate your skin with our men's face wash treatment. Specially formulated to cleanse deeply, remove impurities, and leave your skin feeling fresh and energized.Rejuvenate your skin with our men's face wash treatment. Specially formulated to cleanse deeply, remove impurities, and leave your skin feeling fresh and energized.Rejuvenate your skin with our men's face wash treatment. Specially formulated to cleanse deeply, remove impurities, and leave your skin feeling fresh and energized.",
    category: "Skin Care",
    price: 800,
    relatedServices: [1, 2],
    reviews: [
      {
        user: "Michael",
        rating: 4,
        comment: "Skin feels much fresher now. Great treatment!",
      },
      {
        user: "David",
        rating: 5,
        comment: "Fantastic! My face feels rejuvenated.",
      },
    ],
    offers: "Free face mask with every treatment!",
    rating: 4.5, // Added rating for the service
  },
  {
    id: 8,
    title: "Dress Making & Styling",
    discount: 500,
    image: "https://i.ibb.co.com/zhnfRjP/dress-making.jpg",
    description:
      "Customized dress making and styling services for any occasion. From casual wear to intricate bridal designs, our expert tailors ensure a perfect fit and timeless elegance.Customized dress making and styling services for any occasion. From casual wear to intricate bridal designs, our expert tailors ensure a perfect fit and timeless elegance.Customized dress making and styling services for any occasion. From casual wear to intricate bridal designs, our expert tailors ensure a perfect fit and timeless elegance.",
    category: "Fashion & Styling",
    price: 3000,
    relatedServices: [5, 6],
    reviews: [
      {
        user: "Lily",
        rating: 5,
        comment: "The dress was a perfect fit. Absolutely loved it!",
      },
      {
        user: "Sophia",
        rating: 4,
        comment: "Great styling and attention to detail.",
      },
    ],
    offers: "Free consultation for custom designs!",
    rating: 4.5, // Added rating for the service
  },
  {
    id: 9,
    title: "Wedding Makeup Package",
    discount: 200,
    image: "https://i.ibb.co.com/tQqJ5Fq/wedding-makup.jpg",
    description:
      "Create the perfect bridal look with our comprehensive wedding makeup package. From natural beauty to glamorous styles, our experts tailor the experience to match your vision.Create the perfect bridal look with our comprehensive wedding makeup package. From natural beauty to glamorous styles, our experts tailor the experience to match your vision.Create the perfect bridal look with our comprehensive wedding makeup package. From natural beauty to glamorous styles, our experts tailor the experience to match your vision.",
    category: "Fashion & Styling",
    price: 5000,
    relatedServices: [4, 6],
    reviews: [
      {
        user: "Sarah",
        rating: 5,
        comment: "Made me look stunning on my special day!",
      },
      {
        user: "Jessica",
        rating: 4,
        comment: "Wonderful service, very professional.",
      },
    ],
    offers: "20% off for pre-booking!",
    rating: 4.5, // Added rating for the service
  },
  {
    id: 10,
    title: "Women's Hair Wash & Care",
    discount: 100,
    image: "https://i.ibb.co.com/BZGvy1Q/skin-clean.jpg",
    description:
      "Pamper your hair with our nourishing hair wash and care services. We use premium products to ensure healthy, shiny hair while providing a relaxing experience.Pamper your hair with our nourishing hair wash and care services. We use premium products to ensure healthy, shiny hair while providing a relaxing experience.Pamper your hair with our nourishing hair wash and care services. We use premium products to ensure healthy, shiny hair while providing a relaxing experience.",
    category: "Fashion & Styling",
    price: 1000,
    relatedServices: [4, 5],
    reviews: [
      {
        user: "Olivia",
        rating: 5,
        comment: "My hair has never been so soft and shiny!",
      },
      { user: "Emma", rating: 4, comment: "Very relaxing and great results." },
    ],
    offers: "Get a free scalp massage with every session!",
    rating: 4.5, // Added rating for the service
  },
  {
    id: 11,
    title: "Bridal Makeup",
    discount: 200,
    image: "https://i.ibb.co.com/tQqJ5Fq/wedding-makup.jpg",
    description:
      "Transform into the perfect bride with our luxurious bridal makeup service. Tailored to your preferences, ensuring you shine on your special day.Transform into the perfect bride with our luxurious bridal makeup service. Tailored to your preferences, ensuring you shine on your special day.Transform into the perfect bride with our luxurious bridal makeup service. Tailored to your preferences, ensuring you shine on your special day.",
    category: "Makeup & Hair",
    price: 7000,
    relatedServices: [8, 9],
    reviews: [
      {
        user: "Chloe",
        rating: 5,
        comment: "Perfect makeup! Looked stunning all day.",
      },
      {
        user: "Sophia",
        rating: 4,
        comment: "Amazing work, highly skilled artists.",
      },
    ],
    offers: "Free trial makeup session for bookings above $5000!",
    rating: 4.5, // Added rating for the service
  },

  {
    id: 12,
    title: "Occasion Makeup",
    discount: 530,
    image: "https://i.ibb.co.com/X500mgg/mens-face-wash.jpg",
    description:
      "Get the perfect makeup for any occasion with our expert touch. From subtle to bold looks, we craft makeup that matches your style.Get the perfect makeup for any occasion with our expert touch. From subtle to bold looks, we craft makeup that matches your style.Get the perfect makeup for any occasion with our expert touch. From subtle to bold looks, we craft makeup that matches your style.",
    category: "Makeup & Hair",
    price: 3500,
    relatedServices: [7, 8],
    reviews: [
      {
        user: "Sophia",
        rating: 5,
        comment: "Absolutely loved my look for the party!",
      },
      {
        user: "Grace",
        rating: 4,
        comment: "Great attention to detail and fabulous results.",
      },
    ],
    offers: "10% off for repeat customers!",
    rating: 4.5, // Added rating for the service
  },
];
