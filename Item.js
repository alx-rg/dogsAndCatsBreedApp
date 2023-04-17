import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

export default function Item({ data, species }) {
  const { breed } = data;
  const characteristics = Object.keys(data).filter((key) => key !== "breed");

  return (
    <View style={styles.item}>
      <Text style={styles.title}>{breed}</Text>
      <FlatList
        data={characteristics}
        renderItem={({ item, index }) => (
          <View
            style={[
              styles.propertyContainer,
              { backgroundColor: index % 2 === 0 ? "#D3D3D3" : "#fff" },
            ]}
            key={item}
          >
            <Text style={styles.propertyName}>{item}</Text>
            <View style={styles.propertyValue}>
              {[...Array(data[item])].map((_, i) => (
                <Text key={i} style={styles.star}>
                  ★
                </Text>
              ))}
            </View>
          </View>
        )}
        keyExtractor={(item) => item}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    marginVertical: 8,
    marginHorizontal: 4,
  },
  title: {
    fontSize: 32,
  },
  propertyContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    flexWrap: "wrap",
    paddingHorizontal: 20,
  },
  propertyName: {
    fontSize: 13,
    fontWeight: "bold",
    marginRight: 10,
  },
  propertyValue: {
    flexShrink: 1,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  star: {
    paddingTop: 3,
    fontSize: 8,
    marginRight: 5,
  },
});
