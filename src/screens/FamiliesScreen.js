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
import { Context as FamilyContext } from "../context/FamilyContext";
import { Context as GroupContext } from "../context/GroupContext";
import { useFocusEffect } from "@react-navigation/native";
import SegmentControl from "../components/SegmentControlComponent";

const FamiliesScreen = ({ navigation }) => {
  const { state, ReadFamilies } = useContext(FamilyContext);
  const { CreateGroup } = useContext(GroupContext);
  const [selectedValue, setSelectedValue] = useState("Sem Grupo");
  const [isRefreshing, setIsRefreshing] = React.useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const data = [{ title: "Sem grupo" }, { title: "Com Grupo" }];
  let contador = 0;

  useFocusEffect(
    React.useCallback(() => {
      setIsLoading(true);
      setSelectedValue("Sem Grupo");
      ReadFamilies(() => setIsLoading(false));
    }, [])
  );

  if (state.semGrupo !== undefined) {
    state.semGrupo.map((item) => {
      if (item.desabilitado === 1) {
        contador = contador + 1;
      }
    });
  }

  const onRefresh = React.useCallback(() => {
    setIsRefreshing(true);

    ReadFamilies(() => setIsRefreshing(false));
  }, []);

  const namePicker = (fullName) => {
    const split = fullName.split(" ");

    if (split.length > 1) return `${split[0]} ${split[split.length - 1]}`;
    return `${split[0]}`;
  };

  return state.semGrupo !== undefined && !isLoading ? (
    <View style={styles.statusBar}>
      <SegmentControl
        func={() => setSelectedValue("Sem Grupo")}
        func2={() => setSelectedValue("Com Grupo")}
        data={data}
      />
      {selectedValue === "Sem Grupo" ? (
        <View style={styles.flatlist}>
          <FlatList
            contentContainerStyle={{ paddingBottom: 170 }}
            ListFooterComponent={() => {
              return state.semGrupo.length - contador >= 6 &&
                selectedValue === "Sem Grupo" ? (
                <>
                  <Text style={{ fontSize: 16, marginTop: 15, color: "red" }}>
                    Foram cadastradas seis famílias e a partir de agora você
                    pode criar um grupo com essas famílias.
                  </Text>
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                      setIsLoading(true);
                      CreateGroup(
                        () => navigation.navigate("Groups"),
                        () => setIsLoading(false)
                      );
                    }}
                  >
                    <Text style={styles.appButtonText}>criar grupo</Text>
                  </TouchableOpacity>
                </>
              ) : (
                <></>
              );
            }}
            refreshControl={
              <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
            }
            data={state.semGrupo}
            keyExtractor={(item) => `${item._id}`}
            ListEmptyComponent={() => {
              return (
                <Text style={styles.empty}>Não existe família disponíveis</Text>
              );
            }}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("Family", {
                      family: item,
                    })
                  }
                >
                  {item.desabilitado === 1 ? (
                    <View style={styles.familiesLabel2}>
                      <Text style={styles.familiesText}>
                        Família de {namePicker(item.cuidador.nome)}
                      </Text>
                    </View>
                  ) : (
                    <View style={styles.familiesLabel}>
                      <Text style={styles.familiesText}>
                        Família de {namePicker(item.cuidador.nome)}
                      </Text>
                    </View>
                  )}
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
              <RefreshControl refreshing={isRefreshing} onRefresh={onRefresh} />
            }
            data={state.comGrupo}
            keyExtractor={(item) => `${item._id}`}
            ListEmptyComponent={() => {
              return (
                <Text style={styles.empty}>Não existe família disponíveis</Text>
              );
            }}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("Family", {
                      family: item,
                    })
                  }
                >
                  {item.desabilitado === 1 ? (
                    <View style={styles.familiesLabel2}>
                      <Text style={styles.familiesText}>
                        Família de {namePicker(item.cuidador.nome)}
                      </Text>
                    </View>
                  ) : (
                    <View style={styles.familiesLabel}>
                      <Text style={styles.familiesText}>
                        Família de {namePicker(item.cuidador.nome)}
                      </Text>
                    </View>
                  )}
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

  button: {
    width: "80%",
    backgroundColor: "#336699",
    borderRadius: 25,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
    alignSelf: "center",
  },

  appButtonText: {
    fontSize: 17,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#f5f1e9",
  },

  familiesLabel: {
    justifyContent: "center",
    paddingLeft: 10,
    height: 50,
    backgroundColor: "white",
    borderRadius: 10,
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#c9c9c9",
  },

  familiesLabel2: {
    justifyContent: "center",
    paddingLeft: 10,
    height: 50,
    backgroundColor: "#EEEEEE",
    borderRadius: 10,
    marginTop: 10,
    borderWidth: 1,
    borderColor: "red",
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
  flatlist: {
    width: "90%",
  },
  familiesText: {
    fontSize: 18,
  },
  empty: {
    color: "#575757",
    alignSelf: "center",
  },
});

export default FamiliesScreen;
