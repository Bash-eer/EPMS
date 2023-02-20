<template>
  <Button
    :label="label"
    :disabled="disable"
    :class="ButtonClass()"
    :style="{
      height: `${height}`,
      width: `${width}`,
      border: `1px solid ${color} !important`,
      color: `${color}`,
      background: `${bgcolor}`,
    }"
    :icon="icon"
    :iconPos="iconPos"
    :loading="loading"
  />
</template>

<script>
import Button from "primevue/button";

export default {
  name: "ButtonComponent",
  props: {
    label: {
      type: String,
      required: false,
    },
    icon: {
      type: String,
      required: false,
    },
    button_class: {
      type: String,
      required: false,
    },
    type: {
      type: String,
      required: false,
    },
    bgcolor: {
      type: String,
      required: false,
    },
    color: {
      type: String,
      required: false,
    },
    height: {
      type: String,
      required: false,
    },
    width: {
      type: String,
      required: false,
    },
    iconPos: {
      type: String,
      required: false,
    },
    disable: {
      type: Boolean,
      required: false,
    },
    loading: {
      type: Boolean,
      required: false,
    },
  },
  components: {
    Button,
  },
  methods: {
    ButtonClass() {
      const classes = [];
      classes.push(this.button_class);
      if (this.type === "primary") {
        classes.push("primary-btn");
      } else if (this.type === "secondary") {
        classes.push("primary-btn");
      } else if (this.type === "outline") {
        classes.push("p-button-outlined");
      } else if (this.type === "disable") {
        classes.push("disable-btn");
      }
      return classes;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/global.scss";
.primary-btn {
  color: $color-white;
  background: #ff8c22 !important;
  border: unset !important;
  border-radius: 0.25rem;
}
.secondary-btn {
  color: $color-white;
  background: $color-green !important;
  border: unset !important;
  border-radius: 0.25rem;
}
.p-button {
  font-weight: 700;
  box-shadow: unset !important;
}
.disable-btn {
  border: none !important;
}
.p-button-label {
  font-family: OpenSans-Regular !important;
}
</style>
