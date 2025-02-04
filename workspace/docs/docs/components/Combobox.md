# Combo Box

## Default ComboBox

**Props:**

- `v-model`: Binds the selected value of the ComboBox.
- `items` : An array of items to display in the dropdown list.

**Usage:**

- The ComboBox allows users to select an item from a dropdown list. The v-model binds the selected item, and the items prop populates the dropdown options.

<CodeTabs
  templateCode="
<ComboBox v-model='modelValue' :items='items' />
<p>selected item: {{modelValue}}</p>
"
scriptCode="
export default {
data() {
    return {
      modelValue : undefined,
      items : ['first choice', 'second choice', 'thrid choice', 'forth choice', 'fifth choice'],
    }
  }
}
"
/>

## Multiple ComboBox

**Props:**

- `multiple`: A Boolean to enable multiple selections. When set to true, v-model will bind to an array of selected items.

**Usage:**

- Setting the multiple prop enables multi-selection mode.

<CodeTabs
  templateCode="
<ComboBox v-model='modelValue' :items='items' multiple/>
<p>selected item: {{modelValue}}</p>
"
scriptCode="
export default {
data() {
    return {
      modelValue : undefined,
      items : ['first choice', 'second choice', 'thrid choice', 'forth choice', 'fifth choice'],
    }
  }
}
"
/>

## Enable Chip ComboBox

**Props:**

- `enableChip`: A Boolean that, when set to true, enables chips to display the selected items.

**Usage:**

- with enableChip, the selected items are shown as chips.

<CodeTabs
  templateCode="
<ComboBox v-model='modelValue' :items='items' multiple enableChip/>
<p>selected item: {{modelValue}}</p>
"
scriptCode="
export default {
data() {
    return {
      modelValue : undefined,
      items : ['first choice', 'second choice', 'thrid choice', 'forth choice', 'fifth choice'],
    }
  }
}
"
/>

## Custom Class ComboBox

**Props:**

- `containerClass`: A custom CSS class for the container Input box.
- `chipContainerClass`: A custom CSS class for the chip container.
- `chipClass`:  A custom CSS class for each chip.
- `chipCloseClass`:  A custom CSS class for the chip close button.
- `inputClass`: A custom CSS class for the input field.
- `dropdownClass`: A custom CSS class for the dropdown menu.
- `dropdownItemClass`: A custom CSS class for each dropdown item.
- `dropdownItemActiveClass`: A custom CSS class for the active dropdown item.

**Usage:**

- The custom class props allow you to style various parts of the ComboBox, such as the container, input field, chips, and dropdown items.

<CodeTabs
  templateCode="
<ComboBox v-model='modelValue' :items='items' multiple enableChip chipClass='bg-indigo-700' dropdownItemClass='bg-indigo-200 hover:bg-indigo-300' dropdownItemActiveClass='bg-indigo-700 hover:bg-indigo-600'/>
<p>selected item: {{modelValue}}</p>
"
scriptCode="
export default {
data() {
    return {
      modelValue : undefined,
      items : ['first choice', 'second choice', 'thrid choice', 'forth choice', 'fifth choice'],
    }
  }
}
"
/>
