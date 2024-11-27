# stepper
<script setup>
import { ref } from 'vue'
const steps =  ref([
            { label: "authentication", icon: "mdiCheck" },
            { label: "payment", icon: "mdiCloudCheckVariantOutline" },
            { label: "Final approval sdf asf", icon: "mdiCheckDecagramOutline" }
        ]);
const stepperValue = ref(1);
const stepperValue2 = ref(1);
const stepperValue3 = ref(1);
const menuValueColor = ref(false);
const menuValueRounded = ref(false);
const menuValueOutside = ref(false);
const menuValueHover = ref(false);
const menuValueSize = ref(false);
</script>

## Default stepper

**Props:**

- `v-model`: Binds the open/close state of the menu.

**Usage:**

- This is the basic menu that toggles when the button is clicked.

<Stepper v-model="stepperValue" ></Stepper>
<button  @click="stepperValue = stepperValue - 1" class="w-28 bg-black text-white rounded-lg p-2 mt-1 mr-80" cleaner>prev</button>
<button  @click="stepperValue = stepperValue + 1" class="w-28 bg-black text-white rounded-lg p-2 mt-1 ml-36" cleaner>next</button>



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
<button  @click="stepperValue3 = stepperValue3 - 1" class="w-28 bg-black text-white rounded-lg p-2 mt-1 mr-80" cleaner>prev</button>
<button  @click="stepperValue3 = stepperValue3 + 1" class="w-28 bg-black text-white rounded-lg p-2 mt-1 ml-36" cleaner>next</button>