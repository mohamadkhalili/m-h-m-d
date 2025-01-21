<template>
    <Tab class="gap-3 border-[1px] rounded-md w-full mx-auto" :tabs="tabs" variant="bordered" size="sm"
        activeColor="text-blue-500 shadow-blue-500">
        <template #ui>
            <div class="p-6 rounded-lg shadow-inner flex w-full justify-center">
                <Button @click="open" class="btn-primary">Open</Button>
                <Drawer v-model:isOpen="openDrawer" class="bg-gray-200 shadow-xl">
                    <div class="w-full justify-center items-center mt-20 p-2">
                        <h2>Test Drawer</h2>
                        Click the close button or action button to close the drawer. Clicking outside or pressing the
                        escape key won't close it.
                    </div>
                    <Button @click="open" buttonClass="m-36">
                        Close
                    </Button>
                </Drawer>
            </div>
        </template>

        <template #template>
            <pre class="border theme-github shadow-3xl text-sm relative overflow-hidden max-w-full tab-size h-full">
                <span class="hljs mb-0 p-4 block min-h-full overflow-auto" v-html="highlightedTemplate"></span>
            </pre>
        </template>

        <template #script>
            <pre class="border theme-github shadow-3xl text-sm relative overflow-hidden max-w-full tab-size h-full">
                <span class="hljs mb-0 p-4 block min-h-full overflow-auto" v-html="highlightedScript"></span>
            </pre>
        </template>

    </Tab>
</template>

<script setup lang="ts">
import { ref, defineProps, computed, onMounted } from 'vue';
import hljs from 'highlight.js';
import 'highlight.js/styles/github.css';

const props = defineProps({
    templateCode: {
        type: String,
        required: true,
    },
    scriptCode: {
        type: String,
        required: true,
    },
});

const highlightCode = (code: string, language: string) => {
    if (hljs.getLanguage(language)) {
        return hljs.highlight(code, { language }).value;
    }
    return hljs.highlightAuto(code).value; // اگر زبان مشخص نشده باشد، به صورت خودکار شناسایی می‌کند
};
const highlightedTemplate = computed(() => {
    return highlightCode(props?.templateCode, 'html');
})
const highlightedScript = computed(() => {
    return highlightCode(props?.scriptCode, 'typescript');
})


const tabs = [
    { label: 'UI', value: 'ui', content: '' },
    { label: 'template', value: 'template', content: '' },
    { label: 'script', value: 'script', content: '' },
];

const openDrawer = ref(false);
const open = () => {
    openDrawer.value = !openDrawer.value;
};



</script>

<style scoped></style>