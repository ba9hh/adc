// src/context/FavoritesContext.jsx
import React, { createContext, useContext, useState, useEffect } from "react";

const FavoritesContext = createContext();

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }
  return context;
};

export const FavoritesProvider = ({ children }) => {
  // Initialize state from localStorage
  const [favoriteItems, setFavoriteItems] = useState(() => {
    try {
      const savedFavorites = localStorage.getItem("favoriteItems");
      return savedFavorites ? JSON.parse(savedFavorites) : [];
    } catch (error) {
      console.error("Error loading favorites from localStorage:", error);
      return [];
    }
  });

  // Save to localStorage whenever favoriteItems changes
  useEffect(() => {
    try {
      localStorage.setItem("favoriteItems", JSON.stringify(favoriteItems));
    } catch (error) {
      console.error("Error saving favorites to localStorage:", error);
    }
  }, [favoriteItems]);

  const addToFavorites = (product) => {
    setFavoriteItems((prevItems) => {
      const exists = prevItems.find((item) => item.id === product.id);
      if (exists) {
        return prevItems; // Already in favorites
      }
      return [...prevItems, product];
    });
  };

  const removeFromFavorites = (productId) => {
    setFavoriteItems((prevItems) =>
      prevItems.filter((item) => item.id !== productId),
    );
  };

  const toggleFavorite = (product) => {
    const exists = favoriteItems.find((item) => item.id === product.id);
    if (exists) {
      removeFromFavorites(product.id);
    } else {
      addToFavorites(product);
    }
  };

  const isFavorite = (productId) => {
    return favoriteItems.some((item) => item.id === productId);
  };

  const getTotalFavorites = () => {
    return favoriteItems.length;
  };

  const clearFavorites = () => {
    setFavoriteItems([]);
    localStorage.removeItem("favoriteItems");
  };

  return (
    <FavoritesContext.Provider
      value={{
        favoriteItems,
        addToFavorites,
        removeFromFavorites,
        toggleFavorite,
        isFavorite,
        getTotalFavorites,
        clearFavorites,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};
