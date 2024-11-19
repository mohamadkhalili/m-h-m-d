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

<Pagination v-model="inputValue1" v-model:searchPage="searchValue" v-model:isEditingSearchPage="isEditingSearchPage"/>

```vue
<Pagination v-model="inputValue" v-model:searchPage="searchValue" 
v-model:isEditingSearchPage="isEditingSearchPage"/>
```

## Disable Search Page

**Props:**

- `enableSearchPage`: Set to `false` to deactivate search functionality.

<Pagination v-model="inputValue3" :enableSearchPage="false"/>

```vue
<Pagination v-model="inputValue" :enableSearchPage="false"/>
```

## Left-to-Right Pagination

**Props:**

- `rtl`: Set to `false` for Left-to-Right layout.
- `enableSearchPage`: Disable the search page feature.
<div class="ml-44">
<Pagination v-model="inputValue2" :enableSearchPage="false" :rtl="false"/>
</div>

```vue
<Pagination v-model="inputValue" :enableSearchPage="false" :rtl="false"/>
```

## Set Page Size

**Props:**

- `pageSize`: Defines the number of items per page.

<Pagination v-model="inputValue4" :enableSearchPage="false" :pageSize="10"/>

```vue
<Pagination v-model="inputValue" :enableSearchPage="false" :pageSize="10"/>

```

## Customize Colors

**Props:**

- `color`: Background color of the component.
- `activeColor`: Background color for the active page.
- `textColor`: Text color.
- `activeTextColor`: Text color for the active page.

<Pagination v-model="inputValue5" :enableSearchPage="false" :color="'bg-black'" :activeColor="'bg-indigo-100'" :textColor="'text-indigo-300'" :activeTextColor="'text-black'"/>

```vue
<Pagination v-model="inputValue" :enableSearchPage="false" 
:color="'bg-black'" :activeColor="'bg-indigo-100'" 
:textColor="'text-indigo-300'" :activeTextColor="'text-black'"/>
```

## Adjust Pagination Size

**Props:**

- `size`: Adjusts the size of the pagination.

<Pagination v-model="inputValue6" :enableSearchPage="false" :size="'size-8'"/>

```vue
<Pagination v-model="inputValue" :enableSearchPage="false" 
:size="'size-8'"/>
```

## Rounded Pagination

**Props:**

- `borderRadiusSize`: Specifies border radius (e.g., `rounded`).

<Pagination v-model="inputValue7" :enableSearchPage="false" :borderRadiusSize="'rounded'"/>

```vue
<Pagination v-model="inputValue" :enableSearchPage="false" 
:borderRadiusSize="'rounded'"/>
```

## Set Border Style

**Props:**

- `borderStyle`: Defines border color and width.

<Pagination v-model="inputValue8" :enableSearchPage="false" :borderStyle="'border-emerald-600 border-2'"/>

```vue
<Pagination v-model="inputValue" :enableSearchPage="false" 
:borderStyle="'border-emerald-600 border-2'"/>
```