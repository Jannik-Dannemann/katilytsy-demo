"use client";

import Image from "next/image";
import Link from "next/link";
import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { PRODUCTS, type Product } from "@/lib/content";
import { formatPrice } from "@/lib/format";
import { Bag, Close, Minus, Plus, ArrowRight } from "@/components/icons";

type CartLine = { id: string; qty: number };

type CartContextValue = {
  lines: { product: Product; qty: number }[];
  count: number;
  subtotal: number;
  add: (id: string, qty?: number) => void;
  remove: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  clear: () => void;
  open: () => void;
  close: () => void;
  isOpen: boolean;
};

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "kati-cart-v1";

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      try {
        const raw = window.localStorage.getItem(STORAGE_KEY);
        if (raw) {
          const parsed = JSON.parse(raw) as CartLine[];
          if (Array.isArray(parsed)) {
            setLines(
              parsed.filter(
                (line) =>
                  typeof line?.id === "string" &&
                  typeof line?.qty === "number" &&
                  line.qty > 0 &&
                  PRODUCTS.some((product) => product.id === line.id),
              ),
            );
          }
        }
      } catch {
        // Ignore malformed storage.
      }
      setHydrated(true);
    }, 0);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(lines));
  }, [lines, hydrated]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen]);

  const add = useCallback((id: string, qty = 1) => {
    setLines((current) => {
      const existing = current.find((line) => line.id === id);
      if (existing) {
        return current.map((line) =>
          line.id === id ? { ...line, qty: Math.min(99, line.qty + qty) } : line,
        );
      }
      return [...current, { id, qty }];
    });
    setIsOpen(true);
  }, []);

  const remove = useCallback((id: string) => {
    setLines((current) => current.filter((line) => line.id !== id));
  }, []);

  const setQty = useCallback((id: string, qty: number) => {
    if (qty < 1) {
      setLines((current) => current.filter((line) => line.id !== id));
      return;
    }
    setLines((current) =>
      current.map((line) => (line.id === id ? { ...line, qty: Math.min(99, qty) } : line)),
    );
  }, []);

  const clear = useCallback(() => setLines([]), []);

  const detailedLines = useMemo(
    () =>
      lines
        .map((line) => {
          const product = PRODUCTS.find((item) => item.id === line.id);
          return product ? { product, qty: line.qty } : null;
        })
        .filter((line): line is { product: Product; qty: number } => Boolean(line)),
    [lines],
  );

  const count = detailedLines.reduce((total, line) => total + line.qty, 0);
  const subtotal = detailedLines.reduce(
    (total, line) => total + line.product.price * line.qty,
    0,
  );

  const value = useMemo(
    () => ({
      lines: detailedLines,
      count,
      subtotal,
      add,
      remove,
      setQty,
      clear,
      open: () => setIsOpen(true),
      close: () => setIsOpen(false),
      isOpen,
    }),
    [detailedLines, count, subtotal, add, remove, setQty, clear, isOpen],
  );

  return (
    <CartContext.Provider value={value}>
      {children}
      <CartDrawer />
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used inside CartProvider");
  return context;
}

export function CartButton() {
  const { count, open } = useCart();
  return (
    <button
      type="button"
      onClick={open}
      className="relative inline-flex h-11 w-11 items-center justify-center rounded-full transition-colors hover:bg-ink/5"
      aria-label={`Ostoskori, ${count} tuotetta`}
    >
      <Bag className="h-5 w-5" />
      {count > 0 && (
        <span className="absolute right-0.5 top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-ink px-1 text-[10px] font-semibold leading-none text-cream">
          {count}
        </span>
      )}
    </button>
  );
}

function CartDrawer() {
  const { lines, subtotal, isOpen, close, setQty, remove } = useCart();

  return (
    <div
      className={`fixed inset-0 z-[70] ${isOpen ? "" : "pointer-events-none"}`}
      aria-hidden={!isOpen}
    >
      <button
        type="button"
        tabIndex={isOpen ? 0 : -1}
        aria-label="Sulje ostoskori"
        onClick={close}
        className={`absolute inset-0 bg-ink/45 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
      />
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Ostoskori"
        className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-paper shadow-2xl transition-transform duration-[400ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between border-b border-line px-5 py-4 sm:px-7">
          <div>
            <p className="display-4">Ostoskori</p>
            <p className="mt-1 text-sm text-muted">
              {lines.length === 0
                ? "Ei vielä tuotteita"
                : `${lines.reduce((total, line) => total + line.qty, 0)} tuotetta`}
            </p>
          </div>
          <button
            type="button"
            onClick={close}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line transition-colors hover:border-ink"
            aria-label="Sulje ostoskori"
          >
            <Close className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-5 sm:px-7">
          {lines.length === 0 ? (
            <div className="flex h-full flex-col items-start justify-center pb-16">
              <p className="display-3">Vielä tyhjä.</p>
              <p className="mt-3 max-w-xs text-muted">
                Valitse treeni tai valmennus, niin se löytyy täältä.
              </p>
              <Link href="/verkkokauppa" onClick={close} className="btn btn-dark mt-6">
                Siirry verkkokauppaan
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          ) : (
            <ul className="divide-y divide-line">
              {lines.map(({ product, qty }) => (
                <li key={product.id} className="flex gap-4 py-5 first:pt-0">
                  <div className="relative h-24 w-20 shrink-0 overflow-hidden bg-stone">
                    <Image
                      src={product.image}
                      alt={product.alt}
                      fill
                      sizes="80px"
                      className="object-cover"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-sm font-semibold leading-snug">{product.name}</p>
                        <p className="mt-1 text-sm text-muted">{formatPrice(product.price)}</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => remove(product.id)}
                        className="text-xs text-muted underline underline-offset-2 hover:text-ink"
                      >
                        Poista
                      </button>
                    </div>
                    <div className="mt-3 inline-flex items-center border border-line">
                      <button
                        type="button"
                        onClick={() => setQty(product.id, qty - 1)}
                        className="flex h-8 w-8 items-center justify-center hover:bg-stone"
                        aria-label="Vähennä määrää"
                      >
                        <Minus className="h-3.5 w-3.5" />
                      </button>
                      <span className="w-8 text-center text-sm">{qty}</span>
                      <button
                        type="button"
                        onClick={() => setQty(product.id, qty + 1)}
                        className="flex h-8 w-8 items-center justify-center hover:bg-stone"
                        aria-label="Lisää määrää"
                      >
                        <Plus className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {lines.length > 0 && (
          <div className="border-t border-line px-5 py-5 sm:px-7">
            <div className="flex items-baseline justify-between">
              <span className="text-sm text-muted">Yhteensä</span>
              <span className="display-4">{formatPrice(subtotal)}</span>
            </div>
            <p className="mt-2 text-xs leading-relaxed text-muted">
              Hinnat sisältävät ALV 25,5 %. Maksutavat: lasku, MobilePay, liikuntaedut ja
              Klarna.
            </p>
            <Link href="/verkkokauppa/kassa" onClick={close} className="btn btn-dark mt-4 w-full">
              Siirry kassalle
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        )}
      </aside>
    </div>
  );
}
