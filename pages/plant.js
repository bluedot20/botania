import {
  TextInput,
  StyleSheet,
  Text,
  ScrollView,
  Image,
  View,
  Alert,
  Pressable,
  ActivityIndicator,
} from "react-native";
import { Button } from "@rneui/themed";
import { Dimensions } from "react-native";
import { plants } from "../assets/data";
import { insects } from "../assets/data";
import { fish } from "../assets/data";
import { MaterialIcons } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Detail from "./Detail";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
const Stack = createNativeStackNavigator();

const screenWidth = Dimensions.get("window").width;
const screenHeigth = Dimensions.get("window").height;

function PlantImages({ navigation }) {
  return (
    <ScrollView>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 20,
          marginBottom: "15%",
        }}
      >
        {plants.map((el, i) => (
          <Pressable
            onPress={() =>
              navigation.navigate("Detail", {
                type: el.type,
                index: i + 1,
              })
            }
          >
            {/* <Image style={styles.image} source={el.src}></Image> */}
            <Image style={styles.image} source={el.src}></Image>
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
}

export default function Plant() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="PlantImages"
        component={PlantImages}
        options={{
          title: "보타니아 가든",
          headerTitleAlign: "center",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        // options={{  }}
        options={({ navigation }) => ({
          title: "정원식물",
          headerTitleAlign: "center",
          drawerItemStyle: { height: 0 },
          headerTitleAlign: "center",
          headerLeft: () => (
            <MaterialIcons
              style={{ marginLeft: wp("0%") }}
              onPress={() => navigation.goBack()}
              name="arrow-back"
              size={24}
              color="black"
            />
          ),
        })}
      />
    </Stack.Navigator>
  );
}
const styles = StyleSheet.create({
  image: {
    // marginLeft: "2.25%",
    width: screenWidth * 0.4,
    height: screenHeigth * 0.2,
    resizeMode: "contain",
    borderRadius: 20,
  },
});
