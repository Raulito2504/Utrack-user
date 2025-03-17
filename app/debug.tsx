import { router } from "expo-router";
import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Text } from "~/components/ui/text";
import { userDataStore } from "~/store/userData";

const Debug = () => {
  const { setUser, clearUser } = userDataStore();

  const createFakeUserData = (role: "user" | "teacher" | "admin") => {
    setUser({
      name: "Navi",
      lastName: "Vani",
      email: "23393189@utcancun.edu.mx",
      password: "12345678",
      token: "TOKENDEACCESOAPI",
      profilePicture:
        "https://i.pinimg.com/736x/70/70/2c/70702c8b426ae6c3332de9de7ad31bf9.jpg",
      studentID: 23393189,
      role,
    });
    alert("creado perfil de " + role);
  };

  const deleteFakeData = () => {
    clearUser();
    alert("borrado");
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>OPCIONES DEBUG</CardTitle>
        <CardDescription>BORRAR ESTE ARCHIVO EN VERSION FINAL</CardDescription>
      </CardHeader>
      <CardContent>
        <Button onPress={() => createFakeUserData("user")}>
          <Text>Crear fakeData de Alumno</Text>
        </Button>
        <Button onPress={() => createFakeUserData("teacher")}>
          <Text>Crear fakeData de Maestro</Text>
        </Button>
        <Button onPress={() => createFakeUserData("admin")}>
          <Text>Crear fakeData de Admin</Text>
        </Button>
        <Button onPress={deleteFakeData}>
          <Text>Borrar fakeData</Text>
        </Button>
        <Button onPress={() => router.replace("/home")}>
          <Text>Regresar al inicio</Text>
        </Button>
      </CardContent>
    </Card>
  );
};

export default Debug;
