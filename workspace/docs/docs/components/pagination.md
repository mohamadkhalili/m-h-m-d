# Pagination

<script setup>
import { ref } from 'vue'

const inputValue1 = ref()
const inputValue2 = ref()
const inputValue3 = ref()
const inputValue4 = ref()
const inputValue5 = ref()
const inputValue6 = ref()
const inputValue7 = ref()
const inputValue8 = ref()
const inputValue9 = ref()
const inputValue10 = ref()
const searchValue = ref()
const isEditingSearchPage = ref()
</script>

## Default Pagination

**Props:**

- `v-model`: Binds the current page number.
- `v-model:searchPage`: Manages the search functionality.
- `v-model:isEditingSearchPage`: Indicates if the search input is editable.
<br>

<br>
<Pagination v-model="inputValue1" v-model:searchPage="searchValue" v-model:isEditingSearchPage="isEditingSearchPage"/>
<br>

```vue
<Pagination v-model="inputValue" v-model:searchPage="searchValue" 
v-model:isEditingSearchPage="isEditingSearchPage"/>
```

## Disable Search Page

**Props:**

- `enableSearchPage`: Set to `false` to deactivate search functionality.
<br>

<br>
<Pagination v-model="inputValue3" :enableSearchPage="false"/>
<br>

```vue
<Pagination v-model="inputValue" :enableSearchPage="false"/>
```

## Left-to-Right Pagination

**Props:**

- `rtl`: Set to `false` for Left-to-Right layout.
- `enableSearchPage`: Disable the search page feature.
<br>

<br>

<div >
<Pagination v-model="inputValue2" :enableSearchPage="false" :rtl="false"/>
</div>
<br>

```vue
<Pagination v-model="inputValue" :enableSearchPage="false" :rtl="false"/>
```

## Set Page Size

**Props:**

- `pageSize`: Defines the number of items per page.
<br>

<br>
<Pagination v-model="inputValue4" :enableSearchPage="false" :pageSize="10"/>
<br>

```vue
<Pagination v-model="inputValue" :enableSearchPage="false" :pageSize="10"/>

```

## Customize Classes

**Props:**

- `activeClass`: Custom classes applied to the active page button.
- `onActiveClass`: Custom classes applied to non-active page buttons.
- `separatorClass`: Custom classes applied to separators (e.g., `...` between pages).
- `buttonClass`: Custom classes applied to all pagination buttons.

### Example Usage

<br>
<br>
<Pagination v-model="inputValue5" :enableSearchPage="false" :activeClass="'bg-emerald-500 size-11 rounded-lg shadow-lg'" :onActiveClass="'rounded-lg shadow-lg'" :separatorClass="'text-emerald-500'" :buttonClass="'size-11 rounded-lg shadow-lg'" />

<br>

```vue
<Pagination v-model="inputValue5" :enableSearchPage="false" 
:activeClass="'bg-emerald-500 size-11 rounded-lg shadow-lg'" 
:onActiveClass="'rounded-lg shadow-lg'" 
:separatorClass="'text-emerald-500'" 
:buttonClass="'size-11 rounded-lg shadow-lg'" />
```

## Introduction to Pagination with Slots in Vue

Pagination is a UI component that divides content into discrete pages, allowing users to navigate efficiently. This implementation is designed to be highly customizable through Vue's slots, enabling developers to define specific behaviors and appearances for various pagination elements.

### Slots in the Pagination Component

The Pagination component utilizes multiple slots to give flexibility in customizing the appearance and functionality of its elements. Below is an explanation of the available slots:

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
