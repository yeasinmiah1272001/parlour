import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { ProductItem } from "../../../../type";

export const POST = async (request: NextRequest) => {
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!);

  try {
    const { email, item } = await request.json();

    const line_items = item.map((product: ProductItem) => ({
      quantity: product.quantity,
      price_data: {
        currency: "usd",
        unit_amount: Math.round(product.price * 100), // Convert dollars to cents
        product_data: {
          name: product.title,
          description: product.description,
          images: [product.image], // Stripe expects an array
        },
      },
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items,
      mode: "payment",
      success_url: `${process.env.NEXTAUTH_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXTAUTH_URL}/cancel`,
      customer_email: email,
    });

    return NextResponse.json({
      success: true,
      id: session.id,
    });
  } catch (error: any) {
    console.error("Stripe Error: ", error.message);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to create checkout session",
        error: error.message,
      },
      { status: 500 }
    );
  }
};
