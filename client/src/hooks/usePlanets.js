import { useCallback, useEffect, useState } from "react";

import { findPropFromObj, httpGetPlanets } from "./requests";
import { useQuery } from "@tanstack/react-query";

import findKey from "lodash";

function usePlanets() {
  const [planets, savePlanets] = useState([]);

  const getPlanets = useCallback(async () => {
    const fetchedPlanets = await httpGetPlanets();
    savePlanets(fetchedPlanets);
  }, []);

  useEffect(() => {
    getPlanets();
  }, [getPlanets]);

  return planets;
}

export default usePlanets;
