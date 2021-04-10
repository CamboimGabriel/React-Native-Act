import * as Yup from "yup";

const FormSchema = Yup.object().shape({
  participouOutro: Yup.string().required("Campo obrigatório"),
  casoParticipe: Yup.array().when("participouOutro", {
    is: "Sim",
    then: Yup.array().min(1, "Campo obrigatorio"),
  }),

  ABEP_1: Yup.string().when("familia.formulariosPreenchidos", {
    is: (value) => value === 0,
    then: Yup.string().required("Campo obrigatorio"),
  }),
  ABEP_2: Yup.string().when("familia.formulariosPreenchidos", {
    is: (value) => value === 0,
    then: Yup.string().required("Campo obrigatorio"),
  }),
  ABEP_3: Yup.string().when("familia.formulariosPreenchidos", {
    is: (value) => value === 0,
    then: Yup.string().required("Campo obrigatorio"),
  }),
  ABEP_4: Yup.string().when("familia.formulariosPreenchidos", {
    is: (value) => value === 0,
    then: Yup.string().required("Campo obrigatorio"),
  }),
  ABEP_5: Yup.string().when("familia.formulariosPreenchidos", {
    is: (value) => value === 0,
    then: Yup.string().required("Campo obrigatorio"),
  }),
  ABEP_6: Yup.string().when("familia.formulariosPreenchidos", {
    is: (value) => value === 0,
    then: Yup.string().required("Campo obrigatorio"),
  }),
  ABEP_7: Yup.string().when("familia.formulariosPreenchidos", {
    is: (value) => value === 0,
    then: Yup.string().required("Campo obrigatorio"),
  }),
  ABEP_8: Yup.string().when("familia.formulariosPreenchidos", {
    is: (value) => value === 0,
    then: Yup.string().required("Campo obrigatorio"),
  }),
  ABEP_9: Yup.string().when("familia.formulariosPreenchidos", {
    is: (value) => value === 0,
    then: Yup.string().required("Campo obrigatorio"),
  }),
  ABEP_10: Yup.string().when("familia.formulariosPreenchidos", {
    is: (value) => value === 0,
    then: Yup.string().required("Campo obrigatorio"),
  }),
  ABEP_11: Yup.string().when("familia.formulariosPreenchidos", {
    is: (value) => value === 0,
    then: Yup.string().required("Campo obrigatorio"),
  }),
  ABEP_12: Yup.string().when("familia.formulariosPreenchidos", {
    is: (value) => value === 0,
    then: Yup.string().required("Campo obrigatorio"),
  }),
  ABEP_13: Yup.string().when("familia.formulariosPreenchidos", {
    is: (value) => value === 0,
    then: Yup.string().required("Campo obrigatorio"),
  }),
  ABEP_14: Yup.string().when("familia.formulariosPreenchidos", {
    is: (value) => value === 0,
    then: Yup.string().required("Campo obrigatorio"),
  }),
  ABEP_15: Yup.string().when("familia.formulariosPreenchidos", {
    is: (value) => value === 0,
    then: Yup.string().required("Campo obrigatorio"),
  }),
  MICS_1: Yup.string().required("Campo obrigatório"),
  MICS_2: Yup.string().required("Campo obrigatório"),
  MICS_3: Yup.string().required("Campo obrigatório"),
  MICS_4: Yup.string().required("Campo obrigatório"),
  MICS_5: Yup.string().required("Campo obrigatório"),
  MICS_6: Yup.string().required("Campo obrigatório"),
  PSOC_1: Yup.string().required("Campo obrigatório"),
  PSOC_2: Yup.string().required("Campo obrigatório"),
  PSOC_3: Yup.string().required("Campo obrigatório"),
  PSOC_4: Yup.string().required("Campo obrigatório"),
  PSOC_5: Yup.string().required("Campo obrigatório"),
  PSOC_6: Yup.string().required("Campo obrigatório"),
  PSOC_7: Yup.string().required("Campo obrigatório"),
  PSOC_8: Yup.string().required("Campo obrigatório"),
  PSOC_9: Yup.string().required("Campo obrigatório"),
  PSOC_10: Yup.string().required("Campo obrigatório"),
  PSOC_11: Yup.string().required("Campo obrigatório"),

  PSOC_12: Yup.string().required("Campo obrigatório"),
  PSOC_13: Yup.string().required("Campo obrigatório"),
  PSOC_14: Yup.string().required("Campo obrigatório"),
  PSOC_15: Yup.string().required("Campo obrigatório"),
  PSOC_16: Yup.string().required("Campo obrigatório"),
  PSOC_17: Yup.string().required("Campo obrigatório"),
  PSOC_18: Yup.string().required("Campo obrigatório"),
  ACT_EP2: Yup.string().required("Campo obrigatório"),
  ACT_EP4: Yup.string().required("Campo obrigatório"),
  ACT_EP5: Yup.string().required("Campo obrigatório"),
  ACT_EP6: Yup.string().required("Campo obrigatório"),
  ACT_EP7: Yup.string().required("Campo obrigatório"),
  ACT_EP8: Yup.string().required("Campo obrigatório"),
  ACT_EP10: Yup.string().required("Campo obrigatório"),
  ACT_EP11: Yup.string().required("Campo obrigatório"),
  ACT_CP1: Yup.string().required("Campo obrigatório"),
  ACT_CP2: Yup.string().required("Campo obrigatório"),
  ACT_CP3: Yup.string().required("Campo obrigatório"),
  ACT_CP4: Yup.string().required("Campo obrigatório"),
  ACT_CP5: Yup.string().required("Campo obrigatório"),
  ACT_CP6: Yup.string().required("Campo obrigatório"),
  ACT_CP8: Yup.string().required("Campo obrigatório"),

  PAFAS_1: Yup.string().required("Campo obrigatório"),
  PAFAS_2: Yup.string().required("Campo obrigatório"),
  PAFAS_3: Yup.string().required("Campo obrigatório"),
  PAFAS_4: Yup.string().required("Campo obrigatório"),
  PAFAS_5: Yup.string().required("Campo obrigatório"),
  PAFAS_6: Yup.string().required("Campo obrigatório"),
  PAFAS_7: Yup.string().required("Campo obrigatório"),
  PAFAS_8: Yup.string().required("Campo obrigatório"),
  PAFAS_9: Yup.string().required("Campo obrigatório"),
  PAFAS_11: Yup.string().required("Campo obrigatório"),

  SDQ_1: Yup.string().required("Campo obrigatório"),
  SDQ_2: Yup.string().required("Campo obrigatório"),
  SDQ_3: Yup.string().required("Campo obrigatório"),
  SDQ_4: Yup.string().required("Campo obrigatório"),
  SDQ_5: Yup.string().required("Campo obrigatório"),
  SDQ_6: Yup.string().required("Campo obrigatório"),
  SDQ_7: Yup.string().required("Campo obrigatório"),
  SDQ_8: Yup.string().required("Campo obrigatório"),
  SDQ_9: Yup.string().required("Campo obrigatório"),
  SDQ_10: Yup.string().required("Campo obrigatório"),
  SDQ_11: Yup.string().required("Campo obrigatório"),
  SDQ_12: Yup.string().required("Campo obrigatório"),
  SDQ_13: Yup.string().required("Campo obrigatório"),
  SDQ_14: Yup.string().required("Campo obrigatório"),
  SDQ_15: Yup.string().required("Campo obrigatório"),
  SDQ_16: Yup.string().required("Campo obrigatório"),
  SDQ_17: Yup.string().required("Campo obrigatório"),
  "SDQ_18(2-3)": Yup.string().when("familia.crianca.idade", {
    is: (value) => value <= 3 && value >= 2,
    then: Yup.string().required("Campo obrigatorio"),
  }),

  "SDQ_18(4-8)": Yup.string().when("familia.crianca.idade", {
    is: (value) => value <= 8 && value >= 4,
    then: Yup.string().required("Campo obrigatorio"),
  }),
  SDQ_19: Yup.string().required("Campo obrigatório"),
  SDQ_20: Yup.string().required("Campo obrigatório"),

  "SDQ_21(2-3)": Yup.string().when("familia.crianca.idade", {
    is: (value) => value <= 3 && value >= 2,
    then: Yup.string().required("Campo obrigatorio"),
  }),
  "SDQ_21(4-8)": Yup.string().when("familia.crianca.idade", {
    is: (value) => value <= 8 && value >= 4,
    then: Yup.string().required("Campo obrigatorio"),
  }),
  "SDQ_22(2-3)": Yup.string().when("familia.crianca.idade", {
    is: (value) => value <= 3 && value >= 2,
    then: Yup.string().required("Campo obrigatorio"),
  }),
  "SDQ_22(4-8)": Yup.string().when("familia.crianca.idade", {
    is: (value) => value <= 8 && value >= 4,
    then: Yup.string().required("Campo obrigatorio"),
  }),
  SDQ_23: Yup.string().required("Campo obrigatório"),
  SDQ_24: Yup.string().required("Campo obrigatório"),
  SDQ_25: Yup.string().required("Campo obrigatório"),

  EPVA_3: Yup.string().when(
    ["familia.cuidador.idade", "familia.formulariosPreenchidos"],
    {
      is: (value, value2) => value < 18 && value2 === 0,

      then: Yup.string().required("Campo obrigatorio"),
    }
  ),
  EPVA_4: Yup.string().when(
    ["familia.cuidador.idade", "familia.formulariosPreenchidos"],
    {
      is: (value, value2) => value < 18 && value2 === 0,

      then: Yup.string().required("Campo obrigatorio"),
    }
  ),

  EPVA_5: Yup.string().when(
    ["familia.cuidador.idade", "familia.formulariosPreenchidos"],
    {
      is: (value, value2) => value < 18 && value2 === 0,

      then: Yup.string().required("Campo obrigatorio"),
    }
  ),

  EPVA_8: Yup.string().when(
    ["familia.cuidador.idade", "familia.formulariosPreenchidos"],
    {
      is: (value, value2) => value < 18 && value2 === 0,

      then: Yup.string().required("Campo obrigatorio"),
    }
  ),

  EPVA_10: Yup.string().when(
    ["familia.cuidador.idade", "familia.formulariosPreenchidos"],
    {
      is: (value, value2) => value < 18 && value2 === 0,

      then: Yup.string().required("Campo obrigatorio"),
    }
  ),

  EPVA_12: Yup.string().when(
    ["familia.cuidador.idade", "familia.formulariosPreenchidos"],
    {
      is: (value, value2) => value < 18 && value2 === 0,

      then: Yup.string().required("Campo obrigatorio"),
    }
  ),

  EPVA_14: Yup.string().when(
    ["familia.cuidador.idade", "familia.formulariosPreenchidos"],
    {
      is: (value, value2) => value < 18 && value2 === 0,

      then: Yup.string().required("Campo obrigatorio"),
    }
  ),

  EPVA_15: Yup.string().when(
    ["familia.cuidador.idade", "familia.formulariosPreenchidos"],
    {
      is: (value, value2) => value < 18 && value2 === 0,

      then: Yup.string().required("Campo obrigatorio"),
    }
  ),

  EPVA_16: Yup.string().when(
    ["familia.cuidador.idade", "familia.formulariosPreenchidos"],
    {
      is: (value, value2) => value < 18 && value2 === 0,

      then: Yup.string().required("Campo obrigatorio"),
    }
  ),

  EPVA_17: Yup.string().when(
    ["familia.cuidador.idade", "familia.formulariosPreenchidos"],
    {
      is: (value, value2) => value < 18 && value2 === 0,

      then: Yup.string().required("Campo obrigatorio"),
    }
  ),

  EPVA_18: Yup.string().when(
    ["familia.cuidador.idade", "familia.formulariosPreenchidos"],
    {
      is: (value, value2) => value < 18 && value2 === 0,

      then: Yup.string().required("Campo obrigatorio"),
    }
  ),

  EPVA_20: Yup.string().when(
    ["familia.cuidador.idade", "familia.formulariosPreenchidos"],
    {
      is: (value, value2) => value < 18 && value2 === 0,

      then: Yup.string().required("Campo obrigatorio"),
    }
  ),

  EPVA_21: Yup.string().when(
    ["familia.cuidador.idade", "familia.formulariosPreenchidos"],
    {
      is: (value, value2) => value < 18 && value2 === 0,

      then: Yup.string().required("Campo obrigatorio"),
    }
  ),

  EPVA_23: Yup.string().when(
    ["familia.cuidador.idade", "familia.formulariosPreenchidos"],
    {
      is: (value, value2) => value < 18 && value2 === 0,

      then: Yup.string().required("Campo obrigatorio"),
    }
  ),

  EPVA_24: Yup.string().when(
    ["familia.cuidador.idade", "familia.formulariosPreenchidos"],
    {
      is: (value, value2) => value < 18 && value2 === 0,

      then: Yup.string().required("Campo obrigatorio"),
    }
  ),

  EPVA_26: Yup.string().when(
    ["familia.cuidador.idade", "familia.formulariosPreenchidos"],
    {
      is: (value, value2) => value < 18 && value2 === 0,

      then: Yup.string().required("Campo obrigatorio"),
    }
  ),

  EPVA_28: Yup.string().when(
    ["familia.cuidador.idade", "familia.formulariosPreenchidos"],
    {
      is: (value, value2) => value < 18 && value2 === 0,

      then: Yup.string().required("Campo obrigatorio"),
    }
  ),

  EPVA_31: Yup.string().when(
    ["familia.cuidador.idade", "familia.formulariosPreenchidos"],
    {
      is: (value, value2) => value < 18 && value2 === 0,

      then: Yup.string().required("Campo obrigatorio"),
    }
  ),

  EPVA_32: Yup.string().when(
    ["familia.cuidador.idade", "familia.formulariosPreenchidos"],
    {
      is: (value, value2) => value < 18 && value2 === 0,

      then: Yup.string().required("Campo obrigatorio"),
    }
  ),

  EPVA_34: Yup.string().when(
    ["familia.cuidador.idade", "familia.formulariosPreenchidos"],
    {
      is: (value, value2) => value < 18 && value2 === 0,

      then: Yup.string().required("Campo obrigatorio"),
    }
  ),

  EPVA_36: Yup.string().when(
    ["familia.cuidador.idade", "familia.formulariosPreenchidos"],
    {
      is: (value, value2) => value < 18 && value2 === 0,

      then: Yup.string().required("Campo obrigatorio"),
    }
  ),

  EPVA_38: Yup.string().when(
    ["familia.cuidador.idade", "familia.formulariosPreenchidos"],
    {
      is: (value, value2) => value < 18 && value2 === 0,

      then: Yup.string().required("Campo obrigatorio"),
    }
  ),

  EPVA_40: Yup.string().when(
    ["familia.cuidador.idade", "familia.formulariosPreenchidos"],
    {
      is: (value, value2) => value < 18 && value2 === 0,

      then: Yup.string().required("Campo obrigatorio"),
    }
  ),

  EPVA_42: Yup.string().when(
    ["familia.cuidador.idade", "familia.formulariosPreenchidos"],
    {
      is: (value, value2) => value < 18 && value2 === 0,

      then: Yup.string().required("Campo obrigatorio"),
    }
  ),

  VI_1: Yup.string().when("familia.formulariosPreenchidos", {
    is: (value) => value === 1,
    then: Yup.string().required("Campo obrigatorio"),
  }),

  VI_2: Yup.array().when("VI_1", {
    is: "Sim",
    then: Yup.array().min(1, "Campo obrigatorio"),
    otherwise: Yup.array(),
  }),
  VI_3: Yup.array().when("VI_1", {
    is: "Sim",
    then: Yup.array().min(1, "Campo obrigatorio"),
    otherwise: Yup.array(),
  }),
  VI_4: Yup.array().when("VI_1", {
    is: "Sim",
    then: Yup.array().min(1, "Campo obrigatorio"),
    otherwise: Yup.array(),
  }),
});

export default FormSchema;
