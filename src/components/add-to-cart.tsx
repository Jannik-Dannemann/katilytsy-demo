"use client";

import { useState } from "react";
import { useCart } from "@/components/cart-provider";
import { Plus } from "@/components/icons";

export function AddToCartButton({
  productId,
  className = "",
  label = "Lisää ostoskoriin",
}: {
  productId: string;
  className?: string;
  label?: string;
}) {
  const { add } = useCart();
  const [added, setAdded] = useState(false);

  return (
    <button
      type="button"
      onClick={() => {
        add(productId);
        setAdded(true);
        window.setTimeout(() => setAdded(false), 1400);
      }}
      className={`btn btn-outline w-full ${className}`}
    >
      {added ? "Lisätty ostoskoriin" : label}
      <Plus className="h-4 w-4" />
    </button>
  );
}
