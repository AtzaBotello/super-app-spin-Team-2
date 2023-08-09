import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { BenefitsScreen } from '@presentation/benefits/screens'
import { HomeScreen } from '@presentation/home/screens'
import IconHome from 'src/components/navigation/IconHomeComponent'
import IconBenefits from 'src/components/navigation/IconBenefitsComponent'
import IconWallet from 'src/components/navigation/IconWalletComponent'
import IconProfile from 'src/components/navigation/IconProfileComponent'

const Tab = createBottomTabNavigator()

export const TabNav = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <IconHome color={color} size={size} />
          ),
          tabBarLabel: 'Home',
        }}
      />
      <Tab.Screen
        name="Beneficios"
        component={BenefitsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <IconBenefits color={color} size={size} />
          ),
          tabBarLabel: 'Beneficios',
        }}
      />
      <Tab.Screen
        name="Cartera"
        component={BenefitsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <IconWallet color={color} size={size} />
          ),
          tabBarLabel: 'Cartera',
        }}
      />
      <Tab.Screen
        name="Cuenta"
        component={BenefitsScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <IconProfile color={color} size={size} />
          ),
          tabBarLabel: 'Cuenta',
        }}
      />
    </Tab.Navigator>
  )
}
