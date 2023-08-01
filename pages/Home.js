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
import * as React from "react";
import Carousel from "react-native-snap-carousel";
import { useContext } from "react";
import { LanguageContext } from "../Context/languageContext";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const screenWidth = Dimensions.get("window").width;
const screenHeigth = Dimensions.get("window").height;
export const SLIDER_WIDTH = Dimensions.get("window").width + 80;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.7);
const width = Dimensions.get("window").width;
const images = [
  require("../assets/homeImage/1.jpeg"),
  require("../assets/homeImage/2.jpeg"),
  require("../assets/homeImage/3.jpeg"),
  require("../assets/homeImage/4.jpeg"),
];
_renderItem = ({ item, index }) => {
  return (
    <View style={styles.container} key={index}>
      <Image source={images[index]} style={styles.image} />
      {/* <Text style={styles.header}>{item.title}</Text>
      <Text style={styles.body}>{item.body}</Text> */}
    </View>
  );
};

export default function Home({ navigation }) {
  const languageContext = useContext(LanguageContext);
  return (
    <>
      <View style={{}}>
        <Carousel
          layout="default"
          data={images}
          renderItem={this._renderItem}
          sliderWidth={screenWidth}
          itemWidth={screenWidth}
          autoplay={true}
        />
      </View>
      <View
        style={{
          marginTop: hp("3%"),
          marginHorizontal: wp("3%"),
          display: "flex",
        }}
      >
        <ScrollView>
          {/* <View
            style={{
              marginTop: "5%",
              marginBottom: "10%",
              justifyContent: "space-around",
            }}
          >
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
          </View> */}

          <Text style={styles.body}>
            {languageContext.isKor
              ? "청명한 하늘과 푸릇한 식물이 아름답게 조화를 이루는 외도 보타니아에 오신 여러분 환영합니다! "
              : "Welcome to Oedo Botania, where the clear sky and lush plants beautifully harmonize! "}
          </Text>
          <View style={{ display: "flex", flexDirection: "row" }}>
            {/* <Text style={styles.body}> */}
            {languageContext.isKor ? (
              <Text style={styles.body}>
                <Text style={styles.yanoljaBold}>
                  벅스라이프 with 보타니아{" "}
                </Text>
                는 이곳 외도 보타니아에서 관찰할 수 있는 다양한 곤충, 식물,
                바다생물을 여러분에게 소개하기 위해 만들어졌답니다. 아름다운
                남국의 파라다이스인 이곳에서 자연 친구들과 함께 즐거운 추억
                만들길 바래요!
              </Text>
            ) : (
              <Text style={styles.body}>
                <Text style={{ fontWeight: 700 }}>BugsLife with Botania </Text>
                was created to introduce you to the various insects, plants, and
                marine creatures that can be observed here in Oedo Botania. We
                hope you make delightful memories with the natural companions in
                this beautiful southern paradise.
              </Text>
            )}
            {/* </Text> */}
          </View>
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    borderRadius: 8,
    width: screenWidth,
    // paddingBottom: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
  image: {
    width: screenWidth,
    height: screenHeigth * 0.4,
  },
  header: {
    color: "#222",
    fontSize: 28,
    fontWeight: "bold",
    paddingLeft: 20,
    paddingTop: 20,
  },
  // body: {
  //   // fontFamily: "Arial",
  //   fontWeight: "600",
  //   fontSize: 18,
  //   marginBottom: hp("1.5%"),
  //   color: "#505050",
  // },
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
    fontSize: 26,
  },
});
