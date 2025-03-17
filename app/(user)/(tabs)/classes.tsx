import { View, ScrollView, TouchableOpacity } from "react-native";
import { Text } from "~/components/ui/text";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { Calendar, Clock, GraduationCap, MapPin, User, FileText, BookOpen } from "lucide-react-native";
import { useState } from "react";

export default function Classes() {
  const [activeTab, setActiveTab] = useState<'today' | 'all' | 'schedule'>('today');

  // Datos de ejemplo
  const todayClasses = [
    {
      id: 1,
      name: "Matemáticas",
      time: "10:00 - 11:30",
      room: "A-201",
      teacher: "Dr. Martínez",
      status: "Próxima"
    },
    {
      id: 2,
      name: "Programación",
      time: "12:00 - 13:30",
      room: "Lab-102",
      teacher: "Ing. López",
      status: "En curso"
    },
    {
      id: 3,
      name: "Base de Datos",
      time: "15:00 - 16:30",
      room: "B-305",
      teacher: "Dra. García",
      status: "Finalizada"
    },
  ];

  const allClasses = [
    {
      id: 1,
      name: "Matemáticas",
      schedule: "Lunes y Miércoles 10:00 - 11:30",
      room: "A-201",
      teacher: "Dr. Martínez",
      credits: 8,
      materials: 12,
      assignments: 8
    },
    {
      id: 2,
      name: "Programación",
      schedule: "Martes y Jueves 12:00 - 13:30",
      room: "Lab-102",
      teacher: "Ing. López",
      credits: 10,
      materials: 16,
      assignments: 12
    },
    {
      id: 3,
      name: "Base de Datos",
      schedule: "Lunes y Viernes 15:00 - 16:30",
      room: "B-305",
      teacher: "Dra. García",
      credits: 8,
      materials: 10,
      assignments: 6
    },
    {
      id: 4,
      name: "Sistemas Operativos",
      schedule: "Miércoles y Viernes 13:00 - 14:30",
      room: "Lab-201",
      teacher: "Dr. Rodríguez",
      credits: 8,
      materials: 14,
      assignments: 9
    },
  ];

  // Horario semanal
  const weekSchedule = [
    {
      day: "Lunes",
      classes: [
        { id: 101, name: "Matemáticas", time: "10:00 - 11:30", room: "A-201" },
        { id: 102, name: "Base de Datos", time: "15:00 - 16:30", room: "B-305" }
      ]
    },
    {
      day: "Martes",
      classes: [
        { id: 103, name: "Programación", time: "12:00 - 13:30", room: "Lab-102" }
      ]
    },
    {
      day: "Miércoles",
      classes: [
        { id: 104, name: "Matemáticas", time: "10:00 - 11:30", room: "A-201" },
        { id: 105, name: "Sistemas Operativos", time: "13:00 - 14:30", room: "Lab-201" }
      ]
    },
    {
      day: "Jueves",
      classes: [
        { id: 106, name: "Programación", time: "12:00 - 13:30", room: "Lab-102" }
      ]
    },
    {
      day: "Viernes",
      classes: [
        { id: 107, name: "Base de Datos", time: "15:00 - 16:30", room: "B-305" },
        { id: 108, name: "Sistemas Operativos", time: "13:00 - 14:30", room: "Lab-201" }
      ]
    },
  ];

  const renderStatusBadge = (status: string) => {
    let bgColor = "bg-muted";
    let textColor = "text-muted-foreground";

    if (status === "En curso") {
      bgColor = "bg-primary";
      textColor = "text-primary-foreground";
    } else if (status === "Próxima") {
      bgColor = "bg-secondary";
      textColor = "text-secondary-foreground";
    }

    return (
      <View className={`px-2 py-1 rounded-full ${bgColor}`}>
        <Text className={`text-xs ${textColor}`}>{status}</Text>
      </View>
    );
  };

  return (
    <View className="flex-1 bg-background">
      {/* Selector de tabs */}
      <View className="flex-row p-4">
        <TouchableOpacity
          className={`flex-1 py-2 ${activeTab === 'today' ? 'border-b-2 border-primary' : ''}`}
          onPress={() => setActiveTab('today')}
        >
          <Text className={`text-center font-semibold ${activeTab === 'today' ? 'text-primary' : 'text-muted-foreground'}`}>
            Hoy
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          className={`flex-1 py-2 ${activeTab === 'all' ? 'border-b-2 border-primary' : ''}`}
          onPress={() => setActiveTab('all')}
        >
          <Text className={`text-center font-semibold ${activeTab === 'all' ? 'text-primary' : 'text-muted-foreground'}`}>
            Mis materias
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          className={`flex-1 py-2 ${activeTab === 'schedule' ? 'border-b-2 border-primary' : ''}`}
          onPress={() => setActiveTab('schedule')}
        >
          <Text className={`text-center font-semibold ${activeTab === 'schedule' ? 'text-primary' : 'text-muted-foreground'}`}>
            Horario
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView className="flex-1">
        {activeTab === 'today' ? (
          <View className="px-4 pb-6">
            <Text className="text-lg font-semibold mb-2">Domingo, 16 de marzo</Text>
            {todayClasses.map((classItem) => (
              <Card key={classItem.id} className="mb-3">
                <CardContent className="py-3">
                  <View className="flex-row items-center">
                    <View className="bg-primary/10 rounded-full p-2 mr-3">
                      <GraduationCap size={24} color="#000" />
                    </View>
                    <View className="flex-1">
                      <Text className="font-semibold">{classItem.name}</Text>
                      <View className="flex-row items-center mt-1">
                        <Clock size={14} className="mr-1 text-muted-foreground" />
                        <Text className="text-sm text-muted-foreground mr-2">{classItem.time}</Text>
                        <MapPin size={14} className="mr-1 text-muted-foreground" />
                        <Text className="text-sm text-muted-foreground">{classItem.room}</Text>
                      </View>
                      <View className="flex-row items-center mt-1">
                        <User size={14} className="mr-1 text-muted-foreground" />
                        <Text className="text-sm text-muted-foreground">{classItem.teacher}</Text>
                      </View>
                    </View>
                    {renderStatusBadge(classItem.status)}
                  </View>
                </CardContent>
              </Card>
            ))}
          </View>
        ) : activeTab === 'all' ? (
          <View className="px-4 pb-6">
            {allClasses.map((classItem) => (
              <Card key={classItem.id} className="mb-3">
                <CardHeader className="pb-2">
                  <CardTitle>{classItem.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <View className="flex-row items-center mb-1">
                    <Calendar size={16} className="mr-1 text-muted-foreground" />
                    <Text className="text-sm">{classItem.schedule}</Text>
                  </View>
                  <View className="flex-row items-center mb-1">
                    <MapPin size={16} className="mr-1 text-muted-foreground" />
                    <Text className="text-sm">{classItem.room}</Text>
                  </View>
                  <View className="flex-row items-center mb-3">
                    <User size={16} className="mr-1 text-muted-foreground" />
                    <Text className="text-sm">{classItem.teacher}</Text>
                  </View>

                  <View className="flex-row mt-2 mb-3">
                    <View className="flex-1 items-center py-2 bg-secondary/30 rounded-md mx-1">
                      <BookOpen size={18} />
                      <Text className="text-xs mt-1">Créditos</Text>
                      <Text className="font-semibold">{classItem.credits}</Text>
                    </View>
                    <View className="flex-1 items-center py-2 bg-secondary/30 rounded-md mx-1">
                      <FileText size={18} />
                      <Text className="text-xs mt-1">Materiales</Text>
                      <Text className="font-semibold">{classItem.materials}</Text>
                    </View>
                    <View className="flex-1 items-center py-2 bg-secondary/30 rounded-md mx-1">
                      <GraduationCap size={18} />
                      <Text className="text-xs mt-1">Tareas</Text>
                      <Text className="font-semibold">{classItem.assignments}</Text>
                    </View>
                  </View>

                  <View className="flex-row justify-end items-center">
                    <Button size="sm" variant="outline">
                      <Text>Ver detalles</Text>
                    </Button>
                  </View>
                </CardContent>
              </Card>
            ))}
          </View>
        ) : (
          <View className="px-4 pb-6">
            {weekSchedule.map((day) => (
              <View key={day.day} className="mb-4">
                <Text className="text-lg font-semibold mb-2">{day.day}</Text>
                {day.classes.length > 0 ? (
                  day.classes.map((classItem) => (
                    <Card key={classItem.id} className="mb-2">
                      <CardContent className="py-3">
                        <View className="flex-row items-center">
                          <View className="bg-primary/10 rounded-full p-2 mr-3">
                            <GraduationCap size={22} color="#000" />
                          </View>
                          <View className="flex-1">
                            <Text className="font-semibold">{classItem.name}</Text>
                            <View className="flex-row items-center mt-1">
                              <Clock size={14} className="mr-1 text-muted-foreground" />
                              <Text className="text-sm text-muted-foreground mr-2">{classItem.time}</Text>
                              <MapPin size={14} className="mr-1 text-muted-foreground" />
                              <Text className="text-sm text-muted-foreground">{classItem.room}</Text>
                            </View>
                          </View>
                        </View>
                      </CardContent>
                    </Card>
                  ))
                ) : (
                  <Text className="text-muted-foreground italic">No hay clases este día</Text>
                )}
              </View>
            ))}
          </View>
        )}
      </ScrollView>
    </View>
  );
}