
  <div>
    <Button @click="toggleDrawer" class="btn-primary">Open</Button>
    <Drawer v-model:isOpen="isOpenRight">
      <div class="flex flex-col h-full bg-gray-100">
        <div class="flex justify-between items-center px-4 py-3 border-b border-gray-300">
          <h2 class=" font-semibold text-gray-700">Menu</h2>
          <button @click="toggleDrawer" class="text-gray-500 hover:text-gray-700 text-xl bg-transparent">
            ✖
          </button>
        </div>
       <div class="flex flex-col flex-grow px-4 py-3 space-y-4">
  <p href="#" class="cursor-pointer flex items-center text-gray-700 text-lg px-3 py-2 rounded-lg hover:bg-blue-100 hover:text-blue-600 transition">
    <span>🏠</span> Home
  </p>
  <p href="#" class="cursor-pointer flex items-center text-gray-700 text-lg px-3 py-2 rounded-lg hover:bg-blue-100 hover:text-blue-600 transition">
    <span>📄</span> About
  </p>
  <p href="#" class="cursor-pointer flex items-center text-gray-700 text-lg px-3 py-2 rounded-lg hover:bg-blue-100 hover:text-blue-600 transition">
    <span>📚</span> Content
  </p>
  <p href="#" class="cursor-pointer flex items-center text-gray-700 text-lg px-3 py-2 rounded-lg hover:bg-blue-100 hover:text-blue-600 transition">
    <span>📞</span> Contact
  </p>
  <p href="#" class="cursor-pointer flex items-center text-gray-700 text-lg px-3 py-2 rounded-lg hover:bg-blue-100 hover:text-blue-600 transition">
    <span>💸</span> Support
  </p>
</div>
        <div class="flex justify-between items-center px-4 py-3 border-t border-gray-300 bg-gray-200">
          <Button class="btn-secondary">Help</Button>
          <Button class="btn-secondary">Logout</Button>
        </div>
      </div>
    </Drawer>
  </div>

<script setup>
import { ref } from 'vue';

const isOpenRight = ref(false);

const toggleDrawer = () => {
  isOpenRight.value = !isOpenRight.value;
};
</script>

<style scoped>
/* Tailwind Utility Classes */

/* Primary Button */
.btn-primary {
  @apply bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition;
}

/* Secondary Button */
.btn-secondary {
  @apply bg-gray-300 text-gray-700 px-4 py-2 rounded-md hover:bg-gray-400 transition;
}



.drawer-link span {
  @apply mr-2;
}
</style>
