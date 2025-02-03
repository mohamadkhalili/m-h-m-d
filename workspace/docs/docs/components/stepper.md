# stepper

## Default Stepper

The default stepper component with `prev` and `next` buttons.

**Props:**

- `v-model`: Binds the current step value.

<CodeTabs
  templateCode="
<Stepper v-model='stepperValue'></Stepper>
<br>
<Button :isDisabled='stepperValue === 0' @click='stepperValue = stepperValue - 1' buttonClass='w-28 p-2 mt-8 mr-40' cleaner>prev</Button>
<Button :isDisabled='stepperValue === 4' @click='stepperValue = stepperValue + 1' buttonClass='w-28 p-2 mt-8 ml-[254px]' cleaner>next</Button>
"
scriptCode="
export default {
data() {
    return {
      stepperValue : 0,
    }
  }
}
"
/>

## Stepper with Step Click Enabled

A stepper that allows users to click on any step to navigate directly to it.

**Props:**

- `allowStepClick`: Enables clicking on steps for direct navigation.

<CodeTabs
  templateCode="
<Stepper v-model='stepperValue' allowStepClick></Stepper>
<br>
<Button :isDisabled='stepperValue === 0' @click='stepperValue = stepperValue - 1' buttonClass='w-28 p-2 mt-8 mr-40' cleaner>prev</Button>
<Button :isDisabled='stepperValue === 4' @click='stepperValue = stepperValue + 1' buttonClass='w-28 p-2 mt-8 ml-[254px]' cleaner>next</Button>
"
scriptCode="
export default {
data() {
    return {
      stepperValue : 0,
    }
  }
}
"
/>

## Stepper with Custom Steps

A stepper configured with a defined list of custom steps, each with labels and icons.

**Props:**

- `steps`: An array of steps, where each step includes:
- `label`: The step's label (string).
- `icon`: The step's icon (string, optional).

<CodeTabs
  templateCode="
<Stepper v-model='stepperValue' :steps='steps'></Stepper>
<br>
<Button :isDisabled='stepperValue === 0' @click='stepperValue = stepperValue - 1' buttonClass='w-28 p-2 mt-8 mr-40' cleaner>prev</Button>
<Button :isDisabled='stepperValue === 7' @click='stepperValue = stepperValue + 1' buttonClass='w-28 p-2 mt-8 ml-[254px]' cleaner>next</Button>
"
scriptCode="
export default {
data() {
    return {
      stepperValue : 0,
      steps: [
        { label: 'authentication', icon: 'mdiCheck' },
        { label: 'Pre payment', icon: 'mdiCloudCheckVariantOutline' },
        { label: 'payment', icon: 'mdiCloudCheckVariantOutline' },
        { label: 'payment', icon: 'mdiCloudCheckVariantOutline' },
        { label: 'payment', icon: 'mdiCloudCheckVariantOutline' },
        { label: 'Final approval', icon: 'mdiCheckDecagramOutline' }
      ]
    }
  }
}
"
/>

## Custom Class Stepper

A stepper with fully customized styles for progress, progress bar, done, and not-done states.

**Props:**

- `progressClass`: Custom CSS classes for the progress state.
- `progressBarClass`: Custom CSS classes for the progress bar.
- `doneClass`: Custom CSS classes for completed steps.
- `notDoneClass`: Custom CSS classes for incomplete steps.
<CodeTabs
  templateCode="
<Stepper v-model='stepperValue' progressClass='shadow-md bg-indigo-200' progressBarClass='bg-indigo-700' doneClass='shadow-md bg-indigo-700' notDoneClass='shadow-md bg-indigo-200 text-black'></Stepper>
<Button :isDisabled='stepperValue === 0' @click='stepperValue = stepperValue - 1' buttonClass='w-28 p-2 mt-5 mr-40' cleaner>prev</Button>
<Button :isDisabled='stepperValue === 4' @click='stepperValue = stepperValue + 1' buttonClass='w-28 p-2 mt-8 ml-[254px]' cleaner>next</Button>
"
scriptCode="
export default {
data() {
    return {
      stepperValue : 0
    }
  }
}
"
/>
