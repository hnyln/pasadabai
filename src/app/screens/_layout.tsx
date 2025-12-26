import "../../global.css";
import { Slot, useRouter } from "expo-router";
import { useFonts } from "expo-font";
import { StatusBar } from "react-native";
import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function Layout() {
  const router = useRouter();
  const [fontsLoaded] = useFonts({
    "Poppins-Regular": require("./../../assets/fonts/Poppins-Regular.ttf"),
    "Poppins-Bold": require("./../../assets/fonts/Poppins-Bold.ttf"),
    "Poppins-Medium": require("./../../assets/fonts/Poppins-Medium.ttf"),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync().catch((error) => {
        console.warn("Splash screen hide error:", error);
      });
      console.log("fonts loaded");
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    console.log("fonts not loaded");
    return null;
  }

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#121212" />
      <Slot />
    </>
  );
}
