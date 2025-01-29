# modal

## Default Modal

**Props:**

- `v-model`: Binds the modal open/close state.
- `teleport`: Teleports the modal content to the `<body>`.

<CodeTabs
  templateCode="
<div class='flex items-center justify-center'>
  <Button  @click='openModal' buttonClass='buttonClass' cleaner>Open Modal</button>
</div>
<modal v-model='isModalOpen'/>
"
scriptCode="
export default {
data() {
    return {
      isModalOpen : false,
      searchValue : undefined,
      buttonClass : 'w-28 p-2 mt-1'
    }
  },
  methods: {
    openModal() {
      this.isModalOpen = !this.isModalOpen;
    }
  }
}
"
/>

## Modal Closed on Outside Click

**Props:**

- `closeOnOutside`: Closes the modal when clicking outside of it.

<CodeTabs
  templateCode="
<div class='flex items-center justify-center'>
  <Button  @click='openModal' buttonClass='buttonClass' cleaner>Open Modal</button>
</div>
<modal v-model='isModalOpen' teleport='body' closeOnOutside/>
"
scriptCode="
export default {
data() {
    return {
      isModalOpen : false,
      searchValue : undefined,
      buttonClass : 'w-28 p-2 mt-1'
    }
  },
  methods: {
    openModal() {
      this.isModalOpen = !this.isModalOpen;
    }
  }
}
"
/>

## Custom class for Modal and Outside of Modal

**Props:**

- `outsideClass`: Sets the class outside of modal.
- `modalClass`: Sets the class of the modal.

<CodeTabs
  templateCode="
<div class='flex items-center justify-center'>
  <Button  @click='openModal' buttonClass='buttonClass' cleaner>Open Modal</button>
</div>
<modal v-model='isModalOpen' teleport='body' :outsideClass='outsideClass' :modalClass='modalClass'/>
"
scriptCode="
export default {
data() {
    return {
      isModalOpen : false,
      searchValue : undefined,
      buttonClass : 'w-28 p-2 mt-1',
      outsideClass : 'backdrop-blur-lg',
      modalClass : 'border-2 border-indigo-200 bg-indigo-700'
    }
  },
  methods: {
    openModal() {
      this.isModalOpen = !this.isModalOpen;
    }
  }
}
"
/>

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
