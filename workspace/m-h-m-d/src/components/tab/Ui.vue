<script setup >
import { ref, computed } from 'vue';
import { TabProps } from './props';
import Core from './Core.vue';
import { TabClasses } from '../../styles/TabClasses';

const props = defineProps(TabProps);
const emit = defineEmits(['update:modelValue']);

const activeTab = ref(props.modelValue || props.tabs[0]?.value);



const position = computed(() => {
  switch (props.position) {
    case 'top':
      return TabClasses.uiTabTopPositionClass;
    case 'bottom':
      return TabClasses.uiTabBottomPositionClass;
    case 'left':
      return TabClasses.uiTabLeftPositionClass;
    case 'right':
      return TabClasses.uiTabRightPositionClass;
    default:
      return '';
  }
});

const justifyClass = computed(() => {
  switch (props.justify) {
    case 'start':
      return TabClasses.uiTabJustifyStartClass;
    case 'end':
      return TabClasses.uiTabJustifyEndClass;
    default:
      return TabClasses.uiTabJustifyCenterClass;
  }
});



const sizeTab = computed(() => {
  switch (props.size) {
    case 'sm':
      return TabClasses.uiTabSizeSmallClass;
    case 'md':
      return TabClasses.uiTabSizeMediumClass;
    case 'lg':
      return TabClasses.uiTabSizeLargeClass;
    case 'xl':
      return TabClasses.uiTabSizeExtraLargeClass;
    default:
      return TabClasses.uiTabSizeMediumClass;
  }
});

const getButtonStyleClass = computed(() => {
  switch (props.variant) {
    case 'underline':
      return TabClasses.uiTabVariantUnderlineClass;
    case 'mirror':
      return TabClasses.uiTabVariantMirrorClass;
    case 'shadow':
      return TabClasses.uiTabVariantShadowClass;
      case 'bordered':
      return TabClasses.uiTabVariantBorderedClass;
    default:
      return TabClasses.uiTabVariantDefaultClass;
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
    TabClasses.uiTabButtonClass,
    getButtonStyleClass,
    sizeTab,
    props.isDisabled ? TabClasses.uiTabDisabledClass : '',
     !props.vertical && props.position =='top' ? (props.variant === 'bordered' && activeTab === tab.value ? TabClasses.uiTabStylePositionTopClass : '') : '' ,
     !props.vertical && props.position =='bottom' ? (props.variant === 'bordered' && activeTab === tab.value ? TabClasses.uiTabStylePositionBottomClass: '') : '' ,
     props.vertical && props.position =='left' ? (props.variant === 'bordered' && activeTab === tab.value ? TabClasses.uiTabStylePositionLeftClass : '') : '' ,
     props.vertical && props.position =='right' ? (props.variant === 'bordered' && activeTab === tab.value ? TabClasses.uiTabStylePositionRightClass : '') : '' ,


     
      props.variant === 'bordered' && activeTab !== tab.value ? ' '  
      : '',
    ,
    props.variant === 'underline' && activeTab === tab.value ? ' after:scale-x-100' : 'after:scale-x-0',
    props.variant === 'underline' && activeTab !== tab.value ? ' after:scale-x-0 after:bg-gray-400 ' : '',

    props.variant === 'shadow' && activeTab === tab.value ? ' bg-gray-200 border-0 border-x-8 ' : '',
    props.variant === 'shadow' && activeTab !== tab.value ? '  border-x-2   ' : '',


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


    !props.vertical && props.variant==='bordered' && props.position ==='top' ? (tab.value===activeTab + 1 ? 'rounded-bl-2xl' : '' ) :'',
        !props.vertical && props.variant==='bordered' && props.position ==='top' ? (tab.value===activeTab -1  ? 'rounded-br-2xl' : '' ) :'',

    !props.vertical && props.variant==='bordered' && props.position ==='bottom' ?  (tab.value===activeTab +1? 'rounded-tl-2xl ' : '' ) :'',
        !props.vertical && props.variant==='bordered' && props.position ==='bottom' ?  (tab.value===activeTab -1? 'rounded-tr-2xl' : '' ) :'',

     props.vertical && props.variant==='bordered' && props.position ==='right' ?   (tab.value===activeTab+1 ? 'rounded-tl-2xl' : '' ) :'',
          props.vertical && props.variant==='bordered' && props.position ==='right' ?   (tab.value===activeTab-1 ? 'rounded-bl-2xl' : '' ) :'',

    props.vertical && props.variant==='bordered' && props.position ==='left' ?   (tab.value===activeTab+1 ? 'rounded-tr-2xl' : '' ) :'',
        props.vertical && props.variant==='bordered' && props.position ==='left' ?   (tab.value===activeTab-1 ? 'rounded-br-2xl' : '' ) :'',



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
