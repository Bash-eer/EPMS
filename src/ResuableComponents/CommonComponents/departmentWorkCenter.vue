<template>
  <div class="flex addDep mt-2">
    <div class="">
      <div class="col">
        <div class="input-align drop-width">
          <span class="fontfam">Department ID</span>
          <Dropdown
            v-model="selectedType"
            :value = "selectedType"
            :options="workCenterData"
            optionLabel="departmentId"
            placeholder="Select Department ID"
            @change="setWorkCenterForms($event, 'departmentId')"
          />
        </div>
        <div class="input-align text-area-width">
          <span class="fontfam">Department Description</span>
          <Textarea
            v-model="addDWorkCenterData.description"
            placeholder="Description about the department"
            :autoResize="true"
            rows="5"
            cols="30"
            @input="setWorkCenterForms($event.target.value, 'description')"
          />
        </div>
        <div class="input-align fontfam">
          <span class="fontfam">Work Center ID</span>
          <InputText
            v-model="addDWorkCenterData.workCenterId"
            type="text"
            class="field-tag"
            placeholder="Enter Work Center ID"
            @input="setWorkCenterForms($event.target.value, 'workCenterId')"
          />
        </div>
        <div class="input-align text-area-width">
          <span class="fontfam">Work Center Description</span>
          <Textarea
            v-model="addDWorkCenterData.workCenterDescription"
            @input="
              setWorkCenterForms($event.target.value, 'workCenterDescription')
            "
            placeholder="Description about the work center"
            :autoResize="true"
            rows="5"
            cols="30"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "primeicons/primeicons.css";
import InputText from "primevue/inputtext";
import Textarea from "primevue/textarea";
import Dropdown from "primevue/dropdown";
import { mapState } from "vuex";
import { debounce } from "lodash";
export default {
  props: ["departmentId"],
  components: {
    InputText,
    Textarea,
    Dropdown,
  },
  data: () => ({
    selectedType: null,
    addDWorkCenterData: {
      _id:null,
      departmentId: "",
      description: "",
      workCenterId: "",
      workCenterDescription: "",
    },
  }),
  computed: {
    ...mapState({
      workCenterData: (state) => state.department.departmentDetails,
    }),
  },
  watch:{
    "selectedType":function (){
      console.log(this.selectedType,this.workCenterData)
    }
  },
  created() {
    this.addDWorkCenterData.description = this.$store.state.department.updateWorkCenter.description
    this.addDWorkCenterData.workCenterId = this.$store.state.department.updateWorkCenter.workCenterId
    this.addDWorkCenterData.workCenterDescription = this.$store.state.department.updateWorkCenter.workCenterDescription
    this.addDWorkCenterData._id = this.$store.state.department.updateWorkCenter._id
    this.addDWorkCenterData._id = this.$store.state.department.updateWorkCenter._id
    for(let i in this.workCenterData ){
      if(this.workCenterData[i].departmentId == this.$store.state.department.updateWorkCenter.departmentId.departmentId){
        this.selectedType = this.workCenterData[i]
      }
    
    }
     
   
    console.log(this.$store.state.department.updateWorkCenter,"this.$store.state.department.updateWorkCenter")
  },
  methods: {
    setWorkCenterForms: debounce(function (value, field) {
      if (field === "departmentId") {
        this.addDWorkCenterData[field] = this.selectedType._id;
      } else {
        this.addDWorkCenterData[field] = value;
      }
      this.addDWorkCenterData = { ...this.addDWorkCenterData };
      this.$emit("workCenterForms", this.addDWorkCenterData);
    }, 500),
  },
};
</script>

<style scoped>
.input-align {
  display: flex;
  flex-direction: column;
  padding-top: 20px;
}
.drop-width {
  width: 37%;
}
.text-area-width {
  width: 80%;
}
.addDep {
  flex-direction: column;
}
.fontfam {
  font-family: system-ui;
  font-size: 15px;
}
.field-tag {
  width: 23.375rem;
  height: 3rem;
  border: 1px solid #e6e6e6;
  border-radius: 3px;
  color: black;
  font-weight: 600;
  font-size: 14px;
}
</style>
