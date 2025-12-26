import React, { useRef, useState } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  Modal,
  Dimensions,
  TextInput,
} from "react-native";
import {
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { router } from "expo-router";
import { ResponsiveText } from "@/components/responsive-text";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import Dialog from "@/components/dialog";
import { Popover } from "@/components/popover";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const routes = [
  {
    code: "01K",
    name: "Lahug - Colon - Carbon Market",
    stops: "15 stops",
    distance: "12.5 km",
    color: "text-blue-600",
    bg: "bg-blue-50",
    fare: [
      { name: "Lahug Terminal", regular: 15 },
      { name: "JY Square Mall", regular: 17 },
      { name: "Cebu IT Park", regular: 19 },
      { name: "Fuente Osmeña", regular: 21 },
      { name: "USC South Campus", regular: 23 },
      { name: "Colon Street", regular: 25 },
      { name: "Carbon Public Market", regular: 27 },
      { name: "Pier 1", regular: 29 },
    ],
  },

  {
    code: "02B",
    name: "South Bus Terminal - Colon - Mabolo",
    stops: "18 stops",
    distance: "10.2 km",
    color: "text-green-600",
    bg: "bg-green-50",
    fare: [
      { name: "South Bus Terminal", regular: 15 },
      { name: "E Mall", regular: 17 },
      { name: "USC Main Campus", regular: 19 },
      { name: "Colon Street", regular: 21 },
      { name: "Osmeña Boulevard", regular: 23 },
      { name: "Cebu Business Park", regular: 25 },
      { name: "SM City Cebu", regular: 27 },
      { name: "Mabolo Church", regular: 29 },
    ],
  },

  {
    code: "03A",
    name: "Talamban - Colon - Carbon",
    stops: "20 stops",
    distance: "14.8 km",
    color: "text-red-600",
    bg: "bg-red-50",
    fare: [
      { name: "Talamban Terminal", regular: 15 },
      { name: "Banilad Town Center", regular: 17 },
      { name: "UC Banilad", regular: 19 },
      { name: "Cebu IT Park", regular: 21 },
      { name: "Fuente Osmeña", regular: 23 },
      { name: "Colon Street", regular: 25 },
      { name: "Carbon Market", regular: 27 },
      { name: "Pier 3", regular: 29 },
    ],
  },

  {
    code: "04H",
    name: "Lahug - Ayala - SM City Cebu",
    stops: "12 stops",
    distance: "8.6 km",
    color: "text-yellow-600",
    bg: "bg-yellow-50",
    fare: [
      { name: "Lahug Terminal", regular: 15 },
      { name: "Sugbo Mercado", regular: 17 },
      { name: "Cebu IT Park", regular: 19 },
      { name: "Ayala Center Cebu", regular: 21 },
      { name: "Cebu Business Park", regular: 23 },
      { name: "SM City Cebu", regular: 25 },
      { name: "North Reclamation Area", regular: 27 },
      { name: "Mabolo", regular: 29 },
    ],
  },

  {
    code: "06C",
    name: "Guadalupe - Colon - Pier",
    stops: "16 stops",
    distance: "11.3 km",
    color: "text-purple-600",
    bg: "bg-purple-50",
    fare: [
      { name: "Guadalupe Church", regular: 15 },
      { name: "V. Rama Avenue", regular: 17 },
      { name: "Fuente Osmeña", regular: 19 },
      { name: "Osmeña Boulevard", regular: 21 },
      { name: "Colon Street", regular: 23 },
      { name: "Carbon Market", regular: 25 },
      { name: "Pier 1", regular: 27 },
      { name: "Pier 2", regular: 29 },
    ],
  },

  {
    code: "10M",
    name: "Bulacao - Colon - Carbon Market",
    stops: "22 stops",
    distance: "15.9 km",
    color: "text-orange-600",
    bg: "bg-orange-50",
    fare: [
      { name: "Bulacao Terminal", regular: 15 },
      { name: "Pardo", regular: 17 },
      { name: "Basak San Nicolas", regular: 19 },
      { name: "E Mall", regular: 21 },
      { name: "USJR", regular: 23 },
      { name: "Colon Street", regular: 25 },
      { name: "Carbon Market", regular: 27 },
      { name: "Pier 3", regular: 29 },
    ],
  },

  {
    code: "12I",
    name: "Labangon - Colon - Pier",
    stops: "17 stops",
    distance: "9.7 km",
    color: "text-pink-600",
    bg: "bg-pink-50",
    fare: [
      { name: "Labangon Terminal", regular: 15 },
      { name: "Katipunan Street", regular: 17 },
      { name: "Guadalupe", regular: 19 },
      { name: "Fuente Osmeña", regular: 21 },
      { name: "Colon Street", regular: 23 },
      { name: "Carbon Market", regular: 25 },
      { name: "Pier 1", regular: 27 },
      { name: "Pier 4", regular: 29 },
    ],
  },

  {
    code: "13C",
    name: "Talamban - Ayala - Lahug",
    stops: "14 stops",
    distance: "10.1 km",
    color: "text-teal-600",
    bg: "bg-teal-50",
    fare: [
      { name: "Talamban Terminal", regular: 15 },
      { name: "Banilad", regular: 17 },
      { name: "BTC", regular: 19 },
      { name: "UC Banilad", regular: 21 },
      { name: "Cebu IT Park", regular: 23 },
      { name: "Ayala Center Cebu", regular: 25 },
      { name: "Lahug", regular: 27 },
      { name: "JY Square", regular: 29 },
    ],
  },

  {
    code: "17B",
    name: "Apas - IT Park - Carbon",
    stops: "13 stops",
    distance: "9.4 km",
    color: "text-indigo-600",
    bg: "bg-indigo-50",
    fare: [
      { name: "Apas Terminal", regular: 15 },
      { name: "Cebu IT Park", regular: 17 },
      { name: "Lahug", regular: 19 },
      { name: "Fuente Osmeña", regular: 21 },
      { name: "Osmeña Boulevard", regular: 23 },
      { name: "Colon Street", regular: 25 },
      { name: "Carbon Market", regular: 27 },
      { name: "Pier 1", regular: 29 },
    ],
  },

  {
    code: "21D",
    name: "Mambaling - Colon - SM Seaside",
    stops: "19 stops",
    distance: "13.6 km",
    color: "text-lime-600",
    bg: "bg-lime-50",
    fare: [
      { name: "Mambaling", regular: 15 },
      { name: "South Road Properties", regular: 17 },
      { name: "Il Corso", regular: 19 },
      { name: "SM Seaside City Cebu", regular: 21 },
      { name: "E Mall", regular: 23 },
      { name: "Colon Street", regular: 25 },
      { name: "Carbon Market", regular: 27 },
      { name: "Pier 1", regular: 29 },
    ],
  },
];

const discount = [
  {
    id: 1,
    title: "Students with valid school ID",
    icon: "school-outline",
    color: "#2563eb",
  },
  {
    id: 2,
    title: "Senior Citizens (60+ years old)",
    icon: "account-group-outline",
    color: "#16a34a",
  },
  {
    id: 3,
    title: "Persons with Disabilities (PWD)",
    icon: "wheelchair-accessibility",
    color: "#c026d3",
  },
];

export default function Fare() {
  const bottomSheetRef = useRef<BottomSheet>(null);
  const [isDialogVisible, setIsDialogVisible] = useState(false);
  const chevronRef = useRef<View>(null);
  const [anchor, setAnchor] = useState<any>(null);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedRoute, setSelectedRoute] = useState<any>(null);

  const openPopover = () => {
    chevronRef.current?.measureInWindow((x, y, width, height) => {
      setAnchor({
        x,
        y: y + height,
        width,
        height: 0,
      });
      setOpen(true);
    });
  };

  const isRushHour = () => {
    const currentHour = new Date().getHours();
    return (
      (currentHour >= 6 && currentHour < 9) ||
      (currentHour >= 16 && currentHour < 20)
    );
  };

  return (
    <GestureHandlerRootView className="flex-1 bg-white py-4">
      <ScrollView className="bg-white gap-y-4 flex-1">
        <View className="gap-y-4">
          <View className="py-4 relative items-center justify-center border-b border-gray-200 bg-white">
            <TouchableOpacity
              onPress={() => router.back()}
              activeOpacity={0.7}
              className="absolute left-4 w-10 h-10 items-center justify-center"
            >
              <FontAwesome6 name="chevron-left" size={18} color="#737373" />
            </TouchableOpacity>
            <ResponsiveText variant="subheading" weight="bold">
              Fare Guide
            </ResponsiveText>
          </View>

          <View className="px-6">
            <TouchableOpacity
              onPress={() => {
                setIsDialogVisible(true);
                openPopover();
              }}
              ref={chevronRef}
            >
              {selectedRoute ? (
                <View className="border border-gray-200 px-4 py-3 rounded-xl flex flex-row gap-4 items-center">
                  <View className="rounded-full bg-blue-400 p-3 flex items-center justify-center">
                    <FontAwesome6 name="car" size={16} color="#ffffff" />
                  </View>

                  <View className="flex-1">
                    <ResponsiveText variant="subheading" weight="bold">
                      {selectedRoute.code}
                    </ResponsiveText>
                    <ResponsiveText
                      variant="caption"
                      weight="regular"
                      style={{ marginTop: -2 }}
                    >
                      {selectedRoute.name}
                    </ResponsiveText>
                  </View>

                  <View className="items-center justify-center p-4">
                    <FontAwesome6
                      name={open ? "chevron-up" : "chevron-down"}
                      size={16}
                      color="#737373"
                    />
                  </View>
                </View>
              ) : (
                <View className="border border-gray-200 px-4 py-3 rounded-xl flex flex-row gap-4 items-center">
                  <View className="rounded-full bg-gray-200 p-3 flex items-center justify-center">
                    <FontAwesome6 name="car" size={16} color="#9ca3af" />
                  </View>

                  <View className="flex-1">
                    <ResponsiveText variant="subheading" weight="bold">
                      Select a route
                    </ResponsiveText>
                    <ResponsiveText
                      variant="caption"
                      weight="regular"
                      style={{ marginTop: -2 }}
                    >
                      Tap to choose a route
                    </ResponsiveText>
                  </View>

                  <View className="items-center justify-center p-4">
                    <FontAwesome6
                      name="chevron-down"
                      size={16}
                      color="#737373"
                    />
                  </View>
                </View>
              )}
            </TouchableOpacity>

            <Popover
              visible={open}
              anchor={anchor}
              onClose={() => setOpen(false)}
              width={Dimensions.get("window").width - 40}
            >
              <View className="p-4">
                <TextInput
                  value={query}
                  onChangeText={setQuery}
                  placeholder="Search route..."
                  className="border border-gray-300 rounded-full px-4 py-2 text-sm"
                />
              </View>

              <View className="border-b border-gray-100" />

              <ScrollView style={{ maxHeight: 270 }}>
                {routes.map((route) => (
                  <TouchableOpacity
                    key={route.code}
                    onPress={() => {
                      setSelectedRoute(route);
                      setOpen(false);
                    }}
                  >
                    <View className="flex flex-row p-4 justify-center items-center gap-4">
                      <View
                        className={`w-10 h-10 rounded-full flex items-center justify-center ${route.bg}`}
                      >
                        <Text
                          className={`font-sans-bold text-md ${route.color}`}
                        >
                          {route.code}
                        </Text>
                      </View>

                      <View className="flex-1">
                        <ResponsiveText variant="body" weight="medium">
                          Route {route.code}
                        </ResponsiveText>
                        <ResponsiveText
                          variant="caption"
                          weight="regular"
                          style={{ marginTop: -2 }}
                        >
                          {route.name}
                        </ResponsiveText>
                      </View>
                    </View>
                    <View className="border-b border-gray-50" />
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </Popover>
          </View>

          {isRushHour() && (
            <View className="px-6">
              <View className="bg-yellow-100 p-3 rounded-xl">
                <ResponsiveText
                  variant="caption"
                  weight="medium"
                  style={{ color: "#713f12" }}
                >
                  🚦 Rush Hour Alert: Traffic may be heavy. Expect delays!
                </ResponsiveText>
              </View>
            </View>
          )}

          <View className="px-6">
            <View className="border border-gray-200 p-4 rounded-xl flex flex-col gap-2 items-start">
              <View className="flex flex-row gap-2">
                <ResponsiveText variant="body" weight="medium">
                  Discount Eligibility
                </ResponsiveText>
              </View>

              {discount.map((item) => (
                <View key={item.id} className="flex flex-row gap-3">
                  <View>
                    <MaterialCommunityIcons
                      name={item.icon as any}
                      size={18}
                      color={item.color}
                    />
                  </View>
                  <ResponsiveText variant="caption" weight="regular">
                    {item.title}
                  </ResponsiveText>
                </View>
              ))}
            </View>
          </View>

          <View className="px-6">
            <View className="border border-gray-200 rounded-xl">
              <View className="flex items-start bg-gray-50 rounded-t-xl py-3 px-4 flex-row justify-between">
                <ResponsiveText variant="subheading" weight="bold">
                  Fare Rate
                </ResponsiveText>
                <View className="rounded-full bg-blue-100 py-1 px-3">
                  <ResponsiveText
                    variant="caption"
                    weight="medium"
                    style={{ color: "#1e3a8a" }}
                  >
                    minimum fare: ₱15
                  </ResponsiveText>
                </View>
              </View>

              <View>
                <View className="flex-row border-b border-gray-200">
                  <View className="flex-[2] p-3">
                    <Text className="font-medium">Destination</Text>
                  </View>

                  <View className="flex-1 bg-blue-50 p-3">
                    <Text className="text-center font-medium">Regular</Text>
                  </View>

                  <View className="flex-1 bg-yellow-50 p-3">
                    <Text className="text-center font-medium">Discount</Text>
                  </View>
                </View>

                {selectedRoute ? (
                  selectedRoute.fare.map((stop, index) => {
                    const discounted = (stop.regular * 0.8).toFixed(1);

                    return (
                      <View
                        key={`${selectedRoute.code}-${index}`}
                        className="flex-row border-b border-gray-100"
                      >
                        <View className="flex-[2] p-3">
                          <Text>{stop.name}</Text>
                        </View>

                        <View className="flex-1 bg-blue-50 p-3">
                          <Text className="text-center font-semibold">
                            ₱{stop.regular}
                          </Text>
                        </View>

                        <View className="flex-1 bg-yellow-50 p-3">
                          <Text className="text-center font-semibold">
                            ₱{discounted}
                          </Text>
                        </View>
                      </View>
                    );
                  })
                ) : (
                  <View className="p-4 items-center">
                    <ResponsiveText
                      variant="body"
                      weight="medium"
                      style={{ color: "#737373" }}
                    >
                      Please select a route to view fare rates.
                    </ResponsiveText>
                  </View>
                )}
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </GestureHandlerRootView>
  );
}
