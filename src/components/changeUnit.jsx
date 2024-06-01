import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import favoritesSlice from "../data/favouritesSlice.js";

export function ChangeUnit() {

  const locationData = useSelector((state) => location.data);
  const favorites = useSelector((state) => state.favorites);
  const current = useSelector((state) => state.current);
  const { addToFavorites } = favoritesSlice.actions;
  const dispatch = useDispatch();


}
