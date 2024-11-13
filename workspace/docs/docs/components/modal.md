# modal
<script setup lang="ts">
import { ref } from 'vue'

const isModalOpen = ref(false);
const isModalOpen2 = ref(false);
const isModalOpen3 = ref(false);
</script>


click to button to open modal

this is default modal

<button  @click="isModalOpen = true" class="bg-black text-white rounded-lg p-2 mt-1" cleaner>Open Modal</button>
<modal v-model="isModalOpen"/>

```vue
<modal v-model="isModalOpen" teleport="body"/>
```
this is modal closed when click outside

<button  @click="isModalOpen2 = true" class="bg-black text-white rounded-lg p-2 mt-1" cleaner>Open Modal</button>
<modal v-model="isModalOpen2" teleport="body" closeOnOutside/>

```vue
<modal v-model="isModalOpen" teleport="body" closeOnOutside/>
```
this is modal custom colored

<button  @click="isModalOpen3 = true" class="bg-black text-white rounded-lg p-2 mt-1" cleaner>Open Modal</button>
<modal v-model="isModalOpen3" teleport="body" activeColor="bg-white" activeTextColor="text-black"/>

```vue
<modal v-model="isModalOpen" 
       teleport="body" 
       activeColor="bg-white" 
       activeTextColor="text-black"/>
```