import React, { ReactNode } from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Modal,
} from "react-native";

type PopoverPosition = {
  x: number;
  y: number;
  width: number;
  height: number;
};

type PopoverProps = {
  visible: boolean;
  anchor: PopoverPosition | null;
  onClose: () => void;
  children: ReactNode;
  width?: number;
  offsetY?: number;
};

const SCREEN_WIDTH = Dimensions.get("window").width;

export function Popover({
  visible,
  anchor,
  onClose,
  children,
  width = 100,
  offsetY = 8,
}: PopoverProps) {
  if (!visible || !anchor) return null;

  // Keep popover inside screen
  const left = Math.min(
    Math.max(anchor.x + anchor.width / 2 - width / 2, 8),
    SCREEN_WIDTH - width
  );

  return (
    <Modal
      visible={visible}
      transparent
      animationType="none"
      onRequestClose={onClose}
    >
      {/* Backdrop */}
      <TouchableOpacity
        activeOpacity={1}
        onPress={onClose}
        style={StyleSheet.absoluteFill}
      />

      {/* Popover */}
      <View
        style={[
          styles.popover,
          {
            top: anchor.y + anchor.height + offsetY,
            left,
            width,
          },
        ]}
      >
        {children}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  popover: {
    position: "absolute",
    backgroundColor: "white",
    borderRadius: 12,
    // padding: 12,
    elevation: 4, // Android shadow
    shadowColor: "#000", // iOS shadow
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
  },
});
