import React from 'react';
import { View, ViewProps, ScrollView, ScrollViewProps } from 'react-native';
import { Dimensions } from 'react-native';

interface ResponsiveContainerProps extends ViewProps {
  children: React.ReactNode;
  padding?: 'none' | 'small' | 'medium' | 'large';
  margin?: 'none' | 'small' | 'medium' | 'large';
  scrollable?: boolean;
  scrollViewProps?: ScrollViewProps;
  className?: string;
}

const { width } = Dimensions.get('window');
const isSmallScreen = width < 375;
const isMediumScreen = width >= 375 && width < 414;

export const ResponsiveContainer: React.FC<ResponsiveContainerProps> = ({
  children,
  padding = 'medium',
  margin = 'none',
  scrollable = false,
  scrollViewProps = {},
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
        return isSmallScreen ? 16 : 24;
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

  const containerStyle = {
    padding: getPadding(),
    margin: getMargin(),
  };

  if (scrollable) {
    return (
      <ScrollView
        style={[containerStyle, style]}
        className={className}
        showsVerticalScrollIndicator={false}
        {...scrollViewProps}
        {...props}
      >
        {children}
      </ScrollView>
    );
  }

  return (
    <View
      style={[containerStyle, style]}
      className={className}
      {...props}
    >
      {children}
    </View>
  );
};