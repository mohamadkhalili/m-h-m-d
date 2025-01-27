# Drawer

## Usage

<CodeTabs
  templateCode="
<div class='p-6 rounded-lg shadow-inner flex w-full justify-center'>
  <Button @click='open' class='btn-primary'>Open</Button>
  <Drawer v-model:isOpen='openDrawer' class='bg-gray-200 shadow-xl'>
    <div class='w-full justify-center items-center mt-20 p-2'>
      <h2>Test Drawer</h2>
      Click the close button or action button to close the drawer...
    </div>
    <Button @click='open' buttonClass='m-36'>
      Close
    </Button>
  </Drawer>
</div>
"
  scriptCode="
export default {
data() {
    return {
      openDrawer: false
    }
  },
methods: {
open() {
this.openDrawer = !this.openDrawer
}
}
}
"
/>
<Tab
   class="gap-3 border-[1px] rounded-md w-full mx-auto "
    :tabs="tabs"
    variant="bordered"
    size="sm"
    activeColor="text-blue-500 shadow-blue-500"
  >
    <template #content1>
<div class=" p-6 rounded-lg shadow-inner flex w-full justify-center">
   <Button @click="open" class="btn-primary">Open</Button>
    <Drawer v-model:isOpen="openDrawer" class="bg-gray-200 shadow-xl">
    <div class=" w-full justify-center items-center mt-20 p-2">
    <h2>Test Drawer</h2>
    Click the close button or action button to close the drawer. Clicking outside or pressing the escape key won't close it.
    </div>
      <Button @click="open" buttonClass="m-36">
            Close
          </Button>
    </Drawer>
    </div>

</template>

  <template #content2>

  ```md
const openDrawer = ref(false);
const open = () => {
  openDrawer.value = !openDrawer.value;
};

<Button @click="open" class="btn-primary">Open</Button>
    <Drawer v-model:isOpen="openDrawer" class="bg-gray-800 shadow-xl text-white">
    <div class=" w-full justify-center items-center mt-20 p-2">
    <h2>Test Drawer</h2>
    Click the close button or action button to close the drawer. Clicking outside or pressing the escape key won't close it.
    </div>
      <Button @click="open" buttonClass="m-36">
            Close
          </Button>
    </Drawer>
```

  </template>
</Tab>

## Customize

<Tab
   class="gap-3 border-[1px] rounded-md w-full mx-auto "
    :tabs="tabs"
    variant="bordered"
    size="sm"
    activeColor="text-blue-500 shadow-blue-500"
  >
    <template #content1>
<div class=" p-6 rounded-lg shadow-inner flex w-full justify-center">
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

</template>

  <template #content2>

  ```md
  <script setup>
import { ref } from 'vue';

const isOpenRight = ref(false);
const toggleDrawer = () => {
  isOpenRight.value = !isOpenRight.value;
};


</script>

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

```

  </template>
</Tab>

## Sides

<Tab
   class="gap-3 border-[1px] rounded-md w-full mx-auto "
   :tabs="[
     { label: 'Right Drawer', value: 1, content: '' },
     { label: 'Left Drawer', value: 2, content: '' },
     { label: 'Top Drawer', value: 3, content: '' },
     { label: 'Bottom Drawer', value: 4, content: '' },
     { label: 'Code', value: 5, content: '' },
   ]"
   variant="bordered"
   size="sm"
   activeColor="text-blue-500 shadow-blue-500"
>
  <template #content1>
    <div class="p-6 rounded-lg shadow-inner flex w-full justify-center">
      <Button @click="toggleDrawerRight" class="btn-primary">Open Right </Button>
      <Drawer v-model:isOpen="isOpenRight" side="right">
        <div class="flex flex-col h-full bg-gray-100">
          <div class="flex justify-between items-center px-4 py-3 border-b border-gray-300">
            <h2 class="font-semibold text-gray-700">Menu</h2>
            <button @click="toggleDrawerRight" class="text-gray-500 hover:text-gray-700 text-xl bg-transparent">✖</button>
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
  </template>

  <template #content2>
    <div class="p-6 rounded-lg shadow-inner flex w-full justify-center">
      <Button @click="toggleDrawerLeft" class="btn-primary">Open Left </Button>
      <Drawer v-model:isOpen="isOpenLeft" side="left">
        <div class="flex flex-col h-full bg-gray-100">
          <div class="flex justify-between items-center px-4 py-3 border-b border-gray-300">
            <h2 class="font-semibold text-gray-700">Menu</h2>
            <button @click="toggleDrawerLeft" class="text-gray-500 hover:text-gray-700 text-xl bg-transparent">✖</button>
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
  </template>

  <template #content3>
    <div class="p-6 rounded-lg shadow-inner flex w-full justify-center">
      <Button @click="toggleDrawerTop" class="btn-primary">Open Top </Button>
      <Drawer v-model:isOpen="isOpenTop" side="top">
        <div class="flex flex-col h-full bg-gray-100">
          <div class="flex justify-between items-center px-4 py-3 border-b border-gray-300">
            <h2 class="font-semibold text-gray-700">Menu</h2>
            <button @click="toggleDrawerTop" class="text-gray-500 hover:text-gray-700 text-xl bg-transparent">✖</button>
          </div>
          <div class="flex flex-row flex-grow px-4 py-3 space-y-4">
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
  </template>

  <template #content4>
    <div class="p-6 rounded-lg shadow-inner flex w-full justify-center">
      <Button @click="toggleDrawerBottom" class="btn-primary">Open Bottom </Button>
      <Drawer v-model:isOpen="isOpenBottom" side="bottom">
        <div class="flex flex-col h-full bg-gray-100">
          <div class="flex justify-between items-center px-4 py-3 border-b border-gray-300">
            <h2 class="font-semibold text-gray-700">Menu</h2>
            <button @click="toggleDrawerBottom" class="text-gray-500 hover:text-gray-700 text-xl bg-transparent">✖</button>
          </div>
          <div class="flex flex-row flex-grow px-4 py-3 space-y-4">
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
  </template>

  <template #content5>

  ```md
<Button @click="toggleDrawerBottom" class="btn-primary">Open Bottom Drawer</Button>
<Drawer :isOpen="isOpenBottom" side="bottom" > you can Change it
Slots...
 </Drawer>
```

  </template>

</Tab>

## Primary Drawer Component Features

| **Feature**          | **Description**                                                                                                         | **Usage**                                                                                                 |
|----------------------|-------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------|
| **Visibility**        | Controls whether the drawer is visible or hidden. Typically toggled by clicking a button or swiping.                    | Use the `v-model` or `visible` prop to bind visibility state.                                               |
| **Position**          | Specifies where the drawer appears on the screen (left, right, top, bottom).                                           | Use the `position` prop (e.g., `left`, `right`, `top`, `bottom`) to control placement.                    |
| **Size**              | Controls the width or height of the drawer. Typically set to a specific value (e.g., `250px`, `30%`).                   | Use the `width` or `height` prop to define the drawer's size.                                              |
| **Close on Outside**  | Determines if the drawer should close when clicking outside the drawer area.                                            | Use the `closeOnClickOutside` prop to enable closing when clicking outside.                                |
| **Swipe to Close**    | Option to allow the drawer to be closed by swiping, typically used in mobile view.                                       | Use the `swipeClose` prop to enable swipe-to-close behavior.                                                |
| **Transition**        | Specifies transition effects when opening and closing the drawer.                                                      | Use the `transition` prop to define the opening/closing animation.                                         |
| **Backdrop**          | Display a backdrop overlay when the drawer is open, which obscures the content behind the drawer.                        | Use the `backdrop` prop to enable the backdrop.                                                            |
| **Fixed**             | Allows the drawer to remain fixed on the screen, even when scrolling.                                                     | Use the `fixed` prop to make the drawer stay in place while scrolling.                                     |
| **Header and Footer** | Allows adding custom header and footer sections within the drawer for additional content or actions.                    | Use the `header` and `footer` slots to add content inside the drawer.                                       |

<script setup>
import { ref } from 'vue';

const isOpenRight = ref(false);
const openDrawer = ref(false);
const isOpenLeft = ref(false);
const isOpenTop = ref(false);
const isOpenBottom = ref(false);

const toggleDrawerRight = () => {
  isOpenRight.value = !isOpenRight.value;
};

const toggleDrawerLeft = () => {
  isOpenLeft.value = !isOpenLeft.value;
};

const toggleDrawerTop = () => {
  isOpenTop.value = !isOpenTop.value;
};

const toggleDrawerBottom = () => {
  isOpenBottom.value = !isOpenBottom.value;
};
const toggleDrawer = () => {
  isOpenRight.value = !isOpenRight.value;
};
const open = () => {
  openDrawer.value = !openDrawer.value;
};

const tabs = [
  { label: 'UI', value: 1, content: '' },
  { label: 'Code', value: 2, content: '' },
];
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
