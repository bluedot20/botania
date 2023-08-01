import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Pressable,
  Switch,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import About from "./pages/About";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import Plant from "./pages/plant";
import Insects from "./pages/insect";
import Fish from "./pages/fish";
import { MaterialIcons } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import "react-native-gesture-handler";
import "react-native-reanimated";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import React, { useState, useEffect } from "react";
import CountryFlag from "react-native-country-flag";
import { useContext } from "react";
import { LanguageContext } from "./Context/languageContext";
import * as Font from "expo-font";

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

function MyDrawer() {
  const [isKor, setIsKor] = useState(true);
  const toggleSwitch = () => setIsKor((previousState) => !previousState);

  return (
    <LanguageContext.Provider value={{ isKor, setIsKor }}>
      <Drawer.Navigator
        initialRouteName="Home"
        drawerContent={(props) => {
          return (
            <>
              <View
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  flexDirection: "row",
                  alignItems: "center",
                  marginRight: wp("2%"),
                  marginVertical: hp("1%"),
                }}
              >
                <Switch
                  style={{ marginRight: wp("1%") }}
                  onValueChange={toggleSwitch}
                  thumbColor={isKor ? "#E34234" : "blue"}
                  trackColor={{ true: "#E2DFD2", false: "black" }}
                  value={isKor}
                />
                {/* {isKor ? <Text>한국어</Text> : <Text>English</Text>} */}
                {isKor ? (
                  <CountryFlag
                    // style={{ : 10 }}
                    isoCode="KR"
                    size={30}
                  />
                ) : (
                  <CountryFlag isoCode="US" size={30} />
                )}
              </View>
              {/* <Text style={{ marginVertical: hp("2%") }}>asdasd</Text> */}
              <DrawerContentScrollView {...props}>
                <DrawerItemList {...props} />
              </DrawerContentScrollView>
            </>
          );
        }}
      >
        {/* <Text>asasd</Text> */}
        <Drawer.Screen
          name={isKor ? "벅스라이프 with 보타니아" : "BugsLife with Botania"}
          component={Home}
          options={({ navigation }) => ({
            drawerLabel: isKor ? "홈" : "Home",
            title: isKor ? "벅스라이프 with 보타니아" : "BugsLife with Botania",
            headerTitleAlign: "center",
            headerRight: () => (
              <MaterialIcons
                style={{ marginRight: "20%" }}
                onPress={() => navigation.navigate("About")}
                name="info-outline"
                size={24}
                color="black"
              />
            ),
          })}
        />
        <Drawer.Screen
          name={
            isKor
              ? "보타니아에서 관찰할 수 있는 정원식물"
              : "Garden Plants in Botania"
          }
          component={Plant}
        />
        <Drawer.Screen
          name={
            isKor ? "보타니아에서 관찰할 수 있는 곤충" : "Insects in Botania"
          }
          component={Insects}
        />
        <Drawer.Screen
          name={
            isKor
              ? "보타니아에서 관찰할 수 있는 바다생물"
              : "Sea Creatures in Botania"
          }
          component={Fish}
        />
        <Drawer.Screen
          name="About"
          component={About}
          options={({ navigation }) => ({
            title: isKor ? "보타니아 가든" : "Bontania Garden",
            headerTitleAlign: "center",
            drawerItemStyle: { height: 0 },
            headerTitleAlign: "center",
            headerLeft: () => (
              <MaterialIcons
                style={{ marginLeft: wp("2%") }}
                onPress={() => navigation.goBack()}
                name="arrow-back"
                size={24}
                color="black"
              />
            ),
          })}
        />
      </Drawer.Navigator>
    </LanguageContext.Provider>
  );
}

function MyTab() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{ title: "Detail", headerTitleAlign: "center" }}
      />
      <Stack.Screen
        name="About"
        component={About}
        options={{ title: "보타니아 가든", headerTitleAlign: "center" }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  useEffect(() => {
    // Load custom fonts
    Font.loadAsync({
      "YanoljaYache-Regular": require("./assets/fonts/YanoljaYache-Regular.otf"),
      "YanoljaYache-Bold": require("./assets/fonts/YanoljaYache-Bold.otf"),
    });
  }, []);
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer>
        <MyDrawer />
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  yanoljaReg: {
    fontFamily: "YanoljaYache-Regular",
    fontSize: 20,
  },
  yanoljaBold: {
    fontFamily: "YanoljaYache-Bold",
    fontSize: 22,
  },
});
