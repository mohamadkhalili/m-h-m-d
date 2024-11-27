# stepper
<script setup>
import { ref } from 'vue'
const steps =  ref([
            { label: "authentication", icon: "mdiCheck" },
            { label: "Pre payment", icon: "mdiCloudCheckVariantOutline" },
            { label: "payment", icon: "mdiCloudCheckVariantOutline" },
            { label: "Final approval", icon: "mdiCheckDecagramOutline" }
        ]);
const stepperValue = ref(1);
const stepperValue2 = ref(1);
const stepperValue3 = ref(1);
</script>

## Default stepper

**Props:**

- `v-model`: Binds the open/close state of the menu.

**Usage:**

- This is the basic menu that toggles when the button is clicked.

<Stepper v-model="stepperValue" ></Stepper>
<button :disabled="stepperValue === 1"  @click="stepperValue = stepperValue - 1" class="w-28 bg-black text-white rounded-lg p-2 mt-1 mr-80" cleaner>prev</button>
<button :disabled="stepperValue === 4" @click="stepperValue = stepperValue + 1" class="w-28 bg-black text-white rounded-lg p-2 mt-1 ml-36" cleaner>next</button>



## stepper with allow click in step 

**Props:**

- `allowStepClick`: Binds the open/close state of the menu.

**Usage:**

- This is the basic menu that toggles when the button is clicked.

<Stepper v-model="stepperValue2" allowStepClick></Stepper>

## stepper with allow click in step 

**Props:**

- `steps`: Binds the open/close state of the menu.

**Usage:**

- This is the basic menu that toggles when the button is clicked.

<Stepper v-model="stepperValue3" :steps="steps"></Stepper>
<button :disabled="stepperValue3 === 1" @click="stepperValue3 = stepperValue3 - 1" class="w-28 bg-black text-white rounded-lg p-2 mt-1 mr-80" cleaner>prev</button>
<button :disabled="stepperValue3 === steps.length + 1" @click="stepperValue3 = stepperValue3 + 1" class="w-28 bg-black text-white rounded-lg p-2 mt-1 ml-36" cleaner>next</button>