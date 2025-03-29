# Breadcrumb

## Default Breadcrumb

Improved the explanation for the default breadcrumb and corrected the inconsistent structure in template slots.

**Props:**

- `v-model`: Binds the current item value.

<CodeTabs
  templateCode="
<div class='flex flex-col items-center justify-center'>
  <Breadcrumb v-model='breadcrumbValue'/>
</div>
"
scriptCode="
export default {
data() {
    return {
      breadcrumbValue : '',
    }
  }
}
"
/>

## Breadcrumb with Slot for Separator

Added consistent formatting and improved the explanation for the separator slot.

<CodeTabs
  templateCode="
<div class='flex flex-col items-center justify-center'>
  <Breadcrumb v-model='breadcrumbValue'>
    <template #separator> &nbsp> </template>
  </Breadcrumb>
</div>
"
scriptCode="
export default {
data() {
    return {
      breadcrumbValue : '',
    }
  }
}
"
/>

## With Custom Items

Clarified the usage of the items prop and enhanced alignment.

**Props:**

- `items`: Accepts an array of breadcrumb items with title and disable properties.

<CodeTabs
  templateCode="
<div class='flex flex-col items-center justify-center'>
  <Breadcrumb v-model='breadcrumbValue' :items='items'/>
</div>
"
scriptCode="
export default {
data() {
    return {
      breadcrumbValue : '',
      items: [
        { title: 'tab', disable: false },
        { title: 'pagination', disable: true },
        { title: 'modal', disable: false },
        { title: 'menu', disable: false }
      ]
    }
  }
}
"
/>

## Custom Class

The breadcrumb component with custom active, onActive, and disabled classes for enhanced customization.

**Props:**

- `activeClass`: Specifies additional classes applied to active items.
- `onActiveClass`: Specifies additional classes applied to onActive items.
- `disableClass`: Class applied to disabled breadcrumb items.
- `separatorClass`: Specifies additional classes applied to separator.

<CodeTabs
  templateCode="
<div class='flex flex-col items-center justify-center'>
  <Breadcrumb v-model='breadcrumbValue' activeClass='text-indigo-700 hover:text-indigo-600' onActiveClass='text-indigo-300 hover:text-indigo-400' disableClass='text-indigo-100'>
    <template #separator> &nbsp> </template>
  </Breadcrumb>
</div>
"
scriptCode="
export default {
data() {
    return {
      breadcrumbValue : '',
    }
  }
}
"
/>
