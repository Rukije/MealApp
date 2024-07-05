import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useContext, useLayoutEffect } from "react";
import IconButton from "../components/IconButton";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
// import { FavoritesContext } from "../store/context/favorite-context";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite,removeFavorite} from '../store/redux/favorites'
function MealDetailScreen({ route, navigation }) {

  // const favoriteMealsCtx = useContext(FavoritesContext);
  const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
  const dispatch =useDispatch();

  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  // const mealIsFavorite = favoriteMealsCtx.ids.includes(mealId);
    const mealIsFavorite = favoriteMealIds.includes(mealId);


  function changeFavoriteStatusHandler() {
    if(mealIsFavorite){
      // favoriteMealsCtx.removeFavorite(mealId);
      dispatch(removeFavorite({id:mealId}));
    }else{
      // favoriteMealsCtx.addFavorite(mealId);
      dispatch(addFavorite({id:mealId}));
    }
  }
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <IconButton icon={mealIsFavorite ? 'star' : 'star-outline'} color="white" onPress={changeFavoriteStatusHandler}/>;
      },
    });
  }, [navigation, changeFavoriteStatusHandler]);
  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={selectedMeal.duration}
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        textStyle={styles.detailText}
      />
      <View style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}
export default MealDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    margin: 8,
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  subtitle: {
    color: "#e2b497",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitleContainer: {
    padding: 6,
    margin: 4,
    marginHorizontal: 24,
    marginVertical: 4,
    borderBottomWidth: 2,
    borderBottomColor: "#e2b497",
  },
  listOuterContainer: {
    alignItems: "center",
  },
  listContainer: {
    width: "80%",
  },
});
