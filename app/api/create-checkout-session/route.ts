import { NextResponse } from "next/server";
import Stripe from "stripe";
interface Item {
  name: string;
  price: number;
  quantity: number;
  image: string;
}
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-07-30.basil",
});

export async function POST(req: Request) {
  try {
    const { items } = await req.json();

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: items.map((item: Item) => ({
        price_data: {
          currency: "usd",
          product_data: {
            name: item.name,
            images: [item.image],
          },
          unit_amount: Math.round(item.price * 100),
        },
        quantity: item.quantity,
      })),
      success_url: `${req.headers.get("origin")}/success`,
      cancel_url: `${req.headers.get("origin")}/cart`,
    });

    return NextResponse.json({ id: session.id });
  } catch (err) {
    console.error(err);
    const errorMessage =
      err instanceof Error ? err.message : "An unknown error occurred";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
