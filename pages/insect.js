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

const screenWidth = Dimensions.get("window").width;
const screenHeigth = Dimensions.get("window").height;

export default function Insects({ navigation }) {
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
        {insects.map((el, i) => (
          <Pressable
            onPress={() =>
              navigation.navigate("Detail", {
                type: el.type,
                index: 1,
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
const styles = StyleSheet.create({
  image: {
    // marginLeft: "2.25%",
    width: screenWidth * 0.4,
    height: screenHeigth * 0.2,
    resizeMode: "contain",
    borderRadius: 20,
  },
});
