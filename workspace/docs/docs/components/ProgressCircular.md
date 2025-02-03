# Progress Circular

## Default Progress

**Props:**

- `v-model`: Binds the progress value.

**Usage:**

- This is the basic progress bar that adjusts its value dynamically when v-model is updated.

<CodeTabs
  templateCode="
<div class='flex flex-col items-center justify-center'>
  <ProgressCircular v-model='progressValue'/>
</div>
"
scriptCode="
export default {
data() {
    return {
      progressValue : 40,
    }
  }
}
"
/>

## Progress With Show Number Fill

**Props:**

- `showNumberFill`: Determines whether the progress value is displayed as a percentage inside the circular progress bar. Accepts a boolean value (true to display the value, false to hide it).

**Usage:**

- This is a dynamic circular progress bar. The progress value can be updated dynamically using v-model, and the current progress percentage is displayed inside the bar when showNumberFill is set to true.

<CodeTabs
  templateCode="
<div class='flex flex-col items-center justify-center'>
  <ProgressCircular v-model='progressValue' showNumberFill='true'/>
</div>
"
scriptCode="
export default {
data() {
    return {
      progressValue : 40,
    }
  }
}
"
/>

## Progress With Rotate

**Props:**

- `rotate`: Determines the starting position of the circular progress bar. Accepts a degree value (0, 90, 180, 270, etc.) to set the starting angle of the progress.

**Usage:**

- This is a dynamic circular progress bar that adjusts its value using v-model. The rotate prop allows you to customize the starting point of the progress arc. Combined with showNumberFill, the progress percentage can also be displayed inside the bar.

<CodeTabs
  templateCode="
<div class='flex items-center justify-center space-x-4'>
  <ProgressCircular v-model='progressValue' showNumberFill='true'/>
  <ProgressCircular v-model='progressValue' rotate='90' showNumberFill='true'/>
  <ProgressCircular v-model='progressValue' rotate='180' showNumberFill='true'/>
  <ProgressCircular v-model='progressValue' rotate='270' showNumberFill='true'/>
</div>
"
scriptCode="
export default {
  data() {
    return {
      progressValue: 0,
      loopingInterval3: null,
      isPaused3: false,
    };
  },
  methods: {
    startLoopingProgress3() {
      this.loopingInterval3 = setInterval(() => {
        if (this.isPaused3) return;
        this.progressValue += 1;
        if ([10, 20, 30, 40, 50, 60, 70, 80, 90].includes(this.progressValue)) {
          this.isPaused3 = true;
          setTimeout(() => {
            this.isPaused3 = false;
          }, 1000);
        }
        if (this.progressValue === 100) {
          this.isPaused3 = true;
          setTimeout(() => {
            this.progressValue = 0;
            this.isPaused3 = false;
          }, 1000);
        }
      }, 15);
    }
  },
  mounted() {
    this.startLoopingProgress3();
  },
  beforeDestroy() {
    if (this.loopingInterval3) clearInterval(this.loopingInterval3);
  }
}
"
/>

## Example For Installing Progress

<CodeTabs
  templateCode="
<div class='flex flex-col items-center'>
  <span class='mb-3 text-sm font-medium'>installing Progress:</span>
  <ProgressCircular v-model='progressValue' />
</div>
<div class='flex flex-col items-center'>
  <span class='mb-3 text-sm font-medium'>installing Progress:</span>
  <ProgressCircular v-model='progressValue2' />
</div>
"
scriptCode="
export default {
  data() {
    return {
      progressValue: 0,
      progressValue2: 0,
      loopingInterval: null,
      loopingInterval2: null,
      isPaused: false,
      isPaused2: false,
    };
  },
  methods: {
    startLoopingProgress4() {
      this.loopingInterval = setInterval(() => {
        if (this.isPaused) return;
        this.progressValue += 1;
        if (this.progressValue === 33 || this.progressValue === 66) {
          this.isPaused = true;
          setTimeout(() => {
            this.isPaused = false;
          }, 500);
        }
        if (this.progressValue === 100) {
          this.isPaused = true;
          setTimeout(() => {
            this.progressValue = 0;
            this.isPaused = false;
          }, 1000);
        }
      }, 15);
    },
    startLoopingProgress5() {
      this.loopingInterval2 = setInterval(() => {
        if (this.isPaused2) return;
        this.progressValue2 += 1;
        if (this.progressValue2 === 100) {
          this.isPaused2 = true;
          setTimeout(() => {
            this.progressValue2 = 0;
            this.isPaused2 = false;
          }, 1000);
        }
      }, 25);
    }
  },
  mounted() {
    this.startLoopingProgress4();
    this.startLoopingProgress5();
  },
  beforeDestroy() {
    if (this.loopingInterval) clearInterval(this.loopingInterval);
    if (this.loopingInterval2) clearInterval(this.loopingInterval2);
  }
}
"
/>

## Progress With Custom Class

**Props:**

- `progressClass`: Allows you to apply custom classes to the outer progress bar container for styling (e.g., size, positioning, and general layout).
- `progressFillClass`: Customizes the filled portion of the progress bar, enabling color and animation effects.
- `progressContainerClass` : Adds custom classes to the container that wraps the entire progress bar, allowing you to define overall styling.
- `numberFillClass` : Customizes the appearance of the percentage text displayed inside the progress bar (e.g., font size, color, and alignment).

**Usage:**

- This example demonstrates how to customize the circular or linear progress bar, including the progress container, the filled portion, and the percentage text, by applying Tailwind classes. The numberFillClass prop allows for precise styling of the percentage text inside the progress bar.

<CodeTabs
  templateCode="
<Button :isDisabled='progressValue === 0' @click='progressValue >= 10 ? progressValue = progressValue - 10 : progressValue = 0' buttonClass='mb-10 w-10 h-10 p-2 mt-1 mr-40' cleaner>-</Button>
<Button :isDisabled='progressValue === 100' @click='progressValue <= 90 ? progressValue = progressValue + 10 : progressValue = 100' buttonClass='mb-10 w-10 h-10 p-2 mt-1 ml-[390px]' cleaner>+</Button>
<div class='flex justify-center item-center'>
  <ProgressCircular v-model='progressValue' progressClass='w-32 h-32' progressContainerClass='text-indigo-200' progressFillClass='text-indigo-700 transition-all duration-300' showNumberFill='true' numberFillClass='text-indigo-700'/>
</div>
"
scriptCode="
export default {
data() {
    return {
      progressValue : 30,
    }
  }
}
"
/>
