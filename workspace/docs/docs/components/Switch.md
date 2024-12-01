
## Using Core Component

The `Switch` component leverages the `Core` component to manage the state and events. Here is an example of how the `Core` component is integrated:

<Switch v-model="isActive" />

## Animation and Styling

The `Switch` component uses Tailwind CSS classes for smooth animations and responsive design. The following classes are used for animations:

- `transition-colors duration-300`: For smooth background color transitions.
- `transition-transform duration-300`: For smooth transform transitions.

Example with animation:

<Switch v-model="isActive" />


This is the simplest usage of the `Switch` component. It binds the state of the switch to the `isActive` variable using `v-model`.

## Variants

### Default

The default switch with a simple design.

<Switch v-model="isActive" variant="default" />

### Rounded

A switch with rounded corners.


<Switch v-model="isActive" variant="rounded" />


### Bordered

A switch with a border around it.


<Switch v-model="isActive" variant="bordered" />


### Shadow

A switch with a shadow effect.


<Switch v-model="isActive" variant="shadow" />


## Colors

You can customize the colors of the switch using the following props:

- `color`: Changes the background color of the switch.
- `activeColor`: Changes the color when the switch is active.
- `inactiveColor`: Changes the color when the switch is inactive.

### Example with Custom Colors

<Switch v-model="isActive" color="bg-gray-300" activeColor="bg-blue-500" inactiveColor="bg-gray-200" />


## Disabled State

To disable the switch, you can set the `isDisabled` prop to `true`.

<Switch v-model="isActive" :isDisabled="true" />


## Size Variants

You can adjust the size of the switch by setting the `size` prop.

### Small


<Switch v-model="isActive" size="sm" />


### Medium


<Switch v-model="isActive" size="md" />


### Large


<Switch v-model="isActive" size="lg" />


### Extra Large


<Switch v-model="isActive" size="xl" />


## Example with All Props


<Switch
  v-model="isActive"
  variant="bordered"
  color="bg-gray-300"
  activeColor="bg-blue-500"
  inactiveColor="bg-gray-200"
  size="md"
  :isDisabled="false"
/>


This example shows the switch with a border, custom colors, medium size, and enabled state.

---

## Props Reference

| **Prop**           | **Type**        | **Default**      | **Description**                                                                                       |
|--------------------|-----------------|------------------|-------------------------------------------------------------------------------------------------------|
| `v-model`          | Boolean         | `false`          | Binds the state of the switch.                                                                         |
| `variant`          | String          | `default`        | Determines the style of the switch. Options: `default`, `rounded`, `bordered`, `shadow`.               |
| `color`            | String          | `bg-gray-300`    | Background color of the switch.                                                                        |
| `activeColor`      | String          | `bg-blue-500`    | Background color when the switch is active.                                                           |
| `inactiveColor`    | String          | `bg-gray-200`    | Background color when the switch is inactive.                                                         |
| `size`             | String          | `md`             | Size of the switch. Options: `sm`, `md`, `lg`, `xl`.                                                   |
| `isDisabled`       | Boolean         | `false`          | Disables the switch if set to `true`.                                                                  |

---

## Events

- `update:modelValue`: Emits the updated state of the switch (`true` or `false`) whenever the switch is toggled.