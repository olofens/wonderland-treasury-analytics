import { ReactNode } from "react";
import { CardDiv } from "./styles";

export const Card = ({ children }: { children: ReactNode }) => {
  return <CardDiv>{children}</CardDiv>;
};
