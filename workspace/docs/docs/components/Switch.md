<script setup>
import { ref } from 'vue';
const isActive = ref(true);
const labelActive = ref(false);
const labelActive2 = ref(false);
const labelActive3 = ref(false);
const ColorActive1 = ref(true);
const ColorActive2 = ref(true);
const ColorActive3 = ref(true);
const ColorActive4 = ref(true);
const ColorActive5 = ref(true);
const ColorActive6 = ref(true);
const disable1 = ref(true);
const disable2 = ref(false);




const tabs = [
  { label: 'UI', value: 1, content: '' },
  { label: 'Props', value: 2, content: ''}

];
</script>


## Switch



<Tab 
   class="gap-3 border-[1px]  rounded-md w-full mx-auto "
    :tabs="tabs" 
    variant="shadow"
    size="sm"
    activeColor="text-blue-500 shadow-blue-500"
  >
<template #content1>

<div class="  p-6 rounded-lg   flex justify-center items-center ">
<Switch v-model="isActive" />
</div>
</template>


  <template #content2>

  ```md
<script setup>
import { ref } from 'vue';
const isActive = ref(false);
</script>

<Switch v-model="isActive" />

```
  </template>


</Tab>




## Label



<Tab 
   class="gap-3 border-[1px]  rounded-md w-full mx-auto "
    :tabs="tabs" 
    variant="shadow"
    size="sm"
    activeColor="text-blue-500 shadow-blue-500"
  >
<template #content1>

<div class="  p-6 rounded-lg   flex justify-center items-center flex-col gap-4 ">
<Switch v-model="labelActive" label1="No" label2="Yes"  />
<Switch v-model="labelActive2" label1="0" label2=" 1 " />
<Switch v-model="labelActive3" label1="×" label2=" ✓ " />

</div>
</template>


  <template #content2>

  ```md
<script setup>
import { ref } from 'vue';
const labelActive = ref(false);
const labelActive2 = ref(false);
const labelActive3 = ref(false);
</script>

<Switch v-model="labelActive" label1="No" label2="Yes" />
<Switch v-model="labelActive2" label1="0" label2=" 1 " />
<Switch v-model="labelActive3" label1="×" label2=" ✓ " />


```
  </template>

</Tab>






## Color




<Tab 
   class="gap-3 border-[1px]  rounded-md w-full mx-auto "
    :tabs="tabs" 
    variant="shadow"
    size="sm"
    activeColor="text-blue-500 shadow-blue-500"
  >
<template #content1>

<div class="grid grid-cols-2 grid-rows-3 gap-3 justify-items-center">
<Switch v-model="ColorActive2"  activeColor="bg-cyan-500" inactiveColor="bg-cyan-950" />
<Switch v-model="ColorActive1"   activeColor="bg-pink-500" inactiveColor="bg-pink-950"/>
<Switch v-model="ColorActive3" activeColor="bg-green-500" inactiveColor="bg-green-950" />
<Switch v-model="ColorActive4"  activeColor="bg-yellow-500" inactiveColor="bg-yellow-950"/>
<Switch v-model="ColorActive5"  activeColor="bg-rose-500" inactiveColor="bg-rose-950"/>
<Switch v-model="ColorActive6"  activeColor="bg-purple-500" inactiveColor="bg-purple-950" />

</div>
</template>


  <template #content2>

  ```md
<script setup>
import { ref } from 'vue';
const ColorActive1 = ref(true);
const ColorActive2 = ref(true);
const ColorActive3 = ref(true);
const ColorActive4 = ref(true);
const ColorActive5 = ref(true);
const ColorActive6 = ref(true);
</script>

<div class="grid grid-cols-2 grid-rows-3 gap-3 justify-items-center">
<Switch v-model="ColorActive1"   activeColor="bg-pink-500" inactiveColor="bg-pink-950"/>
<Switch v-model="ColorActive2"  activeColor="bg-cyan-500" inactiveColor="bg-cyan-950" />
<Switch v-model="ColorActive3" activeColor="bg-green-500" inactiveColor="bg-green-950" />
<Switch v-model="ColorActive4"  activeColor="bg-yellow-500" inactiveColor="bg-yellow-950"/>
<Switch v-model="ColorActive5"  activeColor="bg-rose-500" inactiveColor="bg-rose-950"/>
<Switch v-model="ColorActive6"  activeColor="bg-purple-500" inactiveColor="bg-purple-950" />
</div>
```
  </template>

</Tab>






## disable

<Tab 
   class="gap-3 border-[1px]  rounded-md w-full mx-auto "
    :tabs="tabs" 
    variant="shadow"
    size="sm"
    activeColor="text-blue-500 shadow-blue-500"
  >
<template #content1>

<div class="grid grid-cols-2 gap-3 justify-items-center">
<h7 class="text-xs">Disable in left side</h7>
<h7 class="text-xs">Disable in right side</h7>
<Switch v-model="disable1" :isDisabled="true" activeColor="bg-cyan-500" inactiveColor="bg-cyan-950"/>
<Switch v-model="disable2" :isDisabled="true" activeColor="bg-pink-500" inactiveColor="bg-pink-950"/>
</div>
</template>

  <template #content2>

  ```md
<script setup>
import { ref } from 'vue';
const disable1 = ref(true);
const disable2 = ref(false);
</script>


<Switch v-model="disable1" :isDisabled="true" activeColor="bg-pink-500" inactiveColor="bg-pink-950"/>
<Switch v-model="disable2" :isDisabled="true" activeColor="bg-cyan-500" inactiveColor="bg-cyan-950"/>

```
</template>
</Tab>


## Size

<Tab 
   class="gap-3 border-[1px]  rounded-md w-full mx-auto "
    :tabs="tabs" 
    variant="shadow"
    size="sm"
    activeColor="text-blue-500 shadow-blue-500"
  >
<template #content1>

<div class="flex flex-row gap-14 items-center justify-center">
<Switch v-model="isActive" size="sm" label2="sm" />
<Switch v-model="isActive" size="md" label2="md" />
<Switch v-model="isActive" size="lg" label2="lg" />
<Switch v-model="isActive" size="xl" label2="xl"/>
</div>
</template>

  <template #content2>

  ```md
<script setup>
import { ref } from 'vue';
const sizeActiveSm = ref(false);
const sizeActiveMd = ref(false);
const sizeActiveLg = ref(false);
const sizeActiveXl = ref(false);
</script>

<div class="grid grid-cols-2 gap-3 justify-items-center">
<Switch v-model="sizeActive" size="sm" label1="sm" activeColor="bg-blue-500" inactiveColor="bg-gray-300"/>
<Switch v-model="sizeActive" size="md"/>
<Switch v-model="sizeActive" size="lg"/>
<Switch v-model="sizeActive" size="xl"/>
</div>
```
</template>
</Tab>



## variant

<Tab 
   class="gap-3 border-[1px]  rounded-md w-full mx-auto "
    :tabs="tabs" 
    variant="shadow"
    size="sm"
    activeColor="text-blue-500 shadow-blue-500"
  >
<template #content1>

<div class="flex flex-row gap-14 items-center justify-center">
<Switch v-model="isActive" size="sm" label2="sm" />



</div>
</template>

  <template #content2>

  ```md
<script setup>
import { ref } from 'vue';
const sizeActiveSm = ref(false);
const sizeActiveMd = ref(false);
const sizeActiveLg = ref(false);
const sizeActiveXl = ref(false);
</script>

<div class="grid grid-cols-2 gap-3 justify-items-center">
<Switch v-model="sizeActive" size="sm" label1="sm" activeColor="bg-blue-500" inactiveColor="bg-gray-300"/>
<Switch v-model="sizeActive" size="md"/>
<Switch v-model="sizeActive" size="lg"/>
<Switch v-model="sizeActive" size="xl"/>
</div>
```
</template>
</Tab>
