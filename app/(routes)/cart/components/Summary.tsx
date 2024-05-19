"use client";

import { Button } from "@/components/ui/Button";
import Currency from "@/components/ui/Currency";
import useCart from "@/hooks/use-cart";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";
import toast from "react-hot-toast";

type Props = {};

const Summary = (props: Props) => {
  const cart = useCart();
  const total = cart.items.reduce((acc, item) => {
    return acc + Number(item.price);
  }, 0);
  const removeAll = () => {
    cart.removeAll();
  };
  const searchParams = useSearchParams();
  useEffect(() => {
    if (searchParams.get("success")) {
      toast.success("Payment was cancelled");
      cart.removeAll();
    }

    if (searchParams.get("cancelled")) {
      toast.error("Payment was cancelled");
      ``;
    }
  }, [searchParams, cart]);

  const onCheckout = async () => {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/checkout`,
      {
        productIds: cart.items.map((item) => item.id),
      }
    );

    window.location = response.data.url;
  };

  return (
    <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8">
      <h2 className="text-lg font-medium text-gray-900">Order Summary</h2>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-t border-r-gray-200 pt-4">
          <div className="text-base font-medium text-gray-900">Order Total</div>
          <Currency value={total} />
        </div>
      </div>
      <Button className="mt-6 w-full" onClick={onCheckout}>
        Checkout
      </Button>
    </div>
  );
};

export default Summary;
