import { DrawerActions } from "@react-navigation/native";
import { router, useNavigation, useSegments } from "expo-router";
import { ArrowLeft, ChevronRight } from "lucide-react-native";
import { ScrollView, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { FullAvatar } from "~/components/ui/avatar";
import { Button } from "~/components/ui/button";
import { Text } from "~/components/ui/text";
import { AdminDrawer, TeacherDrawer, UserDrawer } from "~/lib/constants/drawer";
import { userDataStore } from "~/store/userData";

export const DrawerContent = () => {
  const { user, clearUser } = userDataStore();
  const { top, bottom } = useSafeAreaInsets();
  const drawerData =
    user.role == "user"
      ? UserDrawer
      : user.role == "teacher"
        ? TeacherDrawer
        : AdminDrawer;

  const logoutHandler = () => {
    clearUser();
    router.replace("/login");
  };

  return (
    <View
      className="flex-1 flex-col items-center justify-between px-4"
      style={{ paddingTop: top + 20, paddingBottom: bottom + 20 }}
    >
      <ScrollView className="flex-1 w-full flex-col gap-2">
        {drawerData.map((d) => (
          <>
            <View className="flex flex-col w-full gap-2">
              <Text className="font-bold text-xs pl-5">{d.name}</Text>
              <View>
                {d.content.map((data) => (
                  <Button
                    variant="ghost"
                    onPress={() => router.replace(data.url)}
                    className="flex flex-row w-full h-11 justify-between"
                  >
                    <View className="flex flex-row items-center justify-start h-full gap-2">
                      <data.Icon />
                      <View className="flex flex-col items-start justify-center h-full">
                        <Text>{data.name}</Text>
                        {data.description && (
                          <Text className="text-xs text-muted-foreground">
                            {data.description}
                          </Text>
                        )}
                      </View>
                    </View>
                    {data.showRedirectButton && <ChevronRight />}
                  </Button>
                ))}
              </View>
            </View>
            <View className="w-full h-[1px] bg-border my-2 mx-3" />
          </>
        ))}
      </ScrollView>
      <View className="w-full flex-col gap-4">
        <Button
          onPress={logoutHandler}
          variant="outline"
          style={{ height: 60 }}
          className="flex flex-row w-full gap-2 items-center justify-start"
        >
          <FullAvatar />
          <View>
            <Text className="font-bold">
              {user.name} {user.lastName}
            </Text>
            <Text className="text-xs font-thin">{user.email}</Text>
          </View>
        </Button>
      </View>
    </View>
  );
};

export const DrawerTrigger = () => {
  const navigation = useNavigation();
  const url = useSegments();
  const showBackButton = navigation.canGoBack() && !url.includes("(tabs)");

  const pressHandler = () => {
    if (showBackButton) {
      navigation.goBack();
    } else {
      navigation.dispatch(DrawerActions.openDrawer());
    }
  };

  return (
    <Button
      size="icon"
      variant="ghost"
      onPress={pressHandler}
      className="ml-4 mr-2"
    >
      {showBackButton ? <ArrowLeft /> : <FullAvatar />}
    </Button>
  );
};
