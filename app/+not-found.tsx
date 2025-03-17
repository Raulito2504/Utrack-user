import { Redirect } from "expo-router";
import { userDataStore } from "~/store/userData";

export default function Index() {
  const { user } = userDataStore();

  if (!user.role) {
    return <Redirect href="/login" />;
  } else {
    const redirectRoute = `/(${user.role})/(tabs)/home`;
    return <Redirect href={redirectRoute} />;
  }
}
