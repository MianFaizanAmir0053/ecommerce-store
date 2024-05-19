"use client";

import React, { FC, useEffect, useState } from "react";

export function formatPrice(price: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);
}

interface CurrencyProps {
  value?: number | string;
}

const Currency: FC<CurrencyProps> = ({ value }) => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return <div className="font-semibold">{formatPrice(Number(value))}</div>;
};

export default Currency;
