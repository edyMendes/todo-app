<template>
  <ion-item class="ion-padding">
    <span :class="{ completed: task.completed }">{{ task.description }}</span>

    <ion-buttons slot="end" v-show="!readonly">
      <ion-button @click="toggleCompleted(task)" v-if="task.completed">
        <span class="glyphicon glyphicon-repeat" aria-hidden="true"></span>
      </ion-button>
      <ion-button @click="toggleCompleted(task)" v-else>
        <span class="glyphicon glyphicon-ok" aria-hidden="true"></span>
      </ion-button>

      <ion-button color="danger" @click="removeTask(task)">
        <span class="glyphicon glyphicon-trash" aria-hidden="true"></span>
      </ion-button>

      <ion-button @click="editTask(task)" v-if="!taskEdit">
        <span class="glyphicon glyphicon-edit" aria-hidden="true"></span>
      </ion-button>
      <ion-button color="warning" @click="closeEdit" v-else>
        <span class="glyphicon glyphicon-upload" aria-hidden="true"></span>
      </ion-button>
    </ion-buttons>
  </ion-item>
  <div v-if="taskEdit">
    <ion-alert
      :is-open="isAlertOpen"
      header="Edit Task"
      :inputs="alertInputs"
      :buttons="alertButtons"
      @didDismiss="closeEdit"
    ></ion-alert>
  </div>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits } from "vue";
import TaskDetail from "./TaskDetail.vue";

const taskEdit = ref(null);
const props = defineProps(["task", "readonly"]);

const task = props.task;

const emit = defineEmits(["RemoveTask", "ToogleComplete"]);

const removeTask = (task) => {
  emit("RemoveTask", task);
};

const toggleCompleted = (task) => {
  emit("ToogleComplete", task);
};

const alertInputs = [
  {
    name: "description",
    type: "text",
    placeholder: "Enter the task description",
    value: task.description,
  },
];

const alertButtons = [
  {
    text: "Cancel",
    role: "cancel",
    handler: () => {
      console.log("Cancel clicked");
    },
  },
  {
    text: "Save",
    handler: (data) => {
      task.description = data.description;
    },
  },
];

const isAlertOpen = ref(false);

const editTask = (task) => {
  taskEdit.value = task;
  isAlertOpen.value = true;
};

const closeEdit = () => {
  taskEdit.value = null;
};
</script>

<style scoped>
.completed {
  text-decoration: line-through;
}

ion-button {
  margin-left: 5px;
}
</style>
