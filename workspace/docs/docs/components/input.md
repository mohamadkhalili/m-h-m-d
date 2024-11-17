## Input

Easily customize and use the Input component with various properties like `color`, `size`, `variant`, and more.

---

## Input with Custom Effect

<div class="p-6 rounded-lg shadow-inner flex justify-center items-center">
  
<Input v-model="inputValue" title="Custom Input" />


</div>

---

**Code**
```md

<Input v-model="inputValue" title="Custom Input" />

```


## Colors

Customize the input colors using the `color` prop. Below are examples of various color options:

<div class="grid grid-cols-2 gap-4">
  <div class="flex items-center justify-between space-x-4">
    <Input v-model="inputValueDefault" color="default" title="default" />
   
  </div>
  <div class="flex items-center justify-between space-x-4">
    <Input v-model="inputValuePrimary" color="primary" title="primary" />

  </div>
  <div class="flex items-center justify-between space-x-4">
    <Input v-model="inputValueError" color="error" title="error" />
  
  </div>
  <div class="flex items-center justify-between space-x-4">
    <Input v-model="inputValueWarning" color="warning" title="warning" />

  </div>
  <div class="flex items-center justify-between space-x-4">
    <Input v-model="inputValueSecondary" color="secondary" title="secondary" />
   
  </div>
  <div class="flex items-center justify-between space-x-4">
    <Input v-model="inputValueTransparent" color="transparent" title="transparent" />
   
  </div>
</div>

---

## Disable

You can disable the Input component using the `isDisabled` prop.

<div class="p-6 rounded-lg shadow-inner flex justify-center items-center">
  <div class="flex items-center justify-between w-full max-w-md space-x-4">
    <Input v-model="inputValueDisable" color="secondary" title="Disabled" isDisabled />
    <span class="text-center">isDisabled</span>
  </div>
</div>

---

## Read Only

Set the Input component to read-only mode using the `readonly` prop.

<div class="p-6 rounded-lg shadow-inner flex justify-center items-center">
  <div class="flex items-center justify-between w-full max-w-md space-x-4">
    <Input v-model="inputValueReadonly" color="primary" readonly title="ReadOnly" />
    <span class="text-center">readonly</span>
  </div>
</div>

---

## Variants

Apply different styles to the Input component using the `variant` prop. Below are examples:

<div class="grid grid-cols-2 gap-4">
  <div class="flex items-center justify-between space-x-4">
    <Input variant="faded" title="faded" />

  </div>
  <div class="flex items-center justify-between space-x-4">
    <Input variant="bordered" title="bordered" />
 
  </div>
  <div class="flex items-center justify-between space-x-4">
    <Input variant="shadow" title="shadow" />

  </div>
  <div class="flex items-center justify-between space-x-4">
    <Input variant="underline" title="underline" />
  
  </div>
  <div class="flex items-center justify-between space-x-4">
    <Input variant="flat" title="flat" />
    
  </div>
</div>

---

```md
<Input variant="faded" title="faded" />
<Input variant="bordered" title="bordered" />
<Input variant="shadow" title="shadow" />
<Input variant="underline" title="underline" />
<Input variant="flat" title="flat" />

```

## Sizes

Choose the size of the Input component using the `size` prop.

<div class="grid grid-cols-2 gap-4">
  <div class="flex items-center justify-between space-x-4">
    <Input variant="shadow" title="xl size" size="xl" />
  
  </div>
  <div class="flex items-center justify-between space-x-4">
    <Input variant="shadow" title="lg size" size="lg" />
 
  </div>
  <div class="flex items-center justify-between space-x-4">
    <Input variant="shadow" title="md size" size="md" />
  
  </div>
  <div class="flex items-center justify-between space-x-4">
    <Input variant="shadow" title="sm size" size="sm" />
  
  </div>
</div>

---

## RTL

You can align text for Right-to-Left languages using the `rtl` prop.

<div class="p-6 rounded-lg shadow-inner flex justify-center items-center">
  <div class="flex items-center justify-between w-full max-w-md space-x-4">
    <Input v-model="inputValueRtl" color="warning" title="نام خانوادگی" rtl />
 
  </div>
</div>

## Input Component Features

| **Feature**          | **Description**                                                                                             | **Usage**                                                                                   |
|-----------------------|-----------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------|
| **Default Input**     | Basic Input component with default styles. This is the simplest usage with no additional configuration.    | Use `<Input v-model="inputValue" title="Custom Input" />`.                                  |
| **Customize Colors**  | Change the Input's color theme. Options include `default`, `primary`, `error`, `warning`, `secondary`, and `transparent`. | Use the `color` prop, e.g., `<Input color="primary" title="primary" />`.                     |
| **Disabled Input**    | Prevent user interaction with the Input field.                                                            | Use the `isDisabled` prop, e.g., `<Input isDisabled title="Disabled" />`.                   |
| **Read-Only Input**   | Make the Input read-only to display data without allowing edits.                                           | Use the `readonly` prop, e.g., `<Input readonly title="ReadOnly" />`.                       |
| **Variants**          | Choose from several Input variants: `faded`, `bordered`, `shadow`, `underline`, or `flat`.                | Use the `variant` prop, e.g., `<Input variant="underline" title="underline" />`.            |
| **Size**              | Adjust the Input size to match design needs. Options include `sm`, `md`, `lg`, and `xl`.                  | Use the `size` prop, e.g., `<Input size="lg" title="Large Input" />`.                       |
| **RTL Support**       | Support for right-to-left text alignment, useful for languages like Arabic or Hebrew.                     | Use the `rtl` prop, e.g., `<Input rtl title="نام خانوادگی" />`.                              |
