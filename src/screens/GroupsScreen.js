import React, { useContext, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
  RefreshControl,
  StatusBar,
  Platform,
} from "react-native";

import { Context as GroupContext } from "../context/GroupContext";
import { useFocusEffect } from "@react-navigation/native";
import SegmentControl from "../components/SegmentControlComponent";

const GroupsScreen = ({ navigation }) => {
  const { state, ReadGroups } = useContext(GroupContext);
  const [refreshing, setRefreshing] = React.useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedValue, setSelectedValue] = useState("ativos");
  const data = [{ title: "Ativos" }, { title: "Encerrados" }];
  useFocusEffect(
    React.useCallback(() => {
      setIsLoading(true);
      setSelectedValue("ativos");
      ReadGroups(() => setIsLoading(false));
    }, [])
  );

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    ReadGroups().then(() => setRefreshing(false));
  }, []);

  return state.ativos !== undefined && !isLoading ? (
    <View style={styles.statusBar}>
      <SegmentControl
        func={() => setSelectedValue("ativos")}
        func2={() => setSelectedValue("encerrados")}
        data={data}
      />

      {selectedValue === "ativos" ? (
        <View style={styles.flatlist}>
          <FlatList
            contentContainerStyle={{ paddingBottom: 170 }}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
            data={state.ativos}
            keyExtractor={(item) => `${item._id}`}
            ListEmptyComponent={() => {
              return (
                <Text style={styles.empty}>Não existe Grupos disponíveis </Text>
              );
            }}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("Group", {
                      _id: item._id,
                    })
                  }
                >
                  <View style={styles.GroupsLabel}>
                    <Text style={styles.GroupsText}> Grupo: {index + 1}</Text>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      ) : (
        <View style={styles.flatlist}>
          <FlatList
            contentContainerStyle={{ paddingBottom: 170 }}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
            data={state.encerrados}
            keyExtractor={(item) => `${item._id}`}
            ListEmptyComponent={() => {
              return (
                <Text style={styles.empty}>Não existe Grupos disponíveis </Text>
              );
            }}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("Group", {
                      _id: item._id,
                    })
                  }
                >
                  <View style={styles.GroupsLabel}>
                    <Text style={styles.GroupsText}> Grupo: {index + 1}</Text>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      )}
    </View>
  ) : (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#336699" />
    </View>
  );
};

const styles = StyleSheet.create({
  statusBar: {
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    alignItems: "center",
    backgroundColor: "#f5f1e9",
    flex: 1,
  },
  GroupsLabel: {
    justifyContent: "center",
    paddingLeft: 10,
    height: 50,
    backgroundColor: "white",
    borderRadius: 10,
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#c9c9c9",
  },
  GroupsText: {
    fontSize: 18,
  },

  picker: {
    width: "90%",
    backgroundColor: "white",
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },

  texto: {
    marginTop: 10,
    alignSelf: "center",
    color: "grey",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#f5f1e9",
  },
  horizontal: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
  },
  flatlist: {
    width: "90%",
  },
  empty: {
    color: "#575757",
    alignSelf: "center",
  },
});

export default GroupsScreen;
