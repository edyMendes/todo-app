<template>
    <ion-item class="ion-padding">
      <ion-label class="form-check-label" for="completeInput">Completed</ion-label>
      <ion-checkbox id="completeInput" v-model="task.completed"></ion-checkbox>
  
      <ion-label for="inputDesc">Description</ion-label>
      <ion-input
        v-model="task.description"
        type="text"
        class="flex-grow-1"
        placeholder="Enter the task description"
        id="inputDesc"
      ></ion-input>
    </ion-item>
  </template>
  
  <script setup lang="ts">
  import { defineProps } from 'vue';
  
  const props = defineProps(['task']);
  </script>
  
  <style scoped>
  ion-checkbox {
    margin-left: 10px;
    margin-right: 20px;
  }
  
  ion-input {
    margin-left: 10px;
  }
  
  label {
    margin-top: 5px;
  }
  
  .flex-grow-1 {
    flex-grow: 1;
  }
  </style>
  