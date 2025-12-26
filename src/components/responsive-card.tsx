import React from 'react';
import { View, ViewProps, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { Dimensions } from 'react-native';

interface ResponsiveCardProps extends TouchableOpacityProps {
  children: React.ReactNode;
  variant?: 'default' | 'compact' | 'spacious';
  padding?: 'none' | 'small' | 'medium' | 'large';
  margin?: 'none' | 'small' | 'medium' | 'large';
  className?: string;
}

const { width } = Dimensions.get('window');
const isSmallScreen = width < 375;
const isMediumScreen = width >= 375 && width < 414;

export const ResponsiveCard: React.FC<ResponsiveCardProps> = ({
  children,
  variant = 'default',
  padding = 'medium',
  margin = 'none',
  className = '',
  style,
  ...props
}) => {
  const getPadding = () => {
    switch (padding) {
      case 'none':
        return 0;
      case 'small':
        return isSmallScreen ? 8 : 12;
      case 'medium':
        return isSmallScreen ? 12 : 16;
      case 'large':
        return isSmallScreen ? 16 : 20;
      default:
        return isSmallScreen ? 12 : 16;
    }
  };

  const getMargin = () => {
    switch (margin) {
      case 'none':
        return 0;
      case 'small':
        return isSmallScreen ? 4 : 6;
      case 'medium':
        return isSmallScreen ? 6 : 8;
      case 'large':
        return isSmallScreen ? 8 : 12;
      default:
        return 0;
    }
  };

  const getCardStyle = () => {
    switch (variant) {
      case 'compact':
        return {
          minHeight: isSmallScreen ? 80 : 100,
          // Remove maxHeight to allow content to expand
        };
      case 'spacious':
        return {
          minHeight: isSmallScreen ? 140 : 160,
          // Remove maxHeight to allow content to expand
        };
      case 'default':
      default:
        return {
          minHeight: isSmallScreen ? 100 : 120,
          // Remove maxHeight to allow content to expand
        };
    }
  };

  return (
    <TouchableOpacity
      style={[
        {
          padding: getPadding(),
          margin: getMargin(),
          ...getCardStyle(),
        },
        style,
      ]}
      className={`bg-white rounded-xl shadow-sm border border-neutral-100 ${className}`}
      activeOpacity={0.7}
      {...props}
    >
      {children}
    </TouchableOpacity>
  );
};