import { View, ScrollView, TouchableOpacity, Image, TextInput } from "react-native";
import { Text } from "~/components/ui/text";
import { Card, CardContent } from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { Search, MessageCircle, Users, User, Clock, Send, Plus } from "lucide-react-native";
import { useState } from "react";
import { userDataStore } from "~/store/userData";

export default function Chats() {
  const [activeTab, setActiveTab] = useState<'recents' | 'groups' | 'contacts'>('recents');
  const [searchQuery, setSearchQuery] = useState('');
  const { user } = userDataStore();

  // Datos de ejemplo para conversaciones recientes
  const recentChats = [
    {
      id: 1,
      name: "Dr. Martínez",
      lastMessage: "¿Entregaron la tarea del tema 5?",
      time: "10:30",
      unread: 2,
      avatar: null,
      isTeacher: true
    },
    {
      id: 2,
      name: "Grupo Programación",
      lastMessage: "¿Alguien ya resolvió el ejercicio 3?",
      time: "09:15",
      unread: 0,
      avatar: null,
      isGroup: true
    },
    {
      id: 3,
      name: "Ana López",
      lastMessage: "Te comparto mis notas de la clase",
      time: "Ayer",
      unread: 0,
      avatar: "https://i.pravatar.cc/150?img=1"
    },
    {
      id: 4,
      name: "Juan Pérez",
      lastMessage: "Gracias por la ayuda",
      time: "Ayer",
      unread: 0,
      avatar: "https://i.pravatar.cc/150?img=3"
    },
    {
      id: 5,
      name: "Dra. García",
      lastMessage: "La tarea se entrega el viernes",
      time: "Lunes",
      unread: 0,
      avatar: null,
      isTeacher: true
    }
  ];

  // Datos de ejemplo para grupos
  const groups = [
    {
      id: 101,
      name: "Grupo Programación",
      members: 15,
      lastActive: "Hoy"
    },
    {
      id: 102,
      name: "Matemáticas Avanzadas",
      members: 8,
      lastActive: "Ayer"
    },
    {
      id: 103,
      name: "Proyecto Final",
      members: 5,
      lastActive: "Lunes"
    }
  ];

  // Datos de ejemplo para contactos
  const contacts = [
    {
      id: 201,
      name: "Ana López",
      status: "En línea",
      avatar: "https://i.pravatar.cc/150?img=1"
    },
    {
      id: 202,
      name: "Juan Pérez",
      status: "Hace 5 min",
      avatar: "https://i.pravatar.cc/150?img=3"
    },
    {
      id: 203,
      name: "Dr. Martínez",
      status: "En línea",
      avatar: null,
      isTeacher: true
    },
    {
      id: 204,
      name: "Dra. García",
      status: "Hace 30 min",
      avatar: null,
      isTeacher: true
    }
  ];

  // Filtrar chats según la búsqueda
  const filteredRecentChats = recentChats.filter(chat =>
    chat.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredGroups = groups.filter(group =>
    group.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Renderizar avatar
  const renderAvatar = (item: any) => {
    if (item.avatar) {
      return <Image source={{ uri: item.avatar }} style={{ width: 50, height: 50, borderRadius: 25 }} />;
    } else if (item.isGroup) {
      return (
        <View style={{ width: 50, height: 50, borderRadius: 25, backgroundColor: '#4F46E5', justifyContent: 'center', alignItems: 'center' }}>
          <Users size={24} color="white" />
        </View>
      );
    } else if (item.isTeacher) {
      return (
        <View style={{ width: 50, height: 50, borderRadius: 25, backgroundColor: '#10B981', justifyContent: 'center', alignItems: 'center' }}>
          <User size={24} color="white" />
        </View>
      );
    } else {
      return (
        <View style={{ width: 50, height: 50, borderRadius: 25, backgroundColor: '#6366F1', justifyContent: 'center', alignItems: 'center' }}>
          <User size={24} color="white" />
        </View>
      );
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#F9FAFB' }}>
      {/* Header */}
      <View style={{ padding: 16, backgroundColor: '#FFFFFF', borderBottomWidth: 1, borderBottomColor: '#E5E7EB' }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 16 }}>Mensajes</Text>

        {/* Search bar */}
        <View style={{ flexDirection: 'row', alignItems: 'center', backgroundColor: '#F3F4F6', borderRadius: 8, paddingHorizontal: 12 }}>
          <Search size={20} color="#6B7280" />
          <TextInput
            style={{ flex: 1, paddingVertical: 10, paddingHorizontal: 8, fontSize: 16 }}
            placeholder="Buscar conversaciones..."
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>

        {/* Tabs */}
        <View style={{ flexDirection: 'row', marginTop: 16 }}>
          <TouchableOpacity
            style={{
              flex: 1,
              alignItems: 'center',
              paddingVertical: 8,
              borderBottomWidth: 2,
              borderBottomColor: activeTab === 'recents' ? '#4F46E5' : 'transparent'
            }}
            onPress={() => setActiveTab('recents')}
          >
            <Clock size={20} color={activeTab === 'recents' ? '#4F46E5' : '#6B7280'} />
            <Text style={{ marginTop: 4, color: activeTab === 'recents' ? '#4F46E5' : '#6B7280' }}>Recientes</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              flex: 1,
              alignItems: 'center',
              paddingVertical: 8,
              borderBottomWidth: 2,
              borderBottomColor: activeTab === 'groups' ? '#4F46E5' : 'transparent'
            }}
            onPress={() => setActiveTab('groups')}
          >
            <Users size={20} color={activeTab === 'groups' ? '#4F46E5' : '#6B7280'} />
            <Text style={{ marginTop: 4, color: activeTab === 'groups' ? '#4F46E5' : '#6B7280' }}>Grupos</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              flex: 1,
              alignItems: 'center',
              paddingVertical: 8,
              borderBottomWidth: 2,
              borderBottomColor: activeTab === 'contacts' ? '#4F46E5' : 'transparent'
            }}
            onPress={() => setActiveTab('contacts')}
          >
            <User size={20} color={activeTab === 'contacts' ? '#4F46E5' : '#6B7280'} />
            <Text style={{ marginTop: 4, color: activeTab === 'contacts' ? '#4F46E5' : '#6B7280' }}>Contactos</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Content */}
      <ScrollView style={{ flex: 1 }}>
        {activeTab === 'recents' && (
          <View style={{ padding: 16 }}>
            {filteredRecentChats.map(chat => (
              <TouchableOpacity key={chat.id} style={{ marginBottom: 12 }}>
                <Card>
                  <CardContent style={{ flexDirection: 'row', padding: 12 }}>
                    {renderAvatar(chat)}
                    <View style={{ flex: 1, marginLeft: 12, justifyContent: 'center' }}>
                      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{chat.name}</Text>
                        <Text style={{ color: '#6B7280', fontSize: 12 }}>{chat.time}</Text>
                      </View>
                      <Text style={{ color: '#6B7280', marginTop: 4 }} numberOfLines={1}>{chat.lastMessage}</Text>
                    </View>
                    {chat.unread > 0 && (
                      <View style={{
                        backgroundColor: '#4F46E5',
                        borderRadius: 12,
                        minWidth: 24,
                        height: 24,
                        justifyContent: 'center',
                        alignItems: 'center',
                        alignSelf: 'center',
                        marginLeft: 8
                      }}>
                        <Text style={{ color: 'white', fontSize: 12, fontWeight: 'bold' }}>{chat.unread}</Text>
                      </View>
                    )}
                  </CardContent>
                </Card>
              </TouchableOpacity>
            ))}
          </View>
        )}

        {activeTab === 'groups' && (
          <View style={{ padding: 16 }}>
            {filteredGroups.map(group => (
              <TouchableOpacity key={group.id} style={{ marginBottom: 12 }}>
                <Card>
                  <CardContent style={{ flexDirection: 'row', padding: 12 }}>
                    <View style={{ width: 50, height: 50, borderRadius: 25, backgroundColor: '#4F46E5', justifyContent: 'center', alignItems: 'center' }}>
                      <Users size={24} color="white" />
                    </View>
                    <View style={{ flex: 1, marginLeft: 12, justifyContent: 'center' }}>
                      <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{group.name}</Text>
                        <Text style={{ color: '#6B7280', fontSize: 12 }}>{group.lastActive}</Text>
                      </View>
                      <Text style={{ color: '#6B7280', marginTop: 4 }}>{group.members} miembros</Text>
                    </View>
                  </CardContent>
                </Card>
              </TouchableOpacity>
            ))}
          </View>
        )}

        {activeTab === 'contacts' && (
          <View style={{ padding: 16 }}>
            {filteredContacts.map(contact => (
              <TouchableOpacity key={contact.id} style={{ marginBottom: 12 }}>
                <Card>
                  <CardContent style={{ flexDirection: 'row', padding: 12 }}>
                    {renderAvatar(contact)}
                    <View style={{ flex: 1, marginLeft: 12, justifyContent: 'center' }}>
                      <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{contact.name}</Text>
                      <Text style={{ color: '#6B7280', marginTop: 4 }}>{contact.status}</Text>
                    </View>
                    <TouchableOpacity
                      style={{
                        backgroundColor: '#4F46E5',
                        borderRadius: 20,
                        width: 40,
                        height: 40,
                        justifyContent: 'center',
                        alignItems: 'center',
                        alignSelf: 'center'
                      }}
                    >
                      <MessageCircle size={20} color="white" />
                    </TouchableOpacity>
                  </CardContent>
                </Card>
              </TouchableOpacity>
            ))}
          </View>
        )}
      </ScrollView>

      {/* Floating Action Button */}
      <TouchableOpacity
        style={{
          position: 'absolute',
          bottom: 20,
          right: 20,
          backgroundColor: '#4F46E5',
          borderRadius: 30,
          width: 60,
          height: 60,
          justifyContent: 'center',
          alignItems: 'center',
          elevation: 5,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
        }}
      >
        <Plus size={24} color="white" />
      </TouchableOpacity>
    </View>
  );
}