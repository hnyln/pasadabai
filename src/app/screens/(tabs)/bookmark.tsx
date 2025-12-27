import React, { useRef } from "react";
import { TouchableOpacity, View, Text } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import BottomSheet, { BottomSheetScrollView } from "@gorhom/bottom-sheet";
import HomeScreen from ".";
import { router } from "expo-router";
import { ResponsiveText } from "@/components/responsive-text";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import { Feather } from "@expo/vector-icons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default function Bookmark() {
  const bottomSheetRef = useRef<BottomSheet>(null);

  const recent = [
    { code: "01K", name: "Lahug - Colon - Carbon Market", distance: "12.5 km" },
    { code: "02K", name: "Lahug - Carbon Market - Colon", distance: "12.5 km" },
    { code: "03K", name: "Colon - Lahug - Carbon Market", distance: "12.5 km" },
    { code: "04K", name: "Colon - Carbon Market - Lahug", distance: "12.5 km" },
    { code: "05K", name: "Carbon Market - Lahug - Colon", distance: "12.5 km" },
    { code: "06K", name: "Lahug - Colon - Carbon Market", distance: "12.5 km" },
    { code: "07K", name: "Lahug - Carbon Market - Colon", distance: "12.5 km" },
    { code: "08K", name: "Colon - Lahug - Carbon Market", distance: "12.5 km" },
    { code: "09K", name: "Colon - Carbon Market - Lahug", distance: "12.5 km" },
    { code: "10K", name: "Carbon Market - Lahug - Colon", distance: "12.5 km" },
  ];

  const saved = [
    { code: "01K", name: "Lahug - Colon - Carbon Market", distance: "12.5 km" },
    { code: "02K", name: "Lahug - Carbon Market - Colon", distance: "12.5 km" },
    { code: "03K", name: "Colon - Lahug - Carbon Market", distance: "12.5 km" },
    { code: "04K", name: "Colon - Carbon Market - Lahug", distance: "12.5 km" },
    { code: "05K", name: "Carbon Market - Lahug - Colon", distance: "12.5 km" },
  ];

  const colors = [
    { bg: "bg-green-50", text: "text-green-600" },
    { bg: "bg-yellow-50", text: "text-yellow-600" },
    { bg: "bg-red-50", text: "text-red-600" },
    { bg: "bg-blue-50", text: "text-blue-600" },
    { bg: "bg-purple-50", text: "text-purple-600" },
    { bg: "bg-pink-50", text: "text-pink-600" },
  ];

  return (
    <GestureHandlerRootView className="flex-1 bg-white">
      <HomeScreen />

      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={["10%", "50%"]}
        index={2}
        enableOverDrag={false}
        topInset={90}
      >
        <View className="p-4 py-2">
          <ResponsiveText variant="heading" weight="bold" className="text-2xl">
            Bookmarks
          </ResponsiveText>
        </View>

        <BottomSheetScrollView nestedScrollEnabled={true}>
          <View className="px-6">
            <View className="flex-row justify-evenly items-center">
              <TouchableOpacity
                className="flex-row items-center gap-4 px-4 py-6"
                onPress={() => router.push("/screens/(pages)/bookmarks/address")}
              >
                <Feather name="home" size={18} />
                <View>
                  <ResponsiveText weight="bold">Home</ResponsiveText>
                  <ResponsiveText variant="caption" weight="regular">
                    Set Home
                  </ResponsiveText>
                </View>
              </TouchableOpacity>

              <View className="w-px h-8 bg-gray-200" />

              <TouchableOpacity
                className="flex-row items-center gap-4 px-4 py-6"
                onPress={() => router.push("/screens/(pages)/bookmarks/address")}
              >
                <MaterialIcons name="work-outline" size={18} />
                <View>
                  <ResponsiveText weight="bold">Work</ResponsiveText>
                  <ResponsiveText variant="caption" weight="regular">
                    Set Work
                  </ResponsiveText>
                </View>
              </TouchableOpacity>
            </View>

            <View className="border-b border-gray-200" />

            <TouchableOpacity
              className="flex-row items-center gap-4 px-4 py-6"
              onPress={() => router.push("/screens/(pages)/new-address")}
            >
              <FontAwesome6 name="plus" size={16} />
              <ResponsiveText weight="medium">
                Save your favorite place
              </ResponsiveText>
            </TouchableOpacity>

            <View className="border-b border-gray-200" />
          </View>

          {/* recent routes */}
          <View className="p-6 bg-white">
            <ResponsiveText variant="subheading" weight="bold" className="py-4">
              Your Recent Routes
            </ResponsiveText>
            <ResponsiveText variant="body" weight="medium" className="py-2">
              From your Routes history and saves
            </ResponsiveText>

            {recent.slice(0, 3).map((item) => {
              const randomColor =
                colors[Math.floor(Math.random() * colors.length)];
              return (
                <TouchableOpacity
                  key={item.code}
                  className="flex-row items-center gap-4 pt-6"
                >
                  <View
                    className={`w-12 h-12 rounded-full flex items-center justify-center ${randomColor.bg}`}
                  >
                    <Text
                      className={`font-sans-bold text-lg ${randomColor.text}`}
                    >
                      {item.code}
                    </Text>
                  </View>
                  <View className="flex-1 flex-row items-center justify-between">
                    <View>
                      <ResponsiveText weight="bold">{item.name}</ResponsiveText>
                      <ResponsiveText weight="regular">
                        Viewed. {item.distance}
                      </ResponsiveText>
                    </View>
                    <TouchableOpacity className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-50">
                      <MaterialIcons
                        name="bookmark-border"
                        size={24}
                        color="black"
                      />
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
              );
            })}
            {recent.length > 3 && (
              <TouchableOpacity
                className="flex-row items-center justify-center p-4 rounded-full bg-blue-500 mt-4"
                onPress={() =>
                  router.push({
                    pathname: "/screens/(pages)/bookmarks/recent",
                    params: {
                      recent: JSON.stringify(recent),
                      color: JSON.stringify(colors),
                    },
                  })
                }
              >
                <ResponsiveText variant="body" weight="bold" color="white">
                  Show all
                </ResponsiveText>
              </TouchableOpacity>
            )}
          </View>

          {/* bookmarks */}
          <View className="p-6 -mt-4">
            <ResponsiveText variant="subheading" weight="bold" className="py-4">
              Your Bookmarks
            </ResponsiveText>
            {saved.map((item) => {
              const randomColor =
                colors[Math.floor(Math.random() * colors.length)];
              return (
                <TouchableOpacity
                  key={item.code}
                  className="flex-row items-center gap-4 pt-6"
                >
                  <View
                    className={`w-12 h-12 rounded-full flex items-center justify-center ${randomColor.bg}`}
                  >
                    <Text
                      className={`font-sans-bold text-lg ${randomColor.text}`}
                    >
                      {item.code}
                    </Text>
                  </View>
                  <View className="flex-1 flex-row items-center justify-between">
                    <View>
                      <ResponsiveText weight="bold">{item.name}</ResponsiveText>
                      <ResponsiveText weight="regular">
                        Viewed. {item.distance}
                      </ResponsiveText>
                    </View>
                    <TouchableOpacity className="w-12 h-12 rounded-full flex items-center justify-center bg-gray-50">
                      <MaterialIcons name="bookmark" size={24} color="black" />
                    </TouchableOpacity>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </BottomSheetScrollView>
      </BottomSheet>
    </GestureHandlerRootView>
  );
}
