<template>
  <teleport :to="props.teleport">
    <div v-show="props.modelValue" :class="props.class">
      <slot :name="slots.default" />
    </div>
  </teleport>
</template>

<script setup lang="ts">
import { Props } from './Props';
import { Slots } from './Slots'

const props = defineProps(Props);
const slots = defineSlots<Slots>();

</script>
