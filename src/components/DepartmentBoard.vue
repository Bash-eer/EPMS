<template>
  <div>
    <div class="btn">
      <ButtonComponent label="+ Department Onboarding" type="primary" />
    </div>
    <div class="flex mt-2 justify-content-center">
      <div class="Employee">
        <div class="avatar">
          <!-- <Avatar
            :size="size"
            shape="circle"
            :icon="icon ? 'pi pi-user' : ''"
            :image="image"
          /> -->
          <img src="@/assets/Avataricon.svg" />
        </div>
        <div class="flex justify-content-left mt-4">
          <div class="col col-5 mt-4">
            <div class="col flex">
              <div class="col">
                Department ID
                <InputText type="text" class="field" v-model="createDep.departmentId" />
              </div>
              <div class="col">
                Department Name
                <InputText type="text" class="field-tag" v-model="createDep.departmentName" />
              </div>
            </div>
            <div class="change-option mt-2 ml-6" @click="setOption()">
              + Add Department
            </div>
            <div class="btn-Style">
              <Button class="cancel-btn mr-3" label="Cancel" />
              <ButtonComponent
                label="submit"
                type="primary"
                class="submitbtn"
                @click="submitDepartment()"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "primeicons/primeicons.css";
import Button from "primevue/button";
import InputText from 'primevue/inputtext';
import { mapState,mapActions } from "vuex";

export default {
  setup() {},
  name: "supervisorDepartmentComponent",
  components: {
    Button,
    InputText
  },
  data: () => ({ 
     createDep : {
      departmentId : "",
      departmentName : ""
     }
  }),
  computed: {
    ...mapState({
      employee: (state) => state.employee.employeeDetails,
    }),
  },
  methods: {
    ...mapActions([
      "createDapartment"
    ]),
    submitDepartment : async function() {
       await this.createDapartment(this.createDep)
    }
  },
};
</script>

<style lang="scss" scoped>
@import "@/style/global.scss";
.btn {
  margin-top: 2rem;
  margin-left: 53rem;
}

.Employee {
  width: 65.438rem;
  height: 20rem;
  background: #fbfbfb;
  border: 2px solid #f5f4f4;
  border-radius: 10px;
  margin-left: 2.188rem;
}

.field {
  width: 126px;
  height: 3rem;
  border: 1px solid #e6e6e6;
  border-radius: 3px;
  font-size: 15px;
  color: #000;
  font-weight: 600;
}

.field-tag {
  width: 15.375rem;
  height: 3rem;
  border: 1px solid #e6e6e6;
  border-radius: 3px;
  font-size: 15px;
  color: #000;
  font-weight: 600;
}

.col {
  color: #7a7a7a;
  // font-family: Montserrat;
  font-size: 15px;
  line-height: 30px;
  margin-left: 0.813rem;
  margin-top: -1.25rem;
  font-family: system-ui;
  font-weight: 600;
}

.btn-Style {
  display: flex;
  justify-content: end;
  margin-right: -35.625rem;
  margin-top: -3.5rem;
}

.chosen {
  background-color: rgb(55, 235, 55);
  color: #f5f4f4;
  padding: 8px 9px;
  margin-left: 10.938rem;
  margin-top: -2.75rem;
  border: 2px solid #e6e6e6;
  border-radius: 4px;
  width: 4.25rem;
  height: 2.5rem;
}

.avatar {
  margin-top: 0.625rem;
  margin-left: 4.188rem;
  size: 2rem;
}

.submitbtn {
  margin-top: 1.375rem;
}

.cancel-btn {
  background-color: #ffffff;
  color: #555555;
  padding: 8px 18px;
  font-size: 14px;
  border: 1px solid #555555;
  border-radius: 4px;
  height: 38px;
  margin-top: 1.313rem;
}
</style>
