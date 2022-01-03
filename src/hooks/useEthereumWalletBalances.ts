import { ETHBalances } from "./../types/data";
import { ETH_SUBGRAPH_URL } from "../constants/graph";
import { ETHBalancesQuery } from "../constants/TreasuryQueries";
import { useTreasuryQuery } from "./useTreasuryQuery";
import { useMemo } from "react";
import { removeZeroFields } from "../helpers/utils";
export const useEthereumWalletBalances = () => {
  const { data } = useTreasuryQuery(
    ETH_SUBGRAPH_URL,
    "eth_balances",
    ETHBalancesQuery
  );

  const mappedData: ETHBalances[] | null = useMemo(() => {
    if (!data) return null;

    return data
      .map((balancesObject: ETHBalances) => removeZeroFields(balancesObject))
      .reverse();
  }, [data]);

  return mappedData;
};
