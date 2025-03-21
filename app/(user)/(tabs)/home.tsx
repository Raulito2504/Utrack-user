import { View, ScrollView, TouchableOpacity, Image } from "react-native";
import { Text } from "~/components/ui/text";
import { router } from "expo-router";
import { Card, CardContent, CardTitle, CardHeader } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { Progress } from "~/components/ui/progress";
import { Bell, Book, Calendar, Clock, GraduationCap, FileText, BriefcaseBusiness } from "lucide-react-native";
import { userDataStore } from "~/store/userData";

export default function Index() {
  const { user } = userDataStore();

  // Datos de ejemplo
  const upcomingClasses = [
    { id: 1, name: "Matemáticas", time: "10:00 - 11:30", room: "A-201", teacher: "Dr. Martínez" },
    { id: 2, name: "Programación", time: "12:00 - 13:30", room: "Lab-102", teacher: "Ing. López" },
  ];

  const pendingAssignments = [
    { id: 1, subject: "Programación", title: "Proyecto Final", dueDate: "20/03/2025", progress: 30 },
    { id: 2, subject: "Matemáticas", title: "Ejercicios Cap. 5", dueDate: "18/03/2025", progress: 75 },
    { id: 3, subject: "Base de Datos", title: "Diagrama ER", dueDate: "22/03/2025", progress: 0 },
  ];

  const notifications = [
    { id: 1, title: "Cambio de horario", message: "La clase de Programación cambia al aula B-305", time: "Hoy, 08:15" },
    { id: 2, title: "Tarea calificada", message: "Tu tarea de Matemáticas ha sido calificada", time: "Ayer, 16:30" },
  ];

  const news = [
    { id: 1, title: "Fechas de exámenes finales", date: "Publicado: 15/03/2025" },
    { id: 2, title: "Conferencia de Inteligencia Artificial", date: "Publicado: 14/03/2025" },
    { id: 3, title: "Mantenimiento de instalaciones", date: "Publicado: 13/03/2025" },
  ];

  return (
    <ScrollView className="flex-1 bg-background">
      {/* Perfil del usuario */}
      <View className="flex flex-row items-center space-x-4 px-4 py-6">
        <View className="bg-primary/10 rounded-full overflow-hidden">
          {user.profilePicture ? (
            <Image 
              source={{ uri: user.profilePicture }} 
              className="h-16 w-16 rounded-full" 
            />
          ) : (
            <View className="h-16 w-16 rounded-full bg-primary/20 items-center justify-center">
              <Text className="text-2xl font-bold text-primary">
                {user.name ? user.name.charAt(0) : "U"}
              </Text>
            </View>
          )}
        </View>
        <View className="flex-1">
          <Text className="text-2xl font-bold">Bienvenido {user.name}</Text>
          <Text className="text-muted-foreground">Matrícula: {user.studentID}</Text>
          <Text className="text-muted-foreground">Ingeniería en Desarrollo de Software</Text>
        </View>
      </View>

      {/* Noticias del momento */}
      <View className="px-4 pb-4">
        <Text className="text-lg font-semibold mb-2">Noticias del momento</Text>
        <Card className="mb-3">
          <CardContent className="p-0">
            {news.map((item, index) => (
              <TouchableOpacity key={item.id} className={`p-4 ${index < news.length - 1 ? 'border-b border-border' : ''}`}>
                <Text className="font-semibold">{item.title}</Text>
                <Text className="text-xs text-muted-foreground mt-1">{item.date}</Text>
              </TouchableOpacity>
            ))}
          </CardContent>
        </Card>
      </View>

      {/* Resumen de clases */}
      <View className="px-4 pb-4">
        <View className="flex-row justify-between items-center mb-2">
          <Text className="text-lg font-semibold">Próximas clases</Text>
          <TouchableOpacity onPress={() => router.push("/(user)/(tabs)/classes")}>
            <Text className="text-primary">Ver todas</Text>
          </TouchableOpacity>
        </View>
        {upcomingClasses.map((classItem) => (
          <Card key={classItem.id} className="mb-3">
            <CardContent className="flex-row items-center py-3">
              <View className="bg-primary/10 rounded-full p-2 mr-3">
                <GraduationCap size={24} color="#000" />
              </View>
              <View className="flex-1">
                <Text className="font-semibold">{classItem.name}</Text>
                <View className="flex-row items-center mt-1">
                  <Clock size={14} className="mr-1 text-muted-foreground" />
                  <Text className="text-sm text-muted-foreground mr-2">{classItem.time}</Text>
                  <Calendar size={14} className="mr-1 text-muted-foreground" />
                  <Text className="text-sm text-muted-foreground">{classItem.room}</Text>
                </View>
              </View>
            </CardContent>
          </Card>
        ))}
      </View>

      {/* Tareas pendientes */}
      <View className="px-4 pb-4">
        <View className="flex-row justify-between items-center mb-2">
          <Text className="text-lg font-semibold">Tareas pendientes</Text>
          <TouchableOpacity onPress={() => router.push("/(user)/(tabs)/assignments")}>
            <Text className="text-primary">Ver todas</Text>
          </TouchableOpacity>
        </View>
        {pendingAssignments.map((assignment) => (
          <Card key={assignment.id} className="mb-3">
            <CardContent className="py-3">
              <View className="flex-row items-center">
                <View className="bg-secondary rounded-full p-2 mr-3">
                  <Book size={22} color="#000" />
                </View>
                <View className="flex-1">
                  <Text className="font-semibold">{assignment.title}</Text>
                  <Text className="text-sm text-muted-foreground">{assignment.subject}</Text>
                </View>
                <View>
                  <Text className="text-sm text-right">Entrega</Text>
                  <Text className="text-sm font-semibold">{assignment.dueDate}</Text>
                </View>
              </View>
              <View className="mt-2">
                <Progress value={assignment.progress} className="h-2" />
                <Text className="text-xs text-right mt-1">{assignment.progress}% completado</Text>
              </View>
            </CardContent>
          </Card>
        ))}
      </View>

      {/* Notificaciones */}
      <View className="px-4 pb-6">
        <View className="flex-row justify-between items-center mb-2">
          <Text className="text-lg font-semibold">Notificaciones recientes</Text>
          <TouchableOpacity onPress={() => router.push("/(user)/(tabs)/notifications")}>
            <Text className="text-primary">Ver todas</Text>
          </TouchableOpacity>
        </View>
        {notifications.map((notification) => (
          <Card key={notification.id} className="mb-3">
            <CardContent className="flex-row items-center py-3">
              <View className="bg-accent rounded-full p-2 mr-3">
                <Bell size={22} color="#000" />
              </View>
              <View className="flex-1">
                <Text className="font-semibold">{notification.title}</Text>
                <Text className="text-sm">{notification.message}</Text>
                <Text className="text-xs text-muted-foreground mt-1">{notification.time}</Text>
              </View>
            </CardContent>
          </Card>
        ))}
      </View>
    </ScrollView>
  );
}