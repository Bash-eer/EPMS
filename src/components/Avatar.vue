<template>
  <Avatar
    :size="size"
    shape="circle"
    :icon="icon ? 'pi pi-user' : ''"
    :image="image"
  />
</template>

<script>
import Avatar from "primevue/avatar";
export default {
  name: "AvatarComponent",
  components: {
    Avatar,
  },
  props: {
    label: {
      type: String,
      required: false,
    },
    image: {
      type: String,
      required: false,
    },
    icon: {
      type: Boolean,
      required: false,
    },
    size: {
      type: String,
      required: false,
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/global.scss";
</style>
