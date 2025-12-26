import React from "react";
import { Text, TextProps } from "react-native";
import { Dimensions } from "react-native";

interface ResponsiveTextProps extends TextProps {
  children: React.ReactNode;
  variant?: "heading" | "subheading" | "body" | "caption" | "small";
  weight?: "regular" | "medium" | "bold";
  color?: string;
  numberOfLines?: number;
  // Dynamic color props
  primaryColor?: string;
  accentColor?: string;
  textColor?: string;
  backgroundColor?: string;
  className?: string;
}

const { width } = Dimensions.get("window");
const isSmallScreen = width < 375;
const isMediumScreen = width >= 375 && width < 414;
const isLargeScreen = width >= 414;

export const ResponsiveText: React.FC<ResponsiveTextProps> = ({
  children,
  variant = "body",
  weight = "regular",
  color,
  numberOfLines,
  primaryColor,
  accentColor,
  textColor,
  backgroundColor,
  style,
  className,
  ...props
}) => {
  const getFontSize = () => {
    switch (variant) {
      case "heading":
        return isSmallScreen ? 16 : isMediumScreen ? 18 : 20;
      case "subheading":
        return isSmallScreen ? 14 : isMediumScreen ? 16 : 18;
      case "body":
        return isSmallScreen ? 12 : 14;
      case "caption":
        return isSmallScreen ? 10 : 12;
      case "small":
        return isSmallScreen ? 8 : 10;
      default:
        return 12;
    }
  };

  const getFontWeight = () => {
    switch (weight) {
      case "bold":
        return "Poppins-Bold";
      case "medium":
        return "Poppins-Medium";
      case "regular":
      default:
        return "Poppins-Regular";
    }
  };

  const getLineHeight = () => {
    const fontSize = getFontSize();
    return fontSize * 1.4; // 1.4 line height ratio
  };

  // Determine the final color to use
  const getFinalColor = () => {
    if (color) return color;
    if (primaryColor) return primaryColor;
    if (accentColor) return accentColor;
    if (textColor) return textColor;
    return "#27272a"; // Default fallback
  };

  return (
    <Text
      style={[
        {
          fontSize: getFontSize(),
          lineHeight: getLineHeight(),
          fontFamily: getFontWeight(),
          color: getFinalColor(),
          backgroundColor: backgroundColor,
        },
        style,
      ]}
      numberOfLines={numberOfLines}
      {...props}
      className={className}
    >
      {children}
    </Text>
  );
};
