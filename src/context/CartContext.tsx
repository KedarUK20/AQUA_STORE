"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export type CartItem = {
  /** Stable identifier for the item. Derived from the product title. */
  id: string;
  title: string;
  image: string;
  /** Original price string as shown in the shop, e.g. "$5". */
  price: string;
  /** Parsed numeric value used for totals. */
  unitPrice: number;
  quantity: number;
};

export type AddToCartInput = {
  title: string;
  image: string;
  price: string;
  quantity?: number;
};

type CartContextValue = {
  items: CartItem[];
  /** Total number of units across all line items. */
  count: number;
  /** Sum of unitPrice * quantity across all line items. */
  subtotal: number;
  addItem: (item: AddToCartInput) => void;
  removeItem: (id: string) => void;
  increment: (id: string) => void;
  decrement: (id: string) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

const STORAGE_KEY = "cart";

/** Extract a numeric value from a price string like "$5" or "INR 1,199". */
function parsePrice(price: string): number {
  const cleaned = price.replace(/[^0-9.]/g, "");
  const value = Number.parseFloat(cleaned);

  return Number.isFinite(value) ? value : 0;
}

/** Build an id from a title so the same product always maps to one line item. */
function toId(title: string): string {
  return title.trim().toLowerCase();
}

/** Normalize whatever is in localStorage into valid CartItem records. */
function normalizeStored(value: unknown): CartItem[] {
  if (!Array.isArray(value)) return [];

  return value.flatMap((raw) => {
    if (!raw || typeof raw !== "object") return [];

    const record = raw as Record<string, unknown>;
    const title = typeof record.title === "string" ? record.title : "";

    if (!title) return [];

    const price = typeof record.price === "string" ? record.price : "";
    const quantity =
      typeof record.quantity === "number" && record.quantity > 0
        ? Math.floor(record.quantity)
        : 1;

    return [
      {
        id: typeof record.id === "string" ? record.id : toId(title),
        title,
        image: typeof record.image === "string" ? record.image : "",
        price,
        unitPrice:
          typeof record.unitPrice === "number"
            ? record.unitPrice
            : parsePrice(price),
        quantity,
      },
    ];
  });
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [hydrated, setHydrated] = useState(false);

  // Load persisted cart once on mount. We intentionally read localStorage in an
  // effect (not during render) so the server and first client render agree on an
  // empty cart, avoiding a hydration mismatch on the navbar badge. The setState
  // calls below run a single time on mount, so the cascading-render concern the
  // lint rule guards against does not apply here.
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);

      if (stored) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setItems(normalizeStored(JSON.parse(stored)));
      }
    } catch {
      // Corrupt or unavailable storage: start with an empty cart.
    }

    setHydrated(true);
  }, []);

  // Persist whenever the cart changes (after the initial load).
  useEffect(() => {
    if (!hydrated) return;

    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // Ignore write failures (e.g. private mode quota).
    }
  }, [items, hydrated]);

  // Keep the cart in sync across open tabs.
  useEffect(() => {
    const onStorage = (event: StorageEvent) => {
      if (event.key !== STORAGE_KEY) return;

      try {
        setItems(normalizeStored(JSON.parse(event.newValue || "[]")));
      } catch {
        setItems([]);
      }
    };

    window.addEventListener("storage", onStorage);

    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const addItem = useCallback((item: AddToCartInput) => {
    const id = toId(item.title);
    const addQuantity =
      item.quantity && item.quantity > 0 ? Math.floor(item.quantity) : 1;

    setItems((current) => {
      const existing = current.find((line) => line.id === id);

      if (existing) {
        return current.map((line) =>
          line.id === id
            ? { ...line, quantity: line.quantity + addQuantity }
            : line,
        );
      }

      return [
        ...current,
        {
          id,
          title: item.title,
          image: item.image,
          price: item.price,
          unitPrice: parsePrice(item.price),
          quantity: addQuantity,
        },
      ];
    });
  }, []);

  const removeItem = useCallback((id: string) => {
    setItems((current) => current.filter((line) => line.id !== id));
  }, []);

  const increment = useCallback((id: string) => {
    setItems((current) =>
      current.map((line) =>
        line.id === id ? { ...line, quantity: line.quantity + 1 } : line,
      ),
    );
  }, []);

  const decrement = useCallback((id: string) => {
    setItems((current) =>
      current.flatMap((line) => {
        if (line.id !== id) return [line];
        if (line.quantity <= 1) return [];

        return [{ ...line, quantity: line.quantity - 1 }];
      }),
    );
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const count = useMemo(
    () => items.reduce((total, line) => total + line.quantity, 0),
    [items],
  );

  const subtotal = useMemo(
    () => items.reduce((total, line) => total + line.unitPrice * line.quantity, 0),
    [items],
  );

  const value = useMemo<CartContextValue>(
    () => ({
      items,
      count,
      subtotal,
      addItem,
      removeItem,
      increment,
      decrement,
      clearCart,
    }),
    [items, count, subtotal, addItem, removeItem, increment, decrement, clearCart],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return context;
}
