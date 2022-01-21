import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainNavigation from "./App/navigation/MainStack";

function App() {
  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );
}

export default App;
