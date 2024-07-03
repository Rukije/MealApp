import { View, Text, StyleSheet } from "react-native";

function MealDetails({duration, complexity, affordability,style,textStyle}) {
  return (
    <View style={[styles.details,style]}>
      <Text style={[styles.detailItem,textStyle]}>DURATION: {duration}m</Text>
      <Text style={[styles.detailItem,textStyle]}>COMPLEXITY: {complexity}</Text>
      <Text style={[styles.detailItem,textStyle]}>AFFORDABILITY: {affordability}</Text>
    </View>
  );
}

export default MealDetails;

const styles = StyleSheet.create({
  details: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});
