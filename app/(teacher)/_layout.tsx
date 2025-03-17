import { Redirect } from "expo-router";
import { Drawer } from "expo-router/drawer";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { DrawerContent, DrawerTrigger } from "~/components/ui/drawer";
import { TeacherScreens as Screens } from "~/lib/constants/screens";
import { userDataStore } from "~/store/userData";

const UserRoot = () => {
  const { user } = userDataStore();

  if (!user.role || user.role !== "teacher") {
    return <Redirect href="/login" />;
  }

  return (
    <GestureHandlerRootView className="flex-1">
      <Drawer
        drawerContent={DrawerContent}
        screenOptions={{
          headerLeft: DrawerTrigger,
        }}
      >
        <Drawer.Screen name="(tabs)" options={{ headerShown: false }} />
        {Screens.map((d, index) => (
          <Drawer.Screen
            key={index}
            name={d.ref}
            options={{ title: d.title }}
          />
        ))}
      </Drawer>
    </GestureHandlerRootView>
  );
};

export default UserRoot;
