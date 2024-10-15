<template>
    <div @mousedown="mouseDownHandle" class="singleHeader">

        <!-- ==== each box separately -->
        <div v-for="(item,index) in items" :key="index">
            <slot :name="`body_${singleHeader.quantity}`" :item="item[singleHeader.quantity]">
                <slot name="default" :item="item[singleHeader.quantity]">
                </slot>
            </slot>

        </div>

    </div>
</template>

<script setup lang="ts">
import { defineEmits, onMounted, onUnmounted, ref, useSlots, computed } from 'vue';
import type { Config, Header } from '../dataTable/models/tableModels.ts'

const isMouseDown = ref(false);
const isMoved = ref(false);
const mouseX = ref(0);
const mouseY = ref(0);
const prevMouseX = ref(0);
const prevMouseY = ref(0);

const emit = defineEmits<{
    (e: "mouseUp"): void;
    (e: "mouseMove", value: MouseEvent): void;
}>();

export interface Props {
    singleHeader: Header,
    items: Array<any>,
}
const props = defineProps<Props>();


// const hasSlotArray = ref<any>([])
// const slots = useSlots();
// let hasDefaultSlot = computed(() => !!slots[`body_${props.singleHeader.quantity}`]);
// const hasDefaultSlot1 = computed(() => !!slots['body_name']);

function mouseDownHandle(event: MouseEvent) {
    isMouseDown.value = true;
    prevMouseX.value = event.clientX;
    prevMouseY.value = event.clientY;
}

function mouseUpHandle() {
    if (isMouseDown.value) {
        isMouseDown.value = false;
        isMoved.value = false;
        emit("mouseUp");
    }
}

function updateMousePosition(event: MouseEvent) {
    if (isMouseDown.value) {
        mouseX.value = event.clientX;
        mouseY.value = event.clientY;
        const deltaX = Math.abs(mouseX.value - prevMouseX.value);
        const deltaY = Math.abs(mouseY.value - prevMouseY.value);
        if (deltaX > 3 || isMoved.value == true) {
            isMoved.value = true;
            emit("mouseMove", new MouseEvent("mousemove", {
                clientX: mouseX.value,
                clientY: mouseY.value,
            }));
        }
    }
}

onMounted(() => {
    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseup', mouseUpHandle);
});

onUnmounted(() => {
    window.removeEventListener('mousemove', updateMousePosition);
    window.removeEventListener('mouseup', mouseUpHandle);
});
</script>

<style scoped>
table,
th,
td {
    border: 1px groove rgb(209, 209, 209);
    border-collapse: collapse;
}

table {
    border-radius: 25px !important;

}

/* table.rounded-corners thead tr:first-child th:first-child {
 border-top-left-radius: 10px;
} */

table,
tr {
    width: 100%;
}
</style>
