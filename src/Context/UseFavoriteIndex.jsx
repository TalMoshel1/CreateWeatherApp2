import { useState } from "react";

export const useFavoriteIndex = (initialIndex = 0) => {
  const [favoriteIndex, setFavoriteIndex] = useState(initialIndex);

  const showNextFavorite = (length) => {
    setFavoriteIndex((index) => (index === length - 1 ? 0 : index + 1));
  };

  const showPreviousFavorite = (length) => {
    setFavoriteIndex((index) => (index === 0 ? length - 1 : index - 1));
  };

  return {
    favoriteIndex,
    setFavoriteIndex,
    showNextFavorite,
    showPreviousFavorite,
  };
};
