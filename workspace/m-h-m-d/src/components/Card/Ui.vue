<template>
  <Core
    :class="[
      CardClasses.cardContainer,
      props.variant === 'post' ? CardClasses.VariantMain : '',
      props.variant === 'weather' ? CardClasses.VariantMain : '',
      props.variant === 'post' && !props.horizontal ? CardClasses.Widths : '',
      props.variant === 'weather' ? CardClasses.Widths : '',
      props.horizontal ? CardClasses.horizontalGrid : '',
    ]"
  >
    <!-- Post Variant -->
    <template v-if="props.variant === 'post'">
      <div :class="CardClasses.postHeader">
        <div :class="CardClasses.postHeader">
          <img :src="props.avatar" alt="User Avatar" :class="CardClasses.postUserAvatar" />
          <div>
            <h3 v-if="!$slots.username" :class="CardClasses.TitleVariant">{{ props.username }}</h3>
            <slot name="username" />
            <p v-if="!$slots.time" :class="CardClasses.SizeSmClass">{{ props.time }}</p>
            <slot name="time" />
          </div>
        </div>
        <slot />
      </div>
      <p v-if="props.description" :class="CardClasses.postDescription">{{ props.description }}</p>
      <slot name="description" />
      <div v-if="props.image" class="mt-2">
        <img :src="props.image" alt="Post Image" :class="CardClasses.postImage" />
      </div>
      <div :class="CardClasses.postFooter">
        <span v-if="!$slots.info1 && props.info1">{{ props.info1 }}</span>
        <slot name="info1" />
        <span v-if="!$slots.info2 && props.info2">{{ props.info2 }}</span>
        <slot name="info2" />
        <span v-if="!$slots.info3 && props.info3">{{ props.info3 }}</span>
        <slot name="info3" />
        <span v-if="!$slots.info4 && props.info4">{{ props.info4 }}</span>
        <slot name="info4" />
      </div>
    </template>

    <!-- Progress Variant -->
    <template v-else-if="props.variant === 'progress'">
      <div :class="CardClasses.progressContainer">
        <div :class="CardClasses.progressHeader">
          <h3 v-if="!$slots.title" :class="CardClasses.TitleVariant">{{ props.title }}</h3>
          <slot name="title" />
          <span v-if="!$slots.info1 && props.info1" :class="CardClasses.SizeSmClass">{{ props.info1 }}</span>
          <slot name="info1" />
        </div>
        <div :class="CardClasses.progressBarContainer">
          <div :class="CardClasses.progressBar" :style="{ width: `${props.info2}%` }"></div>
        </div>
        <div :class="CardClasses.progressDetails">
          <span v-if="!$slots.info3 && props.info3">{{ props.info3 }}</span>
          <slot name="info3" />
          <span v-if="!$slots.info4 && props.info4">{{ props.info4 }}</span>
          <slot name="info4" />
        </div>
        <p v-if="!$slots.description && props.description" :class="CardClasses.SizeSmClass">{{ props.description }}</p>
        <slot name="description" />
      </div>
    </template>

    <!-- Weather Variant -->
    <template v-else-if="props.variant === 'weather'">
      <div :class="CardClasses.weatherInfo">
        <div :class="CardClasses.weatherInfo">
          <img :src="props.weatherImage" :class="CardClasses.weatherImage" />
          <div>
            <h3 v-if="!$slots.title" :class="CardClasses.weatherTitle">{{ props.title }}</h3>
            <slot name="title" />
            <p v-if="!$slots.description" :class="CardClasses.SizeSmClass">{{ props.description }}</p>
            <slot name="description" />
          </div>
        </div>
        <div :class="CardClasses.weatherDetails">
          <p :class=CardClasses.weatherInfo4>{{ props.info4 }}</p>
          <div :class="CardClasses.weatherFooter">
            <span v-if="!$slots.info1 && props.info1">{{ props.info1 }}</span>
            <slot name="info1" />
            <span v-if="!$slots.info2 && props.info2">{{ props.info2 }}</span>
            <slot name="info2" />
            <span v-if="!$slots.info3 && props.info3">{{ props.info3 }}</span>
            <slot name="info3" />
          </div>
        </div>
      </div>
    </template>

    <!-- Default Variant -->
    <template v-else>
      <div v-if="props.header || $slots.header" :class="[props.horizontal ? '' : 'p-4']">
        <div :class="CardClasses.defaultHeader">
          <span v-if="!$slots.header && props.header">{{ props.header }}</span>
          <slot name="header" />
        </div>
      </div>
      <div v-if="props.image" :class="['relative',props.horizontal ?  CardClasses.horizontalImageContainer: CardClasses.ImageContainer]">
        <img :src="props.image" alt="Card Image" :class="CardClasses.defaultImage" />
      </div>
      <div :class="props.horizontal ? CardClasses.horizontalChartImage : CardClasses.defaultContent">
        <h3 v-if="!$slots.title && props.title" :class="CardClasses.weatherTitle">{{ props.title }}</h3>
        <slot name="title" />
        <p v-if=" !$slots.description">{{ props.description }}</p>
        <slot v-if=" $slots.description" name="description" />
      </div>
      <div
        v-if="props.footer || $slots.footer || $slots.default"
        :class="[props.horizontal ? CardClasses.horizontalWithFooterImage :CardClasses.horizontalWithOutFooterImage ]"
      >
        <div :class="CardClasses.defaultFooter">
          <span v-if="props.footer">{{ props.footer }}</span>
          <slot></slot>
          <slot name="footer" />
        </div>
      </div>
    </template>
  </Core>
</template>

<script setup lang="ts">
import { CardClasses } from '../../styles/CardClasses';
import { cardProps } from './Props';

const props = defineProps(cardProps);
</script>
