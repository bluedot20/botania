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
export default function Detail({ route }) {
  let index = route.params.index;
  let type = route.params.type;
  return (
    <>
      <Text>{index}</Text>
      <Text>{type}</Text>
    </>
  );
}
