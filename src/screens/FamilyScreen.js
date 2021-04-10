import React, { useContext, useState } from "react";
import { navigate } from "../navigationRef";
import {
  View,
  StyleSheet,
  Text,
  ActivityIndicator,
  FlatList,
  Alert,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
import { Context as FamilyContext } from "../context/FamilyContext";

const FamilyScreen = ({ route, navigation }) => {
  const family = route.params?.family;
  const { DisableFamily } = useContext(FamilyContext);
  const [isLoading, setIsLoading] = useState(false);

  const exitConfirmation = () =>
    Alert.alert(
      "DESABILITAR",
      "Deseja mesmo desabilitar essa família?",
      [
        {
          text: "Cancelar",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel",
        },
        {
          text: "Confirmar",
          onPress: () => {
            setIsLoading(true);

            DisableFamily(
              family._id,
              () => setIsLoading(false),
              () => navigation.navigate("Families")
            );
          },
        },
      ],
      { cancelable: false }
    );

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        if (family.desabilitado === 0) {
          if (family.formulariosPreenchidos === 0) {
            return (
              <View style={styles.icon}>
                <TouchableOpacity
                  style={{ paddingRight: 20 }}
                  onPress={exitConfirmation}
                >
                  <AntDesign name="closecircleo" size={24} color="black" />
                </TouchableOpacity>

                <TouchableOpacity
                  style={{ paddingRight: 10 }}
                  onPress={() => navigate("Form", { family })}
                >
                  <AntDesign name="filetext1" size={24} color="black" />
                </TouchableOpacity>
              </View>
            );
          }
          return (family.formulariosPreenchidos === 3 &&
            family.passouControle === 1) ||
            (family.formulariosPreenchidos === 2 &&
              family.passouControle === 0) ? (
            <></>
          ) : (
            <TouchableOpacity
              onPress={exitConfirmation}
              style={{ paddingRight: 20 }}
            >
              <AntDesign name="closecircleo" size={24} color="black" />
            </TouchableOpacity>
          );
        }
      },
    });
  }, [navigation]);

  const form = [
    { pergunta: "Nome da criança", resposta: family.crianca.nome },
    {
      pergunta: "Sexo",
      resposta: family.crianca.sexo,
    },
    { pergunta: "Idade", resposta: family.crianca.idade },
    { pergunta: "Nascimento", resposta: family.crianca.nascimento },
    {
      pergunta: "Qual a sua cor da pele/etnia da sua criança",
      resposta: family.crianca.pele,
    },
    { pergunta: "Nome do Cuidador(a)", resposta: family.cuidador.nome },
    { pergunta: "Idade", resposta: family.cuidador.idade },
    { pergunta: "Nascimento", resposta: family.cuidador.nascimento },
    {
      pergunta: "Parentesco Criança",
      resposta: family.cuidador.parentesco,
    },
    {
      pergunta: "Anos de Estudo",
      resposta: family.cuidador.anosEstudo,
    },
    { pergunta: "Local do grupo", resposta: family.cuidador.localGrupo },
    { pergunta: "Endereço", resposta: family.cuidador.endereco },
    { pergunta: "CEP", resposta: family.cuidador.cep },
    { pergunta: "Cidade", resposta: family.cuidador.cidade },
    { pergunta: "Estado", resposta: family.cuidador.estado },
    { pergunta: "Telefones", resposta: family.cuidador.telefones },
    {
      pergunta: "Número de filhos",
      resposta: family.cuidador.numeroFilhos,
    },
    {
      pergunta: "Quantos filhos de 0 a 6anos",
      resposta: family.cuidador.filhos0a6anos,
    },
    {
      pergunta: "Quantas pessoas moram na casa",
      resposta: family.cuidador.pessoasMorando,
    },
    {
      pergunta: "Escolaridade",
      resposta: family.cuidador.escolaridade,
    },

    {
      pergunta: "Ocupação",
      resposta: family.cuidador.ocupacao,
    },
    {
      pergunta: "Qual a sua cor da pele/etnia",
      resposta: family.cuidador.pele,
    },

    {
      pergunta: "Religião",
      resposta: family.cuidador.religiao,
    },
    {
      pergunta: "Situação conjugal",
      resposta: family.cuidador.situacaoConjugal,
    },

    {
      pergunta: "Recebe algum auxílio do governo",
      resposta: family.cuidador.recebeAuxilio,
    },
    {
      pergunta: "Caso receba",
      resposta: family.cuidador.casoReceba,
    },
    {
      pergunta: "Renda Mensal",
      resposta: family.cuidador.rendaMensal,
    },
    {
      pergunta: "Formulários Preenchidos",
      resposta: family.formulariosPreenchidos,
    },

    {
      pergunta: "Passou pelo controle",
      resposta: family.passouControle,
    },
    {
      pergunta: "Mora atualmente",
      resposta: family.moraAtualmente,
    },
  ];

  return family !== undefined &&
    form[0].resposta !== undefined &&
    !isLoading ? (
    <View style={{ backgroundColor: "#f5f1e9" }}>
      {family.desabilitado === 1 ? (
        <Text style={styles.textd}>Essa família foi desativada</Text>
      ) : (family.formulariosPreenchidos === 3 &&
          family.passouControle === 1) ||
        (family.formulariosPreenchidos === 2 && family.passouControle === 0) ? (
        <Text style={styles.textv}>Essa família concluiu o projeto</Text>
      ) : (
        <></>
      )}

      <FlatList
        contentContainerStyle={{ paddingBottom: 30 }}
        data={form}
        keyExtractor={(item, index) => `${item.pergunta}` + index}
        renderItem={({ item }) => {
          return item.pergunta === "Caso receba" ? (
            item.resposta === "Não" ? null : (
              <View style={styles.caixinha}>
                <Text style={styles.text}>
                  {item.pergunta}: {item.resposta}
                </Text>
              </View>
            )
          ) : (
            <View style={styles.caixinha}>
              {item.pergunta === "Passou pelo controle" ? (
                item.resposta === 0 ? (
                  <Text style={styles.text}>{item.pergunta}: Não</Text>
                ) : (
                  <Text style={styles.text}>{item.pergunta}: Sim</Text>
                )
              ) : item.pergunta === "Mora atualmente" ? (
                <View>
                  <Text style={styles.text}>{item.pergunta}:</Text>

                  {family.moraAtualmente.map((resposta, key) => {
                    return (
                      <Text key={key} style={styles.text}>
                        {resposta}
                      </Text>
                    );
                  })}
                </View>
              ) : (
                <Text style={styles.text}>
                  {item.pergunta}: {item.resposta}
                </Text>
              )}
            </View>
          );
        }}
      />
    </View>
  ) : (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#336699" />
    </View>
  );
};

const styles = StyleSheet.create({
  caixinha: {
    backgroundColor: "white",
    width: "90%",
    alignSelf: "center",
    borderRadius: 10,
    marginTop: 10,
    borderWidth: 1,
    borderColor: "#c9c9c9",
    justifyContent: "center",
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
  },
  text: {
    fontSize: 17,
    color: "#575757",
  },

  icon: {
    flexDirection: "row",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#f5f1e9",
  },
  textd: {
    alignSelf: "center",
    color: "red",
    marginTop: 10,
    fontWeight: "bold",
  },
  textv: {
    alignSelf: "center",
    color: "green",
    marginTop: 10,
    fontWeight: "bold",
  },
});

export default FamilyScreen;
