import { StyleSheet } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailScreen from "./screens/MailDetailScreen";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#351401" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#351401" },
          }}
        >
          <Stack.Screen
            name="MealsCategories"
            component={CategoriesScreen}
            options={{
              title: "All Categories",
              // headerStyle:{backgroundColor:'#351401'},
              // headerTintColor:'white',
              // contentStyle:{backgroundColor:'#351401'}
            }}
          />
          <Stack.Screen 
          name="MealsOverview"
          component={MealsOverviewScreen}
          // options={({route,navigation}) => {
          //   const catId = route.params.categoryId;
          //   return {
          //     title: catId,
          //   };
          // }} display title based the category id
          />
          <Stack.Screen
            name="MealDetail"
            component={MealDetailScreen}
            />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
