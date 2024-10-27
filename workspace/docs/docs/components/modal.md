# modal
<script setup>
import { ref } from 'vue'

// If your component is **not** globally registered, uncomment the next line and adjust the path accordingly
// import MyComponent from '@path/to/MyComponent.vue'
const isModalOpen = ref(false);
function openModal() {
  isModalOpen.value = true;
}
</script>


this is test for modal
<br>
<button @click="openModal">Open Modal</button>
<Modal v-model="isModalOpen" teleport="body" closeOnOutside="true"/>