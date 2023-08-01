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
  Dimensions,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
const screenWidth = Dimensions.get("window").width;
const screenHeigth = Dimensions.get("window").height;
import { useContext } from "react";
import { LanguageContext } from "../Context/languageContext";

export default function About() {
  const languageContext = useContext(LanguageContext);
  return (
    <ScrollView>
      <View
        style={{
          marginTop: hp("0%"),
          marginHorizontal: wp("3%"),
          display: "flex",
        }}
      >
        <Image
          style={styles.image}
          source={require("../assets/homeImage/about.jpeg")}
        />
        <Text style={styles.body}>
          {languageContext.isKor
            ? "외도 보타니아는 거제도에 위치한 바다 정원이에요. 한국의 남쪽에 있는 외도는 날씨가 따뜻하기 때문에 외국의 열대 식물들도 잘 자랄 수 있는 환경이죠."
            : "Oedo Botania is a botanical garden island in Geoje. As Oedo is located in the southernmost part of the Korean Peninsula, warmer climates have allowed many exotic plants to grow."}
        </Text>
        <Text style={styles.body}>
          {languageContext.isKor
            ? "지금의 모습을 갖추기 전, 1970년에는 사실 외도가 감귤과 돼지 농장으로 쓰였다고 합니다. 하지만 바다와 매우 가까워 태풍 때문에 많은 피해가 있었고, 그때부터 우리는 외도를 식물원으로 가꾸어 한려해상국립공원으로 탄생시킬 수 있었답니다."
            : "In 1970, when Oedo was first purchased by our family, we used the island for tangerine and pig farming. But after massive damages due to the typhoon, we changed the island into a botanical garden, which led Oedo to be enlisted in Hallyeohaesang National Park."}
        </Text>
        <Text style={styles.body}>
          {languageContext.isKor
            ? "외도가 거제도의 평범한 섬에서 다양한 동식물들이 살아가는 아름다운 곳으로 변화하는 과정에서 많은 시간과 노력이 필요했답니다. 이러한 노력 끝에 외도 보타니아는 많은 사람들이 사랑해 주는 지금의 모습이 되었어요!"
            : "From a nondescript island to a botanical garden where the various fauna and flora live, Oedo Botania has required a lot of time and effort."}
        </Text>
        <Text style={styles.body}>
          {languageContext.isKor
            ? "오늘 이곳을 찾아준 어린이 친구들도 외도 보타니아의 자연과 동식물들을 마음껏 감상하고 행복한 시간 보내기를 바래요!"
            : "Today I hope everyone visiting our island enjoys pleasures from the nature of Oedo Botania."}
        </Text>
        <Image
          style={[
            { height: screenHeigth * 0.3, width: screenWidth * 0.95 },
            { marginTop: hp("2%"), marginBottom: hp("2%") },
          ]}
          source={require("../assets/homeImage/map2.jpeg")}
        />
        <Text style={[styles.yanoljaBold, styles.title]}>유의 사항</Text>
        <Text style={[styles.yanoljaBold, styles.title]}>Contact Info</Text>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  image: {
    width: screenWidth * 0.95,
    height: screenHeigth * 0.35,
    resizeMode: "contain",
  },
  title: {
    marginTop: hp("2%"),
    marginVertical: 5,
    marginBottom: 15,
    fontWeight: "700",
    fontSize: 32,
  },
  body: {
    fontWeight: "400",
    fontSize: 18,
    marginBottom: hp("1.5%"),
    color: "#505050",
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
