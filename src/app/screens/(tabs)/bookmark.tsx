import React, { useRef } from "react";
import { Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import HomeScreen from ".";

export default function Bookmark() {
  const bottomSheetRef = useRef<BottomSheet>(null);

  return (
    <GestureHandlerRootView className="flex-1 bg-white">
      {/* main content */}
      <HomeScreen />

      {/* drawer */}
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={["10%", "50%", "90%"]}
        index={3}
      >
        <BottomSheetView className="flex-1">
          <View className="p-4">
            <Text className="font-sans-bold text-2xl">Bookmarks</Text>
          </View>
        </BottomSheetView>
      </BottomSheet>
    </GestureHandlerRootView>
  );
}
