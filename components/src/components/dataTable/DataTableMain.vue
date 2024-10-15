<template>
    <DataTableBase :headers="headers" :items="items" :configs="configs">
        <template #header="{ item }">
            <slot name="header" :item="item">
                <table>
                    <tr>
                        <th>{{ item.text }}</th>
                    </tr>
                </table>
            </slot>
        </template>

        <template v-for="(elem, index) in headers" :key="index" v-slot:[`body_${elem.quantity}`]="{ item }">
            <slot :name="`body_${elem.quantity}`" :item="item">
                <slot name="default" :item="item">
                    {{ item }}
                </slot>
            </slot>
        </template>

    </DataTableBase>

</template>

<script setup lang="ts">
import DataTableBase from './DataTableBase.vue'
import { ref, computed } from 'vue'
import type { Config,PrimateHeader } from '../dataTable/models/tableModels.ts'

export interface Props {
    items: Array<any>,
    headers: PrimateHeader[],
    configs: Config,
}

const props = defineProps<Props>();



// const now = computed(() => slots))
// console.log('tttttttttttttttttttttttttt',now);

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
    background-color: rgb(160, 160, 161);

}

/* table.rounded-corners thead tr:first-child th:first-child {
border-top-left-radius: 10px;
} */

table,
tr {
    width: 100%;
}
</style>