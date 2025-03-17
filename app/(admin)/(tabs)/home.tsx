import {View} from "react-native";
import {Text} from "~/components/ui/text";
import { router } from "expo-router";

export default function Index() {
  return (
    <View className="flex flex-1 items-center justify-center">
      <Text onPress={()=>router.replace("/(user)/home/dummypage")}>Pantalla home</Text>
    </View>
  );
}
