<script setup>
import { ref } from 'vue';

const isOpen = ref(false);
const side = ref('right');

const toggleDrawer = (pos) => {
  side.value = pos;
  isOpen.value = !isOpen.value;
};
</script>

  <button @click="toggleDrawer('left')">Open Left Drawer</button>
  <button @click="toggleDrawer('right')">Open Right Drawer</button>
  <Drawer :isOpen="isOpen" :side="side" @update:isOpen="isOpen = $event" class="w-[400px]">
    test
  </Drawer>