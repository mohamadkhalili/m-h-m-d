<script setup>
const tabs = [
  { label: 'Tab 1', value: 1, content: 'Content of tab 1' },
  { label: 'Tab 2', value: 2, content: 'Content of tab 2' },
  { label: 'Tab 3', value: 3, content: 'Content of tab 3' }
];

const tabsVariants = [
  { label: 'Tab 1', value: 1, content: null },
  { label: 'Tab 2', value: 2, content: null },
  { label: 'Tab 3', value: 3, content: null }
];
</script>

# Tab Component
<br/>
<br/>

### Default Tab
<div class="p-6 rounded-lg shadow-inner flex justify-center items-center">
  <Tab 
    :tabs="tabs" 
    activeColor="bg-gray-800" 
    color="bg-gray-200" 
    activeTextColor="text-white" 
    textColor="text-black"
  >
    <template #label="{ tab }">
      <span >{{ tab.label }}</span>
    </template>
    <template #content="{ tab }">
      <p>{{ tab.content }}</p>
    </template>
  </Tab>
</div>

<br/>
<br/>

---

### Customize Colors
<br/>
<br/>

<div class="grid grid-cols-2 gap-4">
  <div class="p-4 rounded-lg shadow-inner flex justify-center items-center">
    <Tab 
      :tabs="tabs" 
      activeColor="bg-blue-600" 
      color="bg-gray-700" 
      activeTextColor="text-white" 
      textColor="text-white"
    >
      <template #label="{ tab }">
        <span >{{ tab.label }}</span>
      </template>
      <template #content="{ tab }">
        <p>{{ tab.content }}</p>
      </template>
    </Tab>
  </div>
  
  <div class="p-4 rounded-lg shadow-inner flex justify-center items-center">
    <Tab 
      :tabs="tabs" 
      activeColor="bg-rose-700" 
      color="bg-gray-100" 
      activeTextColor="text-white" 
      textColor="text-black"
    >
      <template #label="{ tab }">
        <span>{{ tab.label }}</span>
      </template>
      <template #content="{ tab }">
        <p>{{ tab.content }}</p>
      </template>
    </Tab>
  </div>
</div>

<br/>
<br/>

---

### Variants
<br/>
<br/>

<div class="grid grid-cols-2 gap-4">
  <div class="p-4 rounded-lg shadow-inner flex justify-center items-center">
    <Tab 
      :tabs="tabsVariants" 
      variant="bordered"
    >
      <template #label="{ tab }">
        <span>{{ tab.label }}</span>
      </template>
    </Tab>
  </div>
  
  <div class="p-4 rounded-lg shadow-inner flex justify-center items-center">
    <Tab 
      :tabs="tabsVariants" 
      variant="underline" 
      activeTextColor="text-blue-500"
    >
      <template #label="{ tab }">
        <span >{{ tab.label }}</span>
      </template>
    </Tab>
  </div>
</div>

---
