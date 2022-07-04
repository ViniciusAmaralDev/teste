import React, { useCallback } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Button, View } from "react-native";
import TaskContext, { Task } from "./realm";

const { useRealm, useQuery, useObject } = TaskContext;

export default function App() {
  const realm = useRealm();
  const handleAddTask = useCallback(
    (description: string): void => {
      if (!description) {
        return;
      }
      realm.write(() => {
        const task = realm.create("Task", Task.generate(description, "testando"));
        console.log(task);
      });
      realm.close();
    },
    [realm]
  );

  return (
    <View style={styles.container}>
      <Button title="ADD" onPress={() => handleAddTask("Teste")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
