import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { Formik } from "formik";
import RegSchema from "./RegisterFormValidation";
import CustomInput from "../components/CustomInputComponent";
import Select from "../components/SelectComponent";
import MultipleCheckBox from "../components/MultipleCheckBoxComponent";
import { TextInputMask } from "react-native-masked-text";
const RegisterForm = ({ submit }) => {
  const [state, setState] = React.useState(false);
  const [meses, setMeses] = React.useState(false);

  return (
    <View style={{ paddingBottom: 40, paddingTop: 10 }}>
      <Formik
        validationSchema={RegSchema}
        initialValues={{
          criancaNome: "",

          criancaNascimento: "",
          criancaIdade: "",
          criancaMeses: "",
          cuidadorNome: "",

          criancaSexo: "",
          cuidadorNascimento: "",
          cuidadorIdade: "",
          cuidadorAnosEstudo: "",
          cuidadorLocalGrupo: "",
          cuidadorEndereco: "",
          cuidadorCep: "",
          cuidadorCidade: "",
          cuidadorEstado: "",
          cuidadorTelefones: "",
          cuidadorNumeroFilhos: "",
          cuidadorFilhos0a6Anos: "",
          cuidadorPessoasMorando: "",
          cuidadorCasoReceba: "",
          cuidadorParentesco: "",
          cuidadorEscolaridade: "",
          cuidadorOcupacao: "",
          cuidadorPele: "",
          criancaPele: "",
          cuidadorReligiao: "",
          cuidadorSituacaoConjugal: "",
          cuidadorRecebeAuxilio: "",
          cuidadorRendaMensal: "",
          moraAtualmente: [],
        }}
        onSubmit={(values, actions) => {
          actions.resetForm();
          submit(values);
        }}
      >
        {({
          handleSubmit,
          values,
          handleChange,
          errors,
          touched,
          validateForm,
          handleBlur,
          setFieldValue,
          validateField,
        }) => (
          <>
            <View style={styles.box}>
              <Text
                style={{
                  fontWeight: "bold",

                  textTransform: "uppercase",
                  padding: 10,
                }}
              >
                Escolha um dos seus filhos que tenha de 2 a 6 anos e que você
                tem maior preocupação para responder as perguntas
              </Text>
              <Text
                style={{
                  fontWeight: "bold",

                  textTransform: "uppercase",
                  padding: 10,
                }}
              >
                Dados da criança:
              </Text>
              <CustomInput
                onBlur={handleBlur("criancaNome")}
                error={errors.criancaNome}
                touched={touched.criancaNome}
                value={values.criancaNome}
                placeholder="Nome completo (nome e sobrenome)"
                onChangeText={handleChange("criancaNome")}
                style={{
                  height: 40,
                  margin: 4,
                  borderBottomWidth: 1,
                  borderBottomColor: "#575757",
                }}
              />
              <View
                style={{
                  height: 40,
                  margin: 4,
                  borderBottomWidth: 1,
                  borderBottomColor: "#575757",
                }}
              >
                <TextInputMask
                  type={"datetime"}
                  options={{
                    format: "DD/MM/YYYY",
                  }}
                  value={values.criancaNascimento}
                  onChangeText={handleChange("criancaNascimento")}
                  placeholder="Nascimento:"
                />
                {errors.criancaNascimento && touched.criancaNascimento && (
                  <Text
                    style={{
                      margin: 20,
                      fontSize: 14,
                      color: "red",
                      alignSelf: "center",
                    }}
                  >
                    {errors.criancaNascimento}
                  </Text>
                )}
              </View>

              <Select
                touched={touched.criancaIdade}
                style={styles.box1}
                styleTitle={styles.title}
                errors={errors.criancaIdade}
                data={[
                  { key: "Menos de 1 ano", id: 0, checked: false },
                  { key: "1 ano", id: 1, checked: false },
                  { key: "2 anos", id: 2, checked: false },
                  { key: "3 anos", id: 3, checked: false },
                  { key: "4 anos", id: 4, checked: false },
                  { key: "5 anos", id: 5, checked: false },
                  { key: "6 anos", id: 6, checked: false },
                ]}
                onSelectionChange={(selected) => {
                  values.criancaIdade =
                    selected === "1 ano"
                      ? 1
                      : selected === "2 anos"
                      ? 2
                      : selected === "3 anos"
                      ? 3
                      : selected === "4 anos"
                      ? 4
                      : selected === "5 anos"
                      ? 5
                      : selected === "6 anos"
                      ? 6
                      : "meses";

                  if (values.criancaIdade === "meses") {
                    setMeses(true);
                  } else {
                    setMeses(false);
                  }
                }}
                title="Idade: "
              />
              {meses === true && (
                <CustomInput
                  onBlur={handleBlur("criancaMeses")}
                  error={errors.criancaMeses}
                  touched={touched.criancaMeses}
                  value={values.criancaMeses}
                  placeholder="Meses:"
                  onChangeText={handleChange("criancaMeses")}
                  keyboardType="numeric"
                  style={{
                    height: 40,
                    margin: 4,
                    borderBottomWidth: 1,
                    borderBottomColor: "#575757",
                  }}
                />
              )}
              <Select
                touched={touched.criancaSexo}
                style={styles.box1}
                styleTitle={styles.title}
                errors={errors.criancaSexo}
                data={[
                  { key: "Masculino", id: 0, checked: false },
                  { key: "Feminino", id: 1, checked: false },
                ]}
                onSelectionChange={(selected) => {
                  values.criancaSexo = selected;
                }}
                title="Sexo:"
              />
              <Select
                touched={touched.criancaPele}
                style={styles.box1}
                styleTitle={styles.title}
                errors={errors.criancaPele}
                data={[
                  { key: "Branca", id: 0, checked: false },
                  { key: "Preta", id: 1, checked: false },
                  { key: "Parda", id: 2, checked: false },
                  { key: "Amarela", id: 3, checked: false },
                  { key: "Indígena", id: 4, checked: false },
                  { key: "Prefiro não declarar", id: 5, checked: false },
                ]}
                onSelectionChange={(selected) => {
                  values.criancaPele = selected;
                }}
                title="Qual a cor da pele ou raça da sua criança?"
              />
            </View>
            <View style={styles.box}>
              <Text
                style={{
                  fontWeight: "bold",

                  textTransform: "uppercase",
                  padding: 10,
                }}
              >
                Dados do cuidador:
              </Text>
              <CustomInput
                onBlur={handleBlur("cuidadorNome")}
                error={errors.cuidadorNome}
                touched={touched.cuidadorNome}
                value={values.cuidadorNome}
                placeholder="Nome completo:"
                onChangeText={handleChange("cuidadorNome")}
                style={{
                  height: 40,
                  margin: 4,
                  borderBottomWidth: 1,
                  borderBottomColor: "#575757",
                }}
              />

              <View
                style={{
                  height: 40,
                  margin: 4,
                  borderBottomWidth: 1,
                  borderBottomColor: "#575757",
                }}
              >
                <TextInputMask
                  type={"datetime"}
                  options={{
                    format: "DD/MM/YYYY",
                  }}
                  Idade={values.cuidadorNascimento}
                  onChangeText={handleChange("cuidadorNascimento")}
                  placeholder="Nascimento:"
                />
                {errors.cuidadorNascimento && touched.cuidadorNascimento && (
                  <Text
                    style={{
                      margin: 20,
                      fontSize: 14,
                      color: "red",
                      alignSelf: "center",
                    }}
                  >
                    {errors.cuidadorNascimento}
                  </Text>
                )}
              </View>

              <CustomInput
                onBlur={handleBlur("cuidadorIdade")}
                error={errors.cuidadorIdade}
                touched={touched.cuidadorIdade}
                value={values.cuidadorIdade}
                placeholder="Idade:"
                onChangeText={handleChange("cuidadorIdade")}
                keyboardType="numeric"
                style={{
                  height: 40,
                  margin: 4,
                  borderBottomWidth: 1,
                  borderBottomColor: "#575757",
                }}
              />
            </View>
            <Select
              touched={touched.cuidadorParentesco}
              style={styles.box}
              errors={errors.cuidadorParentesco}
              data={[
                { key: "Mãe biológica", id: 0, checked: false },
                { key: "Mãe adotiva", id: 1, checked: false },
                { key: "Madrasta", id: 2, checked: false },
                { key: "Pai biológico", id: 3, checked: false },
                { key: "Pai adotivo", id: 4, checked: false },
                { key: "Padrasto", id: 5, checked: false },
                { key: "Outro cuidador principal", id: 6, checked: false },
              ]}
              onSelectionChange={(selected) => {
                values.cuidadorParentesco = selected;
                //validateField("EPVA_18");
              }}
              title="Parentesco da criança:"
            />
            <Select
              touched={touched.cuidadorEscolaridade}
              style={styles.box}
              errors={errors.cuidadorEscolaridade}
              data={[
                { key: "Ensino Fundamental Incompleto", id: 0, checked: false },
                { key: "Ensino Fundamental Completo", id: 1, checked: false },
                { key: "Ensino  Médio Incompleto", id: 2, checked: false },
                { key: "Ensino Médio Completo", id: 3, checked: false },
                { key: "Ensino Técnico", id: 4, checked: false },
                { key: "Ensino Superior Incompleto", id: 5, checked: false },
                { key: "Ensino Superior Completo", id: 6, checked: false },
              ]}
              onSelectionChange={(selected) => {
                values.cuidadorEscolaridade = selected;
              }}
              title="Escolaridade:"
            />
            <CustomInput
              onBlur={handleBlur("cuidadorAnosEstudo")}
              error={errors.cuidadorAnosEstudo}
              touched={touched.cuidadorAnosEstudo}
              value={values.cuidadorAnosEstudo}
              placeholder="Anos de Estudo:"
              onChangeText={handleChange("cuidadorAnosEstudo")}
              style={styles.box}
              keyboardType="numeric"
            />
            <CustomInput
              onBlur={handleBlur("cuidadorLocalGrupo")}
              error={errors.cuidadorLocalGrupo}
              touched={touched.cuidadorLocalGrupo}
              value={values.cuidadorLocalGrupo}
              placeholder="Local do grupo:"
              onChangeText={handleChange("cuidadorLocalGrupo")}
              style={styles.box}
            />
            <CustomInput
              onBlur={handleBlur("cuidadorEndereco")}
              error={errors.cuidadorEndereco}
              touched={touched.cuidadorEndereco}
              value={values.cuidadorEndereco}
              placeholder="Endereço da família:"
              onChangeText={handleChange("cuidadorEndereco")}
              style={styles.box}
            />
            <CustomInput
              onBlur={handleBlur("cuidadorCep")}
              error={errors.cuidadorCep}
              touched={touched.cuidadorCep}
              value={values.cuidadorCep}
              placeholder="CEP:"
              onChangeText={handleChange("cuidadorCep")}
              style={styles.box}
              keyboardType="numeric"
            />
            <CustomInput
              onBlur={handleBlur("cuidadorCidade")}
              error={errors.cuidadorCidade}
              touched={touched.cuidadorCidade}
              value={values.cuidadorCidade}
              placeholder="Cidade:"
              onChangeText={handleChange("cuidadorCidade")}
              style={styles.box}
            />
            <CustomInput
              onBlur={handleBlur("cuidadorEstado")}
              error={errors.cuidadorEstado}
              touched={touched.cuidadorEstado}
              value={values.cuidadorEstado}
              placeholder="Estado:"
              onChangeText={handleChange("cuidadorEstado")}
              style={styles.box}
            />

            <View>
              <TextInputMask
                style={styles.box}
                type={"cel-phone"}
                options={{
                  maskType: "BRL",
                  withDDD: true,
                  dddMask: "(99)",
                }}
                value={values.cuidadorTelefones}
                onChangeText={handleChange("cuidadorTelefones")}
                placeholder="Telefone: "
              />
              {errors.cuidadorTelefones && touched.cuidadorTelefones && (
                <Text
                  style={{
                    fontSize: 14,
                    color: "red",
                    alignSelf: "center",
                  }}
                >
                  {errors.cuidadorTelefones}
                </Text>
              )}
            </View>

            <Select
              touched={touched.cuidadorOcupacao}
              style={styles.box}
              errors={errors.cuidadorOcupacao}
              data={[
                { key: "Estudante", id: 0, checked: false },
                { key: "Do lar", id: 1, checked: false },
                { key: "Autônomo(a)", id: 2, checked: false },
                { key: "Funcionário(a) contratado(a)", id: 3, checked: false },
                { key: "Desempregado(a)", id: 4, checked: false },
              ]}
              onSelectionChange={(selected) => {
                values.cuidadorOcupacao = selected;
              }}
              title="Ocupação:"
            />
            <Select
              touched={touched.cuidadorPele}
              style={styles.box}
              errors={errors.cuidadorPele}
              data={[
                { key: "Branca", id: 0, checked: false },
                { key: "Preta", id: 1, checked: false },
                { key: "Parda", id: 2, checked: false },
                { key: "Amarela", id: 3, checked: false },
                { key: "Indígena", id: 4, checked: false },
                { key: "Prefiro não declarar", id: 5, checked: false },
              ]}
              onSelectionChange={(selected) => {
                values.cuidadorPele = selected;
              }}
              title="Qual a cor da sua pele ou raça?"
            />

            <Select
              touched={touched.cuidadorReligiao}
              style={styles.box}
              errors={errors.cuidadorReligiao}
              data={[
                { key: "Católica", id: 0, checked: false },
                { key: "Evangélica", id: 1, checked: false },
                { key: "Espírita", id: 2, checked: false },
                { key: "Outras religiões", id: 3, checked: false },
                { key: "Não tenho religião", id: 4, checked: false },
              ]}
              onSelectionChange={(selected) => {
                values.cuidadorReligiao = selected;
              }}
              title="Religião:"
            />
            <Select
              touched={touched.cuidadorSituacaoConjugal}
              style={styles.box}
              errors={errors.cuidadorSituacaoConjugal}
              data={[
                { key: "Casado (a)/União estável", id: 0, checked: false },
                { key: "Solteiro (a)", id: 1, checked: false },
                { key: "Separado (a)", id: 2, checked: false },
                { key: "Viúvo (a)", id: 3, checked: false },
              ]}
              onSelectionChange={(selected) => {
                values.cuidadorSituacaoConjugal = selected;
                //validateField("EPVA_18");
              }}
              title="Situação conjugal:"
            />

            <CustomInput
              onBlur={handleBlur("cuidadorNumeroFilhos")}
              error={errors.cuidadorNumeroFilhos}
              touched={touched.cuidadorNumeroFilhos}
              value={values.cuidadorNumeroFilhos}
              placeholder="Número de filhos:"
              onChangeText={handleChange("cuidadorNumeroFilhos")}
              style={styles.box}
              keyboardType="numeric"
            />
            <CustomInput
              onBlur={handleBlur("cuidadorFilhos0a6Anos")}
              error={errors.cuidadorFilhos0a6Anos}
              touched={touched.cuidadorFilhos0a6Anos}
              value={values.cuidadorFilhos0a6Anos}
              placeholder="Quantos filhos de 0 a 6 anos:"
              onChangeText={handleChange("cuidadorFilhos0a6Anos")}
              style={styles.box}
              keyboardType="numeric"
            />
            <CustomInput
              onBlur={handleBlur("cuidadorPessoasMorando")}
              error={errors.cuidadorPessoasMorando}
              touched={touched.cuidadorPessoasMorando}
              value={values.cuidadorPessoasMorando}
              placeholder="Quantas pessoas moram na casa?"
              onChangeText={handleChange("cuidadorPessoasMorando")}
              style={styles.box}
              keyboardType="numeric"
            />
            <MultipleCheckBox
              errors={errors.moraAtualmente}
              touched={touched.moraAtualmente}
              title="Com quem a criança mora atualmente?"
              data={[
                { id: 0, key: "Mãe", checked: "unchecked" },
                { id: 1, key: "Pai", checked: "unchecked" },
                { id: 2, key: "Madrasta", checked: "unchecked" },
                { id: 3, key: "Padrasto", checked: "unchecked" },
                { id: 4, key: "Irmãos", checked: "unchecked" },
                { id: 5, key: "Avô/Avó", checked: "unchecked" },
                { id: 6, key: "Tio/Tia", checked: "unchecked" },
                {
                  id: 7,
                  key: "Outras pessoas da família",
                  checked: "unchecked",
                },
                {
                  id: 8,
                  key: "Outras pessoas não familiares",
                  checked: "unchecked",
                },
              ]}
              style={styles.box}
              value={values.moraAtualmente}
              onSelectionChange={(selected) => {
                values.moraAtualmente = selected;
                //validateField("moraAtualmente");
              }}
            />
            <Select
              touched={touched.cuidadorRecebeAuxilio}
              style={styles.box}
              errors={errors.cuidadorRecebeAuxilio}
              data={[
                { key: "Sim", id: 0, checked: false },
                { key: "Não", id: 1, checked: false },
              ]}
              onSelectionChange={(selected) => {
                values.cuidadorRecebeAuxilio = selected;
                if (selected === "Sim") {
                  setState(true);
                } else {
                  setState(false);
                }
              }}
              title="Recebe algum auxílio do governo:"
            />
            {state === true ? (
              <CustomInput
                onBlur={handleBlur("cuidadorCasoReceba")}
                error={errors.cuidadorCasoReceba}
                touched={touched.cuidadorCasoReceba}
                value={values.cuidadorCasoReceba}
                placeholder="Se sim, qual?"
                onChangeText={handleChange("cuidadorCasoReceba")}
                style={styles.box}
              />
            ) : null}
            <Select
              touched={touched.cuidadorRendaMensal}
              style={styles.box}
              errors={errors.cuidadorRendaMensal}
              data={[
                { key: "Menos de R$1000", id: 0, checked: false },
                { key: "Entre R$1.100 - R$3000", id: 1, checked: false },
                { key: "Entre R$ 3100 - R$5000", id: 2, checked: false },
                { key: "Mais de R$5000", id: 3, checked: false },
              ]}
              onSelectionChange={(selected) => {
                values.cuidadorRendaMensal = selected;
              }}
              title="Renda Mensal:"
            />

            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                if (values.criancaMeses !== "") {
                  values.criancaIdade = values.criancaMeses / 12;
                }

                handleSubmit();
              }}
            >
              <Text style={styles.textbutton}>Finalizar</Text>
            </TouchableOpacity>
          </>
        )}
      </Formik>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderWidth: 1,
    color: "black",
    paddingVertical: 5,
    paddingHorizontal: 8,
    marginBottom: 10,
  },
  key: {
    marginTop: 10,
    marginHorizontal: 8,
    paddingBottom: 45,
  },
  text: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 5,
  },
  textbutton: {
    fontSize: 17,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
  button: {
    width: "80%",
    backgroundColor: "#bd786e",
    borderRadius: 25,
    height: 45,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 10,
    alignSelf: "center",
  },
  box: {
    backgroundColor: "white",
    borderRadius: 30,
    padding: 10,
    margin: 10,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  box1: {
    padding: 10,
  },
  textCheck: {
    alignSelf: "center",
    marginBottom: 12,
    textTransform: "uppercase",
  },
  title: {
    fontWeight: "bold",
    fontSize: 12,
    textTransform: "uppercase",
  },
});

export default RegisterForm;
