<template>
  <InputText
    class="input-field md:col-6"
    :placeholder="placeholder"
    :class="inValid ? 'p-invalid ' + inputClass : inputClass"
    :type="type"
    :disabled="disable"
    @change="EmitToParent"
    v-model="inputValue"
    :value="inputValue"
    @input="onInput"
    :id="inputId"
    :name="inputName"
  />
</template>

<script>
import InputText from "primevue/inputtext";
export default {
  name: "TextField",
  props: {
    value: {
      type: String,
      required: false,
    },
    placeholder: {
      type: String,
      required: false,
    },
    label: {
      type: String,
      required: false,
    },
    disable: {
      type: Boolean,
      required: false,
    },
    inputClass: {
      type: String,
      required: false,
    },
    type: {
      type: String,
      required: false,
    },
    inValid: {
      type: Boolean,
      required: false,
    },
    inputId: {
      type: String,
      required: false,
    },
    inputName: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      inputValue: this.$props.value,
    };
  },
  components: { InputText },
  watch: {
    value() {
      this.inputValue = this.value;
    },
  },
  methods: {
    EmitToParent() {
      this.$emit("getInputValue", this.inputValue);
    },

    onInput({ target }) {
      this.$emit(
        "onInput",
        this.type === "number" && target.value ? Number(target.value) : target
      );
    },
  },
  created() {
    this.inputValue = this.value;
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/_variables.scss";

.input-field {
  border-color: unset;
  outline: 0 none;
  outline-offset: 0;
  box-shadow: unset !important;
  border-radius: unset !important;
}
.p-inputtext {
  border: 0.063rem solid $color-border;
  border-radius: 0.125rem !important;
  font-family: Gordita !important;
  height: 3rem;
}
.p-inputtext:enabled:focus {
  border-color: rgba(2, 0, 56, 0.3);
  border: 0.125rem solid rgba(2, 0, 56, 0.3);
}
.p-inputtext:enabled:hover {
  border-color: rgba(2, 0, 56, 0.3);
  border: 0.125rem solid rgba(2, 0, 56, 0.3);
}
.p-disabled,
.p-component:disabled {
  opacity: 0.6;
  background-color: #f3f3f6;
}
</style>
