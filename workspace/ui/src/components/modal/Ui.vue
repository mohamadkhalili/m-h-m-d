<template>
    <div class="modal">
      <modal>
        <template #close></template>
        <template #default>
          <p>this is modal</p>
        </template>
      </modal>
    </div>
  </template>
  
  <script setup lang="ts">
  import modal from "./Core.vue";
  </script>
  <style scoped>
  .modal {
      width: 300px;
      height: 200px;
      background-color: white;
      color: black;
  }
  </style>