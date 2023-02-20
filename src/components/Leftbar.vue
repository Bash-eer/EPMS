<template>
  <div class="left-bar-outer pt-3 pl-4">
    <div
      class="flex align-items-center mb-3"
      v-for="(item, i) in items"
      :key="i"
    >
      <div class="col col-8 flex align-items-center">
        <img class="mr-3" :src="require(`@/assets/${item.icon}.svg`)" />
        <div>{{ item.title }}</div>
      </div>
      <div class="col flex align-items-center" v-if="i === 0">
        <div class="badge pl-2 pr-2 pt-1">48</div>
      </div>
      <div class="col flex align-items-center" v-if="i === 4">
        <div class="deleted-badge pl-2 pr-2 pt-1">32</div>
      </div>
    </div>
    <div class="col flex align-items-center compose mr-4">
      <img src="@/assets/edit.svg" />
      <div class="ml-3">Compose</div>
    </div>
    <div class="mt-4 recent">
      <div class="recentText">Recent</div>
      <div>
        <img class="mr-3" :src="require(`@/assets/${items[4].icon}.svg`)" />
      </div>
    </div>
    <div class="mt-4">
      <div class="role-title">Supervisor</div>
      <div class="flex align-items-center mt-3">
        <AvatarComponent :icon="true" />
        <div class="ml-2 user-name">Bessie Cooper</div>
      </div>
    </div>
    <div class="mt-4">
      <div class="role-title">Planner</div>
      <div class="flex align-items-center mt-3">
        <AvatarComponent :icon="true" />
        <div class="ml-2 user-name">Esther Howard</div>
      </div>
    </div>
    <div class="mt-4">
      <div class="role-title">
        Onboarded Employees<span class="deleted-badge pl-2 pr-2 pt-1 ml-3"
          >3/5</span
        >
      </div>
      <div class="flex align-items-center mt-3">
        <AvatarComponent :icon="true" />
        <div class="ml-2 user-name">Guy Hawkins</div>
      </div>
    </div>
    <div class="change-option col mt-3">+ Add Employee</div>
  </div>
</template>

<script>
export default {
  name: "LeftBar",
  setup() {},
  data() {
    return {
      items: [
        {
          title: "Inbox",
          active: true,
          icon: "inbox",
        },
        {
          title: "Outbox",
          active: false,
          icon: "outbox",
        },
        {
          title: "Sent",
          active: false,
          icon: "sent",
        },
        {
          title: "Drafts",
          active: false,
          icon: "draft",
        },
        {
          title: "Deleted",
          active: false,
          icon: "deleted",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/global.scss";
.left-bar-outer {
  background: #fbfbff;
  // width: 18%;
  // height: calc(100vh - 60px);
  font-family: OpenSans-Regular !important;
  // overflow-y: auto;
  font-weight: 600;
  font-size: 13px;
  // position: fixed;
}
.badge {
  background: #3e7eff;
  border-radius: 12px;
  width: max-content;
  height: 24px;
  color: #ffffff;
}
.deleted-badge {
  border-radius: 12px;
  width: max-content;
  height: 26px;
  color: #8083a3;
  background: #e4e6e8;
  opacity: 0.6;
  border: 1px solid #e4e6e8;
}
.compose {
  color: #171721;
  font-weight: 700;
  font-size: 13px;
  background: #ffffff;
  box-shadow: 0px 3px 4px rgba(153, 155, 168, 0.25);
  border-radius: 14px;
  height: 40px;
}
.recent {
  display: flex;
  justify-content: space-between;
}
.recentText {
  font-size: 14px;
  color: #8083a3;
  font-weight: 600;
  // font-size: 12px;
  font-family: "OpenSans-Light";
}
.role-title {
  color: #8083a3;
  font-weight: 600;
  font-size: 12px;
  font-family: "OpenSans-Light";
}
.user-name {
  color: #171721;
  font-family: system-ui;
}
</style>
