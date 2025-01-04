  <div>
    <Button @click="toggleDrawer" class="btn-primary">Open Right Drawer</Button>
    <Drawer v-model:isOpen="isOpenRight" side="right">
      <div class="flex flex-col p-4">
        <label>Home</label>
        <label>About</label>
        <label>Content</label>
        <label>Contact</label>
        <Button @click="toggleDrawer" class="btn-secondary">Close Right Drawer</Button>
      </div>
    </Drawer>
  </div>

  <div>
    <Button @click="toggleDrawerLeft" class="btn-primary">Open Left Drawer</Button>
    <Drawer v-model:isOpen="isOpenLeft" side="left">
      <div class="flex flex-col p-4">
        <label>Home</label>
        <label>About</label>
        <label>Content</label>
        <label>Contact</label>
        <Button @click="toggleDrawerLeft" class="btn-secondary">Close Left Drawer</Button>
      </div>
    </Drawer>
  </div>
  

<script setup>
import { ref } from 'vue';

const isOpenRight = ref(false);  
const isOpenLeft = ref(false);  

const toggleDrawer = () => {
  isOpenRight.value = !isOpenRight.value;
};

const toggleDrawerLeft = () => {
  isOpenLeft.value = !isOpenLeft.value;
};
</script>

<style scoped>

</style>
