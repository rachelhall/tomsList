import AsyncStorage from "@react-native-community/async-storage";

export async function getData() {
  try {
    const JSONdata = await AsyncStorage.getItem("@allHouses");
    const allHouses = await JSON.parse(JSONdata);
    return allHouses;
  } catch (e) {
    // error reading value
    console.log(e);
  }
}
