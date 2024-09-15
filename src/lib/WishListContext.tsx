"use client";
import type React from "react";
import {
  type Dispatch,
  type SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import storage from "./modules/storage";

interface Wishlist {
  wishlist: string[];
  setWishlist: Dispatch<SetStateAction<string[]>>;
  addItem: (id: string) => void;
  removeItem: (id: string) => void;
}

export const WishlistContext = createContext<Wishlist | undefined>(undefined);

export const useWishlistContext = () => {
  const wishlist = useContext(WishlistContext);

  if (wishlist === undefined)
    throw new Error("useWishlistContext must be used with a WishlistContext");

  return wishlist;
};

export default function WishlistProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [wishlist, setWishlist] = useState<string[]>([]);

  useEffect(() => {
    setWishlist(storage.getWishlist);
  }, []);

  const addItem = (id: string) => {
    if (!wishlist.includes(id)) setWishlist([...wishlist, id]);
  };
  const removeItem = (id: string) => {
    setWishlist(wishlist.filter((itemId) => itemId !== id));
  };

  useEffect(() => {
    storage.setWishlist(wishlist);
  }, [wishlist]);

  return (
    <WishlistContext.Provider
      value={{ wishlist, setWishlist, addItem, removeItem }}
    >
      {children}
    </WishlistContext.Provider>
  );
}
