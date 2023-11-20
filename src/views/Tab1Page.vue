<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Hello World</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Hello World</ion-title>
        </ion-toolbar>
      </ion-header>

      <ion-fab vertical="bottom" horizontal="center" slot="fixed">
        <ion-fab-button id="hello-alert"> Hello! </ion-fab-button>
      </ion-fab>

      <ion-alert
        trigger="hello-alert"
        header="Hello World!"
        sub-header="Welcome to the Ionic Vue app."
        :buttons="alertButtons"
      ></ion-alert>

      <ExploreContainer name="Hello World Page" />
    </ion-content>
  </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';

const alertButtons = ['Thank you!'];
</script>
