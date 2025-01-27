/* Ofe */
/* Tabs Layout File [_layout.tsx] */

/*By Jonathan Bruce
JBruce, LLC
jbruce.design
.j.
- - - - - */

import {Tabs} from 'expo-router';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#000', /* trackr - Main Off-White Color */
        tabBarStyle: {
          backgroundColor: '#fff', /* trackr - Main Dark Blue Color */
        },
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{ 
          title: 'Home',
          tabBarIcon: ({color, focused}) => (
            <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
          ),
        }}
      />
      <Tabs.Screen
        name="test"
        options={{ 
          title: 'Test',
          tabBarIcon: ({color, focused}) => (
            <Ionicons name={focused ? 'construct-sharp' : 'construct-outline'} color={color} size={24} />
          ),
        }}
      />
    </Tabs>
  );
}