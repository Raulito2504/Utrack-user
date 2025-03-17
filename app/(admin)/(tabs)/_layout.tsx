import { Tabs } from "expo-router";
import React from "react";
import { DrawerTrigger } from "~/components/ui/drawer";
import { AdminTabs } from "~/lib/constants/tabs";

const TabsL = () => {
  return (
    <Tabs screenOptions={{ headerLeft: DrawerTrigger }}>
      {AdminTabs.map((d, index) => (
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
