<template>
    <div @mousedown="mouseDownHandle" class="singleHeader">
        <slot name="header" :item="singleHeader">
        </slot>

    </div>
</template>

<script setup lang="ts">
import {  onMounted, onUnmounted, ref } from 'vue';
import type { Config, Header } from './models/tableModels.js'

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
}
const props = defineProps<Props>();

// change the items sequence for putting in table
// const itemsArray = props.items.map(item => item[props.singleHeader.value]);

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