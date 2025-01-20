# modal

<script setup lang="ts">
import { ref } from 'vue'

const isModalOpen = ref(false);
const isModalOpen2 = ref(false);
const isModalOpen3 = ref(false);
</script>

## Default Modal

**Props:**

- `v-model`: Binds the modal open/close state.
- `teleport`: Teleports the modal content to the `<body>`.

**Usage:**

- This is the basic modal that opens when the button is clicked.

<Button  @click="isModalOpen = true" buttonClass="w-28 p-2 mt-1" cleaner>Open Modal</button>
<modal v-model="isModalOpen"/>

```vue
<modal v-model="isModalOpen" teleport="body"/>
```

## Modal Closed on Outside Click

**Props:**

- `closeOnOutside`: Closes the modal when clicking outside of it.

**Usage:**

- This modal closes when clicking outside the modal content.

<Button  @click="isModalOpen2 = true" buttonClass="w-28 p-2 mt-1" cleaner>Open Modal</button>
<modal v-model="isModalOpen2" teleport="body" closeOnOutside/>

```vue
<modal v-model="isModalOpen" teleport="body" closeOnOutside/>
```

## Custom class for Modal and Outside of Modal

**Props:**

- `outsideClass`: Sets the class outside of modal.
- `modalClass`: Sets the class of the modal.

**Usage:**

- This modal has custom background and text colors.

<Button  @click="isModalOpen3 = true" buttonClass="w-28 p-2 mt-1" cleaner>Open Modal</button>
<modal v-model="isModalOpen3" teleport="body" outsideClass="backdrop-blur-lg" modalClass="border-2 border-indigo-200 bg-indigo-700"/>

```vue
<modal v-model="isModalOpen3" teleport="body" 
outsideClass="backdrop-blur-lg" 
modalClass="border-2 border-indigo-200 bg-indigo-700"/>
```

### Slots in the Modal Component

Slots in Vue allow you to customize the content inside a component. In this modal component, there are two slots:

1. **`#close` Slot**  
   - **Purpose**: Allows you to define custom content for the close button of the modal.  
   - **Default Behavior**: If not provided, a default close button with an SVG icon (`mdiClose`) is rendered.  
   - **Usage**:

     ```vue
     <template #close>
       <button class="custom-close-button">Close</button>
     </template>
     ```

2. **`#default` Slot**  
   - **Purpose**: Lets you define the main content of the modal.  
   - **Default Behavior**: If not provided, a placeholder paragraph (`This is the modal content`) is displayed.  
   - **Usage**:

     ```vue
     <template #default>
       <p>Your custom modal content goes here!</p>
     </template>
     ```
