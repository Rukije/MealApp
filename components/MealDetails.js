import { View, Text, StyleSheet } from "react-native";

function MealDetails({duration, complexity, affordability}) {
  return (
    <View style={styles.details}>
      <Text style={styles.detailItem}>DURATION: {duration}m</Text>
      <Text style={styles.detailItem}>COMPLEXITY: {complexity}</Text>
      <Text style={styles.detailItem}>AFFORDABILITY: {affordability}</Text>
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
