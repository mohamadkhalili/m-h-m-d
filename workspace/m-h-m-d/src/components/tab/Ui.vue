<script setup >
import { ref, computed } from 'vue';
import { TabProps } from './props';
import Core from './Core.vue';

const props = defineProps(TabProps);
const emit = defineEmits(['update:modelValue']);

const activeTab = ref(props.modelValue || props.tabs[0]?.value);



const position = computed(() => {
  switch (props.position) {
    case 'bottom':
      return 'flex flex-col flex-col-reverse ';
    case 'left':
      return 'flex flex-row flex-row ';
    case 'right':
      return 'flex flex-row flex-row-reverse ';
    case 'top':
      return 'flex flex-col ';
    default:
      return ' ';
  }
});

const justifyClass = computed(() => {
  switch (props.justify) {
    case 'start':
      return 'justify-start w-full flex';
    case 'end':
      return 'justify-end w-full flex';
    default:
      return 'justify-center w-full flex';
  }
});



const sizeTab = computed(() => {
  switch (props.size) {
    case 'sm':
      return 'text-[12px]';
    case 'md':
      return 'text-md';
    case 'lg':
      return 'text-xl';
    case 'xl':
      return 'text-2xl';
    default:
      return 'text-md';
  }
});

const getButtonStyleClass = computed(() => {
  switch (props.variant) {
    case 'underline':
      return 'relative after:content-[""] after:absolute after:w-full after:h-[2px] after:bg-blue-500 after:bottom-0 after:left-0 after:transition-transform after:duration-300 hover:after:scale-x-100 border-none';
    case 'mirror':
      return `  relative inline-flex items-center justify-center overflow-hidden
        after:content-[""] after:absolute after:w-10 after:h-10
        after:bg-gray-600/30 after:opacity-0 
        after:opacity-100  after:scale-100 after:transition-transform
        after:duration-500 border-none`
    case 'shadow':
      return ' relative inline-flex ';
      case 'bordered':
      return `
        relative inline-flex items-center  justify-center 
      `;
    default:
      return `
        relative flex items-center justify-center overflow-hidden 
        transition-all duration-700 ease-in-out 
      `;
  }
});

const layoutClass = computed(() => (props.vertical ? 'flex flex-col' : justifyClass.value));


function selectTab(value) {
  activeTab.value = value;
  emit('update:modelValue', value);
}
</script>

<template>
  <div :class="[position , 'items-center ']">
    <Core
    :tabs="props.tabs"
      :variant="props.variant"
      :is-disabled="props.isDisabled"
      :class="[layoutClass
,
      ]"
    >
      <div v-for="(tab, index) in props.tabs" :key="tab.value" :class="[
        'relative ',
      ]">
        <label
  @click="!props.isDisabled && selectTab(tab.value)"
  :disabled="props.isDisabled"
  :class="[
    'py-2 px-4 transition-all  duration-200 ease-in-out cursor-pointer border-[1px] select-none',
    getButtonStyleClass,
    sizeTab,
    props.isDisabled ? 'opacity-50 cursor-not-allowed' : '',
     !props.vertical && props.position =='top' ? (props.variant === 'bordered' && activeTab === tab.value ? '  border-b-transparent border-x-transparent  shadow-[inset_0px_2px_0px_0px] active:scale-105 ' : '') : '' ,
     !props.vertical && props.position =='bottom' ? (props.variant === 'bordered' && activeTab === tab.value ? '  border-t-0  shadow-[inset_0px_-1px_0px_0px]  active:scale-105 ' : '') : '' ,
     props.vertical && props.position =='left' ? (props.variant === 'bordered' && activeTab === tab.value ? '  border-r-0 shadow-[inset_1px_0px_0px_0px] active:scale-105 ' : '') : '' ,
     props.vertical && props.position =='right' ? (props.variant === 'bordered' && activeTab === tab.value ? '  border-l-0 shadow-[inset_-1px_0px_0px_0px] active:scale-105 ' : '') : '' ,


     
      props.variant === 'bordered' && activeTab !== tab.value ? ' active:scale-105'  
      : '',
    ,
    props.variant === 'underline' && activeTab === tab.value ? ' after:scale-x-100' : 'after:scale-x-0',
    props.variant === 'underline' && activeTab !== tab.value ? ' after:scale-x-0 after:bg-gray-400 ' : 'after:scale-x-0',

    props.variant === 'shadow' && activeTab === tab.value ? ' bg-gray-200 border-0 border-x-8 active:scale-105 ' : '',
    props.variant === 'shadow' && activeTab !== tab.value ? '  border-x-2  active:scale-105 ' : '',


    props.variant === 'default' && activeTab === tab.value ? '' : '',
    props.variant === 'default' && activeTab !== tab.value ? '' : '',


    props.variant === 'mirror'
      ? `relative overflow-hidden 
          ${activeTab === tab.value
            ? 'after:translate-x-100 after:scale-0 space-x-10'
            : ' after:scale-x-[200%]  '}
          transition-all duration-700`
      : '',
    !props.vertical ? (props.variant === 'default' && index === 0 ? 'rounded-l-full' : '') : (props.variant === 'default' && index === 0 ? 'rounded-t-2xl' : ''),
    !props.vertical ? (props.variant === 'default' && index === props.tabs.length - 1 ? 'rounded-r-full' : '') : (props.variant === 'default' && index === props.tabs.length - 1 ? 'rounded-b-2xl' : ''),
    props.vertical ? 'w-full' : '',
    !props.vertical ? 
  (props.variant === 'bordered' && index === activeTab - 2 ? 'rounded-br-2xl shadow-main ' : 
   props.variant === 'bordered' && index === activeTab  ? 'rounded-bl-2xl shadow-main' : '') 
  : 
  (props.variant === 'bordered' && index === 0 ? 'rounded-t-lg' : 
   props.variant === 'bordered' && index === props.tabs.length - 1 ? 'rounded-b-lg' : '')
,
    props.vertical ? 'w-full' : '',
    activeTab === tab.value ? props.activeTextColor : props.textColor,
    activeTab === tab.value ? props.activeColor : props.color,
    activeTab === tab.value ? props.activeShadow : props.shadow

  ]"
>

          <slot name="label" :tab="tab">
            {{ tab.label }}
          </slot>
        </label>
      </div>
    </Core>

    <div class="w-full  ">
      <div v-for="tab in props.tabs" :key="tab.value" v-show="activeTab === tab.value" class="p-6">
        <transition name="slide-right" mode="out-in">
          <div v-if="tab.content != null" :key="tab.value" :class=[props.contentColor]>
            <slot :name="'content'+tab.value" :tab="tab" :class="[ 'animate-ping' ]">
              {{ tab.content }}
            </slot>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<style scoped>
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.5s ease-in-out;
}
.slide-right-enter {
  opacity: 0;
  transform: translateX(-100%);
}
.slide-right-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
/* From Uiverse.io by zanina-yassine */ 
/* Remove this container when use*/
.component-title {
  width: 100%;
  position: absolute;
  z-index: 999;
  top: 30px;
  left: 0;
  padding: 0;
  margin: 0;
  font-size: 1rem;
  font-weight: 700;
  color: #888;
  text-align: center;
}

.tab-container {
  position: relative;

  display: flex;
  flex-direction: row;
  align-items: flex-start;

  padding: 2px;

  background-color: #dadadb;
  border-radius: 9px;
}

.indicator {
  content: "";
  width: 130px;
  height: 28px;
  background: #ffffff;
  position: absolute;
  top: 2px;
  left: 2px;
  z-index: 9;
  border: 0.5px solid rgba(0, 0, 0, 0.04);
  box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.12), 0px 3px 1px rgba(0, 0, 0, 0.04);
  border-radius: 7px;
  transition: all 0.2s ease-out;
}

.tab {
  width: 130px;
  height: 28px;
  position: absolute;
  z-index: 99;
  outline: none;
  opacity: 0;
}

.tab_label {
  width: 130px;
  height: 28px;

  position: relative;
  z-index: 999;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 0;

  font-size: 0.75rem;
  opacity: 0.6;

  cursor: pointer;
}

.tab--1:checked ~ .indicator {
  left: 2px;
}

.tab--2:checked ~ .indicator {
  left: calc(130px + 2px);
}

.tab--3:checked ~ .indicator {
  left: calc(130px * 2 + 2px);
}

</style>
