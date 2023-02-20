<template>
  <div class="flex-content">
    <div
      v-for="(item, idx) in items"
      :key="idx"
      :class="item.name === activeTab ? 'active' : ''"
      @click="switchTab(item.name)"
    >
      {{ item.name }}
    </div>
  </div>
</template>

<script>
export default {
  props: ["items","activeTab"],
  data: () => ({
    // activeTab: "Department",
  }),
  methods: {
    switchTab(tabName) {
        this.activeTab = tabName
    },
  },
};
</script>
<style>
.flex-content {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #b5bdc4;
  cursor: pointer;
}
.active {
  color: #0b1354;
  border-bottom: 4px solid #ff8c22;
}
</style>
