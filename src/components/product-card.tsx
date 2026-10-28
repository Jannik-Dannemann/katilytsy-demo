import Image from "next/image";
import type { Product } from "@/lib/content";
import { formatPrice } from "@/lib/format";
import { AddToCartButton } from "@/components/add-to-cart";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group flex flex-col" data-reveal-item>
      <div className="media-zoom relative aspect-[4/5] bg-stone">
        <Image
          src={product.image}
          alt={product.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
          className="object-cover"
        />
        <span className="absolute left-3 top-3 bg-paper/90 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-ink">
          {product.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col pt-4">
        <h3 className="display-4">{product.name}</h3>
        <p className="mt-1 font-display text-base font-semibold tracking-tight">
          {formatPrice(product.price)}
        </p>
        <p className="mt-2.5 flex-1 text-sm leading-relaxed text-muted">{product.description}</p>
        <AddToCartButton productId={product.id} className="mt-5" />
      </div>
    </article>
  );
}
