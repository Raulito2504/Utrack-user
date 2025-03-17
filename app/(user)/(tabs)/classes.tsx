import { View, ScrollView, TouchableOpacity } from "react-native";
import { Text } from "~/components/ui/text";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { Button } from "~/components/ui/button";

import { Calendar, Clock, GraduationCap, MapPin, User } from "lucide-react-native";
import { useState } from "react";

export default function Index() {
  const [activeTab, setActiveTab] = useState<'today' | 'all'>('today');

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
      credits: 8
    },
    {
      id: 2,
      name: "Programación",
      schedule: "Martes y Jueves 12:00 - 13:30",
      room: "Lab-102",
      teacher: "Ing. López",
      credits: 10
    },
    {
      id: 3,
      name: "Base de Datos",
      schedule: "Lunes y Viernes 15:00 - 16:30",
      room: "B-305",
      teacher: "Dra. García",
      credits: 8
    },
    {
      id: 4,
      name: "Sistemas Operativos",
      schedule: "Miércoles y Viernes 13:00 - 14:30",
      room: "Lab-201",
      teacher: "Dr. Rodríguez",
      credits: 8
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
            Todas mis clases
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
        ) : (
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
                  <View className="flex-row items-center">
                    <User size={16} className="mr-1 text-muted-foreground" />
                    <Text className="text-sm">{classItem.teacher}</Text>
                  </View>
                  <View className="flex-row justify-between items-center mt-3">
                    <Text className="text-sm font-semibold">Créditos: {classItem.credits}</Text>
                    <Button size="sm" variant="outline">
                      <Text>Ver detalles</Text>
                    </Button>
                  </View>
                </CardContent>
              </Card>
            ))}
          </View>
        )}
      </ScrollView>
    </View>
  );
}