import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

import Tabs from "./Tab";
import { MovieDetailScreen } from "../screens";

function MainNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Tabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MovieDetail"
        component={MovieDetailScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

export default MainNavigation;
