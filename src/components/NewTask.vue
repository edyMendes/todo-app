<template>
    <ion-form class="ion-padding">
      <!-- <ion-item>
        <ion-label position="floating">Task</ion-label>
        <ion-input
          v-model="newTask"
          type="text"
          placeholder="Enter the task description"
          @ionChange="onTaskChange"
        ></ion-input>
      </ion-item>
      <ion-button expand="full" @click="addTask">Add Task</ion-button> -->


      <ion-fab  horizontal="end" slot="fixed">
        <ion-fab-button id="add-todo"> 
            <span class="glyphicon glyphicon-plus" aria-hidden="true"></span>    
        </ion-fab-button>
      </ion-fab>

      <ion-alert
        trigger="add-todo"
        header="Please enter your info"
        :buttons="alertButtons"
        :inputs="alertInputs"
        @didDismiss="onDismiss"
      >
      </ion-alert>

    </ion-form>
  </template>
  
  <script setup lang="ts">
  import { ref, defineEmits } from 'vue';
  
  const newTask = ref('');
  
  const emit = defineEmits(['AddTask']);

  const alertButtons = [
  {
    text: "Cancel",
    role: "cancel",
    handler: () => {
      console.log("Alert Cancel");
    },
  },
  {
    text: "Ok",
    role: "ok",
    handler: () => {
      console.log("Alert Ok");
    },
  },
];

const alertInputs = [
  {
    type: "textarea",
    placeholder: "Give a description of the task",
  },
];

const onDismiss = (event: CustomEvent) => {
  if (event.detail.role === "ok") {
    newTask.value = event.detail.data.values[0];
    addTask();
  }
};
    
  
  const addTask = () => {
    if (newTask.value.trim()) {
      emit('AddTask', {
        description: newTask.value,
        completed: false,
      });
    }
    newTask.value = '';
  };
  
  const onTaskChange = (event) => {
    newTask.value = event.detail.value;
  };
  </script>
  
  <style scoped>
  ion-input {
    margin-left: 5px;
    margin-right: 5px;
  }
  </style>
  