import { Tabs } from "expo-router";
import React from "react";
import { DrawerTrigger } from "~/components/ui/drawer";
import { TeacherTabs } from "~/lib/constants/tabs";

const TabsL = () => {
  return (
    <Tabs screenOptions={{ headerLeft: DrawerTrigger }}>
      {TeacherTabs.map((d, index) => (
        <Tabs.Screen
          key={index}
          name={d.ref}
          options={{
            title: d.name,
            tabBarIcon: ({ color }) => <d.Icon size={22} color={color} />,
          }}
        />
      ))}
    </Tabs>
  );
};

export default TabsL;
