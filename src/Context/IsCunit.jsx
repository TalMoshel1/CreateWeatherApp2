import { useState } from "react";

export function useIsCUnit() {
  const [isCUnit, setIsCUnit] = useState(true);

  const toggleIsCUnit = () => {
    setIsCUnit(prevIsCUnit => !prevIsCUnit);
  };

  return [isCUnit, toggleIsCUnit];
}
