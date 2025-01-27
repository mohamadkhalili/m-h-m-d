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

## Customize

<CodeTabs
  templateCode="
  <div class=' p-6 rounded-lg shadow-inner flex w-full justify-center'>
  <Button @click='toggleDrawer' class='btn-primary'>Open</Button>
    <Drawer v-model:isOpen='isOpenRight'>
      <div class='flex flex-col h-full bg-gray-100'>
        <div class='flex justify-between items-center px-4 py-3 border-b border-gray-300'>
          <h2 class=' font-semibold text-gray-700'>Menu</h2>
          <button @click='toggleDrawer' class='text-gray-500 hover:text-gray-700 text-xl bg-transparent'>
            ✖
          </button>
        </div>
       <div class='flex flex-col flex-grow px-4 py-3 space-y-4'>
  <p href='#' class='cursor-pointer flex items-center text-gray-700 text-lg px-3 py-2 rounded-lg hover:bg-blue-100 hover:text-blue-600 transition'>
    <span>🏠</span> Home
  </p>
  <p href='#' class='cursor-pointer flex items-center text-gray-700 text-lg px-3 py-2 rounded-lg hover:bg-blue-100 hover:text-blue-600 transition'>
    <span>📄</span> About
  </p>
  <p href='#' class='cursor-pointer flex items-center text-gray-700 text-lg px-3 py-2 rounded-lg hover:bg-blue-100 hover:text-blue-600 transition'>
    <span>📚</span> Content
  </p>
  <p href='#' class='cursor-pointer flex items-center text-gray-700 text-lg px-3 py-2 rounded-lg hover:bg-blue-100 hover:text-blue-600 transition'>
    <span>📞</span> Contact
  </p>
  <p href='#' class='cursor-pointer flex items-center text-gray-700 text-lg px-3 py-2 rounded-lg hover:bg-blue-100 hover:text-blue-600 transition'>
    <span>💸</span> Support
  </p>
</div>
        <div class='flex justify-between items-center px-4 py-3 border-t border-gray-300 bg-gray-200'>
          <Button class='btn-secondary'>Help</Button>
          <Button class='btn-secondary'>Logout</Button>
        </div>
      </div>
    </Drawer>
</div>
"
  scriptCode="
export default {
  data() {
    return {
      isOpenRight: false,
    };
  },
  methods: {
    toggleDrawer() {
      this.isOpenRight = !this.isOpenRight;
    },
  },
};
"
/>



## Top Side

<CodeTabs
  templateCode="
 <div class='p-6 rounded-lg shadow-inner flex w-full justify-center'>
      <Button @click='toggleDrawerTop' class='btn-primary'>Open Top </Button>
      <Drawer v-model:isOpen='isOpenTop' side='top'>
        <div class='flex flex-col h-full bg-gray-100'>
          <div class='flex justify-between items-center px-4 py-3 border-b border-gray-300'>
            <h2 class='font-semibold text-gray-700'>Menu</h2>
            <button @click='toggleDrawerTop' class='text-gray-500 hover:text-gray-700 text-xl bg-transparent'>✖</button>
          </div>
          <div class='flex flex-row flex-grow px-4 py-3 space-y-4'>
            <p href='#' class='cursor-pointer flex items-center text-gray-700 text-lg px-3 py-2 rounded-lg hover:bg-blue-100 hover:text-blue-600 transition'>
              <span>🏠</span> Home
            </p>
            <p href='#' class='cursor-pointer flex items-center text-gray-700 text-lg px-3 py-2 rounded-lg hover:bg-blue-100 hover:text-blue-600 transition'>
              <span>📄</span> About
            </p>
            <p href='#' class='cursor-pointer flex items-center text-gray-700 text-lg px-3 py-2 rounded-lg hover:bg-blue-100 hover:text-blue-600 transition'>
              <span>📚</span> Content
            </p>
            <p href='#' class='cursor-pointer flex items-center text-gray-700 text-lg px-3 py-2 rounded-lg hover:bg-blue-100 hover:text-blue-600 transition'>
              <span>📞</span> Contact
            </p>
            <p href='#' class='cursor-pointer flex items-center text-gray-700 text-lg px-3 py-2 rounded-lg hover:bg-blue-100 hover:text-blue-600 transition'>
              <span>💸</span> Support
            </p>
          </div>
          <div class='flex justify-between items-center px-4 py-3 border-t border-gray-300 bg-gray-200'>
            <Button class='btn-secondary'>Help</Button>
            <Button class='btn-secondary'>Logout</Button>
          </div>
        </div>
      </Drawer>
    </div>
"
  scriptCode="
export default {
  data() {
    return {
      isOpenTop: false,
    };
  },
  methods: {
    toggleDrawerTop() {
      this.isOpenTop = !this.isOpenTop;
    },
  },
};
"
/>

## Bottom Side

<CodeTabs
  templateCode="
  <div class='p-6 rounded-lg shadow-inner flex w-full justify-center'>
      <Button @click='toggleDrawerBottom' class='btn-primary'>Open Bottom </Button>
      <Drawer v-model:isOpen='isOpenBottom' side='bottom'>
        <div class='flex flex-col h-full bg-gray-100'>
          <div class='flex justify-between items-center px-4 py-3 border-b border-gray-300'>
            <h2 class='font-semibold text-gray-700'>Menu</h2>
            <button @click='toggleDrawerBottom' class='text-gray-500 hover:text-gray-700 text-xl bg-transparent'>✖</button>
          </div>
          <div class='flex flex-row flex-grow px-4 py-3 space-y-4'>
            <p href='#' class='cursor-pointer flex items-center text-gray-700 text-lg px-3 py-2 rounded-lg hover:bg-blue-100 hover:text-blue-600 transition'>
              <span>🏠</span> Home
            </p>
            <p href='#' class='cursor-pointer flex items-center text-gray-700 text-lg px-3 py-2 rounded-lg hover:bg-blue-100 hover:text-blue-600 transition'>
              <span>📄</span> About
            </p>
            <p href='#' class='cursor-pointer flex items-center text-gray-700 text-lg px-3 py-2 rounded-lg hover:bg-blue-100 hover:text-blue-600 transition'>
              <span>📚</span> Content
            </p>
            <p href='#' class='cursor-pointer flex items-center text-gray-700 text-lg px-3 py-2 rounded-lg hover:bg-blue-100 hover:text-blue-600 transition'>
              <span>📞</span> Contact
            </p>
            <p href='#' class='cursor-pointer flex items-center text-gray-700 text-lg px-3 py-2 rounded-lg hover:bg-blue-100 hover:text-blue-600 transition'>
              <span>💸</span> Support
            </p>
          </div>
          <div class='flex justify-between items-center px-4 py-3 border-t border-gray-300 bg-gray-200'>
            <Button class='btn-secondary'>Help</Button>
            <Button class='btn-secondary'>Logout</Button>
          </div>
        </div>
      </Drawer>
    </div>
"
  scriptCode="
export default {
  data() {
    return {
      isOpenBottom: false,
    };
  },
  methods: {
    toggleDrawerBottom() {
      this.isOpenBottom = !this.isOpenBottom;
    },
  },
};
"
/>

## Left Side

<CodeTabs
  templateCode="
 <div class='p-6 rounded-lg shadow-inner flex w-full justify-center'>
      <Button @click='toggleDrawerLeft' class='btn-primary'>Open Left </Button>
      <Drawer v-model:isOpen='isOpenLeft' side='left'>
        <div class='flex flex-col h-full bg-gray-100'>
          <div class='flex justify-between items-center px-4 py-3 border-b border-gray-300'>
            <h2 class='font-semibold text-gray-700'>Menu</h2>
            <button @click='toggleDrawerLeft' class='text-gray-500 hover:text-gray-700 text-xl bg-transparent'>✖</button>
          </div>
          <div class='flex flex-col flex-grow px-4 py-3 space-y-4'>
            <p href='#' class='cursor-pointer flex items-center text-gray-700 text-lg px-3 py-2 rounded-lg hover:bg-blue-100 hover:text-blue-600 transition'>
              <span>🏠</span> Home
            </p>
            <p href='#' class='cursor-pointer flex items-center text-gray-700 text-lg px-3 py-2 rounded-lg hover:bg-blue-100 hover:text-blue-600 transition'>
              <span>📄</span> About
            </p>
            <p href='#' class='cursor-pointer flex items-center text-gray-700 text-lg px-3 py-2 rounded-lg hover:bg-blue-100 hover:text-blue-600 transition'>
              <span>📚</span> Content
            </p>
            <p href='#' class='cursor-pointer flex items-center text-gray-700 text-lg px-3 py-2 rounded-lg hover:bg-blue-100 hover:text-blue-600 transition'>
              <span>📞</span> Contact
            </p>
            <p href='#' class='cursor-pointer flex items-center text-gray-700 text-lg px-3 py-2 rounded-lg hover:bg-blue-100 hover:text-blue-600 transition'>
              <span>💸</span> Support
            </p>
          </div>
          <div class='flex justify-between items-center px-4 py-3 border-t border-gray-300 bg-gray-200'>
            <Button class='btn-secondary'>Help</Button>
            <Button class='btn-secondary'>Logout</Button>
          </div>
        </div>
      </Drawer>
    </div>
"
  scriptCode="
export default {
  data() {
    return {
      isOpenLeft: false,
    };
  },
  methods: {
    toggleDrawerLeft() {
      this.isOpenLeft = !this.isOpenLeft;
    },
  },
};
"
/>



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
| **Header and Footer** | Allows adding custom header and footer sections within the drawer for additional content or actions.                    | Use the `header` and `footer` Outside**  | Determines if the drawer should close when clicking outside the drawer area.                                            | Use the `closeOnClickOutside` prop to enable closing when clicking outside.                                |
| **Swipe to Close**    | Option to allow the drawer to be closed by swiping, typically used in mobile view.                                       | Use the `swipeClose` prop to enable swipe-to-close behavior.                                                |
| **Transition**        | Specifies transition effects when opening and closing the drawer.                                                      | Use the `transition` prop to define the opening/closing animation.                                         |
| **Backdrop**          | Display a backdrop overlay when the drawer is open, which obscures the content behind the drawer.                        | Use the `backdrop` prop to enable the backdrop.                                                            |
| **Fixed**             | Allows the drawer to remain fixed on the screen, even when scrolling.                                                     | Use the `fixed` prop to make the drawer stay in place while scrolling.                                     |
| **Header and Footer** | Allows adding custom header and footer sections within the drawer for additional content or actions.                    | Use the `header` and `footer` slots to add content inside the drawer.                                       |

