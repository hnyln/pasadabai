import { useState, useEffect } from "react"
import { View, Text, TouchableOpacity, Modal, Animated } from "react-native"
import { Ionicons } from "@expo/vector-icons"

interface DialogProps {
  visible: boolean
  title: string
  message: string
  buttons: Array<{
    text: string
    onPress: () => void
    style?: "default" | "cancel" | "destructive"
  }>
  onClose: () => void
  icon?: keyof typeof Ionicons.glyphMap
  iconColor?: string
}

export default function Dialog({
  visible,
  title,
  message,
  buttons,
  onClose,
  icon = "checkmark-circle",
  iconColor = "#22c55e",
}: DialogProps) {
  const [scaleAnim] = useState(new Animated.Value(0))
  const [opacityAnim] = useState(new Animated.Value(0))

  useEffect(() => {
    if (visible) {
      Animated.parallel([
        Animated.spring(scaleAnim, {
          toValue: 1,
          useNativeDriver: true,
          tension: 100,
          friction: 8,
        }),
        Animated.timing(opacityAnim, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
        }),
      ]).start()
    } else {
      Animated.parallel([
        Animated.timing(scaleAnim, {
          toValue: 0,
          duration: 150,
          useNativeDriver: true,
        }),
        Animated.timing(opacityAnim, {
          toValue: 0,
          duration: 150,
          useNativeDriver: true,
        }),
      ]).start()
    }
  }, [visible])

  if (!visible) return null

  return (
    <Modal transparent visible={visible} animationType="none">
      <View className="flex-1 items-center justify-center bg-black/50 px-6">
        <Animated.View
          style={{
            transform: [{ scale: scaleAnim }],
            opacity: opacityAnim,
          }}
          className="bg-white rounded-3xl p-6 shadow-2xl max-w-sm w-full"
        >
          {/* Header */}
          <View className="items-center mb-4">
            <View className="w-16 h-16 bg-primary/10 rounded-full items-center justify-center mb-3">
              <Ionicons name={icon} size={32} color={iconColor} />
            </View>
            <Text className="text-xl font-bold text-gray-900 text-center">{title}</Text>
          </View>

          {/* Message */}
          <Text className="text-gray-600 text-center leading-6 mb-6">{message}</Text>

          {/* Buttons */}
          <View className="space-y-3">
            {buttons.map((button, index) => (
              <TouchableOpacity
                key={index}
                onPress={button.onPress}
                className={`py-4 rounded-2xl ${
                  button.style === "cancel"
                    ? "bg-gray-100"
                    : button.style === "destructive"
                      ? "bg-red-500"
                      : "bg-primary"
                }`}
                activeOpacity={0.8}
              >
                <Text
                  className={`text-center font-semibold text-lg ${
                    button.style === "cancel" ? "text-gray-700" : "text-white"
                  }`}
                >
                  {button.text}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </Animated.View>
      </View>
    </Modal>
  )
}