import React, { CSSProperties, forwardRef, ReactNode } from "react";

export enum FontWeight {
  Light = 300,
  Default = 400,
  Medium = 500,
  Bold = 600,
  Heavy = 700,
}

export interface TextProps {
  size?: string;
  weight?: FontWeight;
  children?: ReactNode;
  dimmed?: boolean;
  style?: CSSProperties; // for all kinds of overrides
}

export const Text = forwardRef<HTMLSpanElement, TextProps>(
  (
    {
      size = "14px",
      weight = FontWeight.Default,
      dimmed = false,
      style = {},
      children,
    }: TextProps,
    ref
  ) => {
    const textStyle: CSSProperties = {
      fontSize: size,
      fontWeight: weight,
      color: dimmed ? "rgba(255, 255, 255, 0.6)" : "#fff",
      ...style,
    };
    return (
      <span ref={ref} style={textStyle}>
        {children}
      </span>
    );
  }
);

export const DimmedTitleText = ({ children }: { children: ReactNode }) => {
  return (
    <Text dimmed size="20px" weight={FontWeight.Medium}>
      {children}
    </Text>
  );
};

export const BrightValueText = forwardRef<HTMLSpanElement, TextProps>(
  ({ children }, ref) => {
    return (
      <Text ref={ref} size="30px" weight={FontWeight.Heavy}>
        {children}
      </Text>
    );
  }
);
