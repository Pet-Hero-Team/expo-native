import "dotenv/config";

export default {
  expo: {
    name: "expo-native",
    slug: "expo-native",
    scheme: "expo-native",
    version: "1.0.0",
    orientation: "portrait",
    userInterfaceStyle: "light",
    newArchEnabled: true,
    plugins: ["expo-router"],
    splash: {
      image: "./assets/splash-icon.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    ios: {
      supportsTablet: true,
      bundleIdentifier: "com.devscarycat.exponative",
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
      package: "com.devscarycat.exponative",
    },
    web: {
      favicon: "./assets/favicon.png",
    },
    // extra: {
    //   DEEPL_API_KEY: process.env.DEEPL_API_KEY,
    //   HUGGING_FACE_API_KEY: process.env.HUGGING_FACE_API_KEY,
    // },
  },
};
