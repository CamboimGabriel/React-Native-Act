import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/screens/HomeScreen";
import RegisterScreen from "./src/screens/RegisterScreen";
import GroupsScreen from "./src/screens/GroupsScreen";
import FamiliesScreen from "./src/screens/FamiliesScreen";
import SettingsScreen from "./src/screens/SettingsScreen";
import FamilyScreen from "./src/screens/FamilyScreen";
import GroupScreen from "./src/screens/GroupScreen";
import FormScreen from "./src/screens/FormScreen";
import LoginScreen from "./src/screens/LoginScreen";
import ResolveAuthScreen from "./src/screens/ResolveAuthScreen";
import { setNavigator } from "./src/navigationRef";
import { Provider as FormProvider } from "./src/context/FormContext";
import { Provider as FamilyProvider } from "./src/context/FamilyContext";
import { Provider as GroupProvider } from "./src/context/GroupContext";
import { Provider as AuthProvider } from "./src/context/AuthContext";
import { NavigationContainer } from "@react-navigation/native";
import { FontAwesome5 } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/Feather";
import React from "react";

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <BottomTab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          switch (route.name) {
            case "Register":
              iconName = "file-text";
              break;
            case "Families":
              iconName = "users";
              break;
            case "Groups":
              iconName = "clipboard";
              break;
            case "Settings":
              return (
                <FontAwesome5 name="user-circle" size={size} color={color} />
              );
            default:
              iconName = "circle";
              break;
          }

          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: "#bd786e",
        inactiveTintColor: "#777",
        style: { backgroundColor: "#f5f1e9" },
      }}
    >
      <BottomTab.Screen
        name="Register"
        component={RegisterScreen}
        options={{ tabBarLabel: "Cadastrar" }}
      />
      <BottomTab.Screen
        name="Families"
        component={FamiliesScreen}
        options={{ tabBarLabel: "Famílias" }}
      />
      <BottomTab.Screen
        name="Groups"
        component={GroupsScreen}
        options={{ tabBarLabel: "Grupos" }}
      />
      <BottomTab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ tabBarLabel: "Conta" }}
      />
    </BottomTab.Navigator>
  );
}

function RootStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleStyle: { alignSelf: "center" },
        headerTitleContainerStyle: {
          left: 0,
        },
      }}
      initialRouteName="ResolveAuth"
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name="ResolveAuth"
        component={ResolveAuthScreen}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name="Group"
        component={GroupScreen}
        options={{ title: "Grupo", headerTitleAlign: "center" }}
      />
      <Stack.Screen
        name="Tab"
        component={TabNavigator}
        options={{ header: () => null }}
      />
      <Stack.Screen
        name="Family"
        component={FamilyScreen}
        options={{
          title: "Família",
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="Form"
        component={FormScreen}
        options={{
          title: "Formulário",
          headerTitleAlign: "center",
        }}
      />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer
      ref={(RootStack) => {
        setNavigator(RootStack);
      }}
    >
      <AuthProvider>
        <FamilyProvider>
          <FormProvider>
            <GroupProvider>{RootStack()}</GroupProvider>
          </FormProvider>
        </FamilyProvider>
      </AuthProvider>
    </NavigationContainer>
  );
}
