import { Redirect, useRouter } from "expo-router";
import { useState } from "react";
import { View } from "react-native";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Text } from "~/components/ui/text";
import { userDataStore } from "~/store/userData";

const Login = () => {
  const { user } = userDataStore();
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  if (user.role) {
    const redirectRoute = `/(${user.role})/home`;
    return <Redirect href={redirectRoute} />;
  }

  return (
    <View className="flex flex-1 items-center justify-center bg-secondary/30">
      <Card>
        <CardHeader>
          <CardTitle className="text-center text-foreground">UTrack</CardTitle>
          <CardDescription className="text-center">
            Inicia sesión con tu correo institucional.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-2">
          <Text className="font-bold text-sm">
            Correo electronico o Matricula
          </Text>
          <Input
            placeholder="ej. 23456789"
            keyboardType="email-address"
            autoCorrect={false}
            value={email}
            onChangeText={setEmail}
          />
          <Text className="font-bold text-sm">Contraseña</Text>
          <Input
            value={pass}
            placeholder="* * * * *"
            secureTextEntry
            autoComplete="current-password"
            autoCorrect={false}
            onChangeText={setPass}
          />
        </CardContent>
        <CardFooter>
          <Button className="w-full">
            <Text className="w-full text-center font-bold text-sm">
              Iniciar Sesión
            </Text>
          </Button>
        </CardFooter>
      </Card>
      <Button variant="link" onPress={() => router.replace("/debug")}>
        <Text>Debug</Text>
      </Button>
    </View>
  );
};

export default Login;
