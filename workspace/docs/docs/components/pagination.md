# pagination

## Default pagination

**Props:**

- `v-model`: Binds the current page number.
- `v-model:searchPage`: Manages the search functionality.
- `v-model:isEditingSearchPage`: Indicates if the search input is editable.

<CodeTabs
  templateCode="
<pagination v-model='inputValue' v-model:searchPage='searchValue' v-model:isEditingSearchPage='isEditingSearchPage'/>
"
scriptCode="
export default {
data() {
    return {
      inputValue : undefined,
      searchValue : undefined,
      isEditingSearchPage : true
    }
  },
}
"
/>

## Disable Search Page

**Props:**

- `enableSearchPage`: Set to `false` to deactivate search functionality.

<CodeTabs
  templateCode="
<pagination v-model='inputValue' :enableSearchPage='searchEnabled'/>
"
scriptCode="
export default {
data() {
    return {
      inputValue : undefined,
      searchEnabled : false
    }
  },
}
"
/>

## Left-to-Right pagination

**Props:**

- `rtl`: Set to `false` for Left-to-Right layout.
- `enableSearchPage`: Disable the search page feature.

<CodeTabs
  templateCode="
<pagination v-model='inputValue' :enableSearchPage='searchEnabled' :rtl='rtlValue'/>
"
scriptCode="
export default {
data() {
    return {
      inputValue : undefined,
      searchEnabled : false,
      rtlValue : false
    }
  },
}
"
/>

## Set Page Size

**Props:**

- `pageSize`: Defines the number of items per page.

<CodeTabs
  templateCode="
<pagination v-model='inputValue' :enableSearchPage='searchEnabled' :pageSize='pageSize'/>
"
scriptCode="
export default {
data() {
    return {
      inputValue : undefined,
      searchEnabled : false,
      pageSize : 10
    }
  },
}
"
/>

## Customize Classes

**Props:**

- `activeClass`: Custom classes applied to the active page button.
- `onActiveClass`: Custom classes applied to non-active page buttons.
- `separatorClass`: Custom classes applied to separators (e.g., `...` between pages).
- `buttonClass`: Custom classes applied to all pagination buttons.

### Example Usage

<CodeTabs
  templateCode="
<pagination v-model='inputValue' :enableSearchPage='searchValue' :activeClass='activeClass' :onActiveClass='onActiveClass' :separatorClass='separatorClass' :buttonClass='buttonClass' />
"
scriptCode="
export default {
data() {
    return {
      inputValue : undefined,
      searchValue : false,
      activeClass : 'bg-indigo-700 hover:bg-indigo-600 size-11 rounded-lg shadow-lg',
      onActiveClass : 'bg-indigo-200 hover:bg-indigo-300 rounded-lg shadow-lg',
      separatorClass : 'text-emerald-500',
      buttonClass : 'size-11 bg-indigo-700 hover:bg-indigo-600 rounded-lg shadow-lg'
    }
  },
}
"
/>

## Introduction to pagination with Slots in Vue

pagination is a UI component that divides content into discrete pages, allowing users to navigate efficiently. This implementation is designed to be highly customizable through Vue's slots, enabling developers to define specific behaviors and appearances for various pagination elements.

### Slots in the pagination Component

The pagination component utilizes multiple slots to give flexibility in customizing the appearance and functionality of its elements. Below is an explanation of the available slots:

1. **`#superPrev` Slot**
   - **Purpose**: Customize the button for navigating to the first page or skipping multiple pages backward.
   - **Default Behavior**: If not provided, a button with a default icon (`mdiChevronDoubleLeft` or `mdiChevronDoubleRight` for RTL) is rendered.
   - **Usage**:

     ```vue
     <template #superPrev="{ disabled }">
       <button :disabled="disabled" class="custom-super-prev">
         Go to Start
       </button>
     </template>
     ```

2. **`#prev` Slot**
   - **Purpose**: Customize the button for navigating to the previous page.
   - **Default Behavior**: If not provided, a button with a default icon (`mdiChevronLeft` or `mdiChevronRight` for RTL) is rendered.
   - **Usage**:

     ```vue
     <template #prev="{ disabled }">
       <button :disabled="disabled" class="custom-prev">
         Previous
       </button>
     </template>
     ```

3. **`#default` Slot**
   - **Purpose**: Customize the appearance of individual page buttons.
   - **Props Passed**:
     - `isCurrentPage`: Boolean indicating if the button represents the current page.
     - `isActive`: Boolean indicating if the button is active.
     - `page`: Number of the page represented by the button.
   - **Default Behavior**: Renders the current page number with special styling or a separator (`...`) if applicable.
   - **Usage**:

     ```vue
     <template #default="{ isCurrentPage, isActive, page }">
       <button
         v-if="page !== -1"
         :class="isCurrentPage ? 'current-page' : 'page-button'"
       >
         {{ page }}
       </button>
       <span v-else class="separator">...</span>
     </template>
     ```

4. **`#next` Slot**
   - **Purpose**: Customize the button for navigating to the next page.
   - **Default Behavior**: If not provided, a button with a default icon (`mdiChevronRight` or `mdiChevronLeft` for RTL) is rendered.
   - **Usage**:

     ```vue
     <template #next="{ disabled }">
       <button :disabled="disabled" class="custom-next">
         Next
       </button>
     </template>
     ```

5. **`#superNext` Slot**
   - **Purpose**: Customize the button for navigating to the last page or skipping multiple pages forward.
   - **Default Behavior**: If not provided, a button with a default icon (`mdiChevronDoubleRight` or `mdiChevronDoubleLeft` for RTL) is rendered.
   - **Usage**:

     ```vue
     <template #superNext="{ disabled }">
       <button :disabled="disabled" class="custom-super-next">
         Go to End
       </button>
     </template>
     ```

6. **`#searchPage` Slot**
   - **Purpose**: Customize the search input or button for jumping to a specific page.
   - **Props Passed**:
     - `enabled`: Boolean indicating if the search feature is enabled.
   - **Default Behavior**: Displays an input field or search button based on the `isEditingSearchPage` state.
   - **Usage**:

     ```vue
     <template #searchPage="{ enabled }">
       <div v-if="enabled" class="custom-search">
         <input
           v-model="searchValue"
           placeholder="Enter page number"
           class="search-input"
         />
       </div>
     </template>
     ```
