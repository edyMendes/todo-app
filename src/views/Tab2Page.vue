<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Todo-app</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Todo-app</ion-title>
        </ion-toolbar>
      </ion-header>

      <div class="container">
        <div>
          <ion-item class="ion-padding">
            <ion-row>
              <ion-col>
                <h4>Pending: {{ pending }}</h4>
                <h4>Completed: {{ completed }}</h4>
              </ion-col>
              <NewTask @AddTask="addTask"></NewTask>
            </ion-row>
          </ion-item>
          <hr />
          <br />
          <ul class="list-group">
            <Task
              v-for="task in tasks"
              :key="task"
              :task="task"
              :readonly="false"
              @RemoveTask="removeTask"
              @ToogleComplete="toggleCompleted"
            ></Task>
          </ul>
          <hr />
          <h4>Completed Tasks</h4>
          <ul class="list-group">
            <task
              v-for="task in completedTasks"
              :key="task"
              :task="task"
              :readonly="true"
            >
            </task>
          </ul>
          <hr />
          <h4>Incompleted Tasks</h4>
          <ul class="list-group">
            <task
              v-for="task in incompletedTasks"
              :key="task"
              :task="task"
              :readonly="true"
            ></task>
          </ul>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
} from "@ionic/vue";

import { ref, computed } from "vue";
import NewTask from "./../components/NewTask.vue";
import Task from "./../components/Task.vue";

const tasks = ref([]);

const addTask = (newTask: any) => {
  if (newTask) {
    tasks.value.push(newTask);
  }

  console.log(newTask);
};

const removeTask = (task: any) => {
  const idx = tasks.value.findIndex((element) => element === task);
  if (idx >= 0) {
    tasks.value.splice(idx, 1);
  }
};

const toggleCompleted = (task: any) => {
  task.completed = !task.completed;
};

const completed = computed(() => {
  return tasks.value.reduce(
    (acumulador, task) => (task.completed ? acumulador + 1 : acumulador),
    0
  );
});

const pending = computed(() => {
  return tasks.value.reduce(
    (acumulador, task) => (!task.completed ? acumulador + 1 : acumulador),
    0
  );
});

const completedTasks = computed(() => {
  return tasks.value.filter((t) => t.completed);
});

const incompletedTasks = computed(() => {
  return tasks.value.filter((t) => !t.completed);
});
</script>
