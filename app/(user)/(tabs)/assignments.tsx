import { View, ScrollView, TouchableOpacity } from "react-native";
import { Text } from "~/components/ui/text";
import { Card, CardContent } from "~/components/ui/card";
import { Button } from "~/components/ui/button";
import { Progress } from "~/components/ui/progress";
import { Book, Calendar, Clock, ExternalLink, CheckCircle } from "lucide-react-native";
import { useState } from "react";

export default function Assignments() {
  const [filter, setFilter] = useState<'all' | 'pending' | 'completed'>('pending');
  
  // Datos de ejemplo
  const assignments = [
    { 
      id: 1, 
      subject: "Programación", 
      title: "Proyecto Final", 
      dueDate: "20/03/2025", 
      progress: 30,
      description: "Desarrollar una aplicación móvil utilizando React Native con funcionalidades básicas.",
      status: "pending",
      estimatedTime: "8 horas"
    },
    { 
      id: 2, 
      subject: "Matemáticas", 
      title: "Ejercicios Cap. 5", 
      dueDate: "18/03/2025", 
      progress: 75,
      description: "Resolver todos los ejercicios del capítulo 5 sobre ecuaciones diferenciales.",
      status: "pending",
      estimatedTime: "3 horas"
    },
    { 
      id: 3, 
      subject: "Base de Datos", 
      title: "Diagrama ER", 
      dueDate: "22/03/2025", 
      progress: 0,
      description: "Crear un diagrama entidad-relación para el sistema de gestión de biblioteca.",
      status: "pending",
      estimatedTime: "4 horas"
    },
    { 
      id: 4, 
      subject: "Inglés Técnico", 
      title: "Ensayo Técnico", 
      dueDate: "15/03/2025", 
      progress: 100,
      description: "Escribir un ensayo técnico de 1000 palabras sobre una tecnología emergente.",
      status: "completed",
      estimatedTime: "5 horas"
    },
    { 
      id: 5, 
      subject: "Sistemas Operativos", 
      title: "Reporte de Laboratorio", 
      dueDate: "10/03/2025", 
      progress: 100,
      description: "Documentar los resultados del laboratorio sobre gestión de procesos en Linux.",
      status: "completed",
      estimatedTime: "2 horas"
    },
  ];

  const filteredAssignments = assignments.filter(assignment => {
    if (filter === 'all') return true;
    if (filter === 'pending') return assignment.status === 'pending';
    if (filter === 'completed') return assignment.status === 'completed';
    return true;
  });

  // Función para actualizar el progreso de una tarea
  const updateProgress = (id: number, newProgress: number) => {
    // En una aplicación real, aquí actualizarías el estado o llamarías a una API
    console.log(`Actualizando progreso de tarea ${id} a ${newProgress}%`);
  };

  return (
    <View className="flex-1 bg-background">
      {/* Filtro de tareas */}
      <View className="flex-row p-4 border-b border-border">
        <Button 
          variant={filter === 'pending' ? "default" : "outline"} 
          className="flex-1 mr-2" 
          onPress={() => setFilter('pending')}
        >
          <Text className={filter === 'pending' ? "text-primary-foreground" : "text-foreground"}>Pendientes</Text>
        </Button>
        <Button 
          variant={filter === 'completed' ? "default" : "outline"} 
          className="flex-1 mr-2" 
          onPress={() => setFilter('completed')}
        >
          <Text className={filter === 'completed' ? "text-primary-foreground" : "text-foreground"}>Completadas</Text>
        </Button>
        <Button 
          variant={filter === 'all' ? "default" : "outline"} 
          className="flex-1" 
          onPress={() => setFilter('all')}
        >
          <Text className={filter === 'all' ? "text-primary-foreground" : "text-foreground"}>Todas</Text>
        </Button>
      </View>

      <ScrollView className="flex-1 p-4">
        {filteredAssignments.length === 0 ? (
          <View className="flex-1 items-center justify-center py-10">
            <Text className="text-muted-foreground text-center">No hay tareas {filter === 'pending' ? 'pendientes' : filter === 'completed' ? 'completadas' : ''}</Text>
          </View>
        ) : (
          filteredAssignments.map((assignment) => (
            <Card key={assignment.id} className="mb-4">
              <CardContent className="py-4">
                <View className="flex-row items-center mb-2">
                  <View className="bg-secondary rounded-full p-2 mr-3">
                    <Book size={22} color="#000" />
                  </View>
                  <View className="flex-1">
                    <Text className="font-semibold text-lg">{assignment.title}</Text>
                    <Text className="text-sm text-muted-foreground">{assignment.subject}</Text>
                  </View>
                  {assignment.status === 'completed' && (
                    <CheckCircle size={22} color="#10B981" />
                  )}
                </View>
                
                <Text className="text-sm mb-3">{assignment.description}</Text>
                
                <View className="flex-row items-center justify-between mb-2">
                  <View className="flex-row items-center">
                    <Calendar size={16} className="mr-1 text-muted-foreground" />
                    <Text className="text-sm">Entrega: {assignment.dueDate}</Text>
                  </View>
                  <View className="flex-row items-center">
                    <Clock size={16} className="mr-1 text-muted-foreground" />
                    <Text className="text-sm">Tiempo estimado: {assignment.estimatedTime}</Text>
                  </View>
                </View>
                
                <View className="mt-2">
                  <Progress value={assignment.progress} className="h-2" />
                  <View className="flex-row justify-between mt-1">
                    <Text className="text-xs text-muted-foreground">Progreso</Text>
                    <Text className="text-xs font-medium">{assignment.progress}%</Text>
                  </View>
                </View>
                
                {assignment.status === 'pending' && (
                  <View className="flex-row mt-4">
                    <Button 
                      variant="outline" 
                      className="flex-1 mr-2"
                      onPress={() => updateProgress(assignment.id, Math.min(assignment.progress + 25, 100))}
                    >
                      <Text>Actualizar progreso</Text>
                    </Button>
                    <Button className="flex-1">
                      <Text className="text-primary-foreground">Ver detalles</Text>
                    </Button>
                  </View>
                )}
                
                {assignment.status === 'completed' && (
                  <Button 
                    variant="outline" 
                    className="mt-4 w-full"
                    onPress={() => {}}
                  >
                    <ExternalLink size={16} className="mr-2" />
                    <Text>Ver calificación</Text>
                  </Button>
                )}
              </CardContent>
            </Card>
          ))
        )}
      </ScrollView>
    </View>
  );
}