# Pagination

<script setup>
import { ref } from 'vue'

// If your component is **not** globally registered, uncomment the next line and adjust the path accordingly
// import MyComponent from '@path/to/MyComponent.vue'

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

<div class="ml-44">
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

### Example Usage:
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