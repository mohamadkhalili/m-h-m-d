# Progress Linear

## Default Progress

**Props:**

- `v-model`: Binds the progress value.

**Usage:**

- This is the basic progress bar that adjusts its value dynamically when v-model is updated.

<CodeTabs
  templateCode="
<div class='flex flex-col items-center justify-center'>
  <ProgressLinear v-model='progressValue'/>
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

## Example For Installing Progress

<CodeTabs
  templateCode="
<div class='flex flex-col items-center'>
  <span class='mb-3 text-sm font-medium'>installing Progress:</span>
  <ProgressLinear v-model='progressValue' />
</div>
<div class='flex flex-col items-center'>
  <span class='mb-3 text-sm font-medium'>installing Progress:</span>
  <ProgressLinear v-model='progressValue2' />
</div>
"
  scriptCode="
export default {
  data() {
    return {
      progressValue: 0,
      progressValue2: 0,
      isPaused: false,
      isPaused2: false,
      loopingInterval: null,
      loopingInterval2: null,
    };
  },
  methods: {
    startLoopingProgress2() {
      this.loopingInterval = setInterval(() => {
        if (this.isPaused) return;
        this.progressValue += 1;
        if (this.progressValue == 33 || this.progressValue == 66) {
          this.isPaused = true;
          setTimeout(() => {
            this.isPaused = false;
          }, 500);
        }
        if (this.progressValue == 100) {
          this.isPaused = true;
          setTimeout(() => {
            this.progressValue = 0;
            this.isPaused = false;
          }, 1000);
        }
      }, 15);
    },
    startLoopingProgress3() {
      this.loopingInterval2 = setInterval(() => {
        if (this.isPaused2) return;
        this.progressValue2 += 1;
        if (this.progressValue2 == 100) {
          this.isPaused2 = true;
          setTimeout(() => {
            this.progressValue2 = 0;
            this.isPaused2 = false;
          }, 1000);
        }
      }, 25);
    },
  },
  mounted() {
    this.startLoopingProgress2();
    this.startLoopingProgress3();
  },
  beforeDestroy() {
    if (this.loopingInterval) clearInterval(this.loopingInterval);
    if (this.loopingInterval2) clearInterval(this.loopingInterval2);
  },
};
"
/>

## Pending Progress

**Props:**

- `pending`: Determines whether the progress bar operates in pending mode. When true, the progress bar animates continuously, moving from the start to the end and resetting seamlessly.

**Usage:**

- This is a progress bar In pending mode, it simulates an indeterminate state by animating continuously.

<CodeTabs
  templateCode="
<span class='mb-3 text-sm font-medium'>default pending:</span>
<div class='mb-5'><ProgressLinear v-model='progressValue' :pending='true'/></div>
<span class='mb-3 text-sm font-medium'>with pendingSpeed : 5</span>
<div class='mb-5'><ProgressLinear v-model='progressValue2' :pendingSpeed='5' :pending='true'/></div>
<span class='mb-3 text-sm font-medium'>with pendingSpeed : 6</span>
<div class='mb-5'><ProgressLinear v-model='progressValue3' :pendingSpeed='6' :pending='true'/></div>
"
scriptCode="
export default {
data() {
    return {
      progressValue : 0,
      progressValue2 : 0,
      progressValue3 : 0,
    }
  }
}
"
/>

## Progress With Custom Class

**Props:**

- `progressClass`: Customizes the outer progress bar container.
- `progressFillClass`: Customizes the filled portion of the progress bar.

**Usage:**

- This example demonstrates how to customize the progress bar's container and filled section using Tailwind classes.

<CodeTabs
  templateCode="
<Button :isDisabled='progressValue === 0' @click='progressValue >= 10 ? progressValue = progressValue - 10 : progressValue = 0' buttonClass='mb-10 w-10 h-10 p-2 mt-1 mr-40' cleaner>-</Button>
<Button :isDisabled='progressValue === 100' @click='progressValue <= 90 ? progressValue = progressValue + 10 : progressValue = 100' buttonClass='mb-10 w-10 h-10 p-2 mt-1 ml-[390px]' cleaner>+</Button>
<ProgressLinear v-model='progressValue' progressClass='ml-40 w-80 bg-indigo-200' progressFillClass='bg-indigo-700 transition-all duration-300'/>
<div class='mt-16'>
  <ProgressLinear v-model='progressValue2' :pending='true' progressClass='ml-40 w-80 bg-indigo-200' progressFillClass='bg-indigo-700 transition-all duration-300'/>
</div>
"
scriptCode="
export default {
data() {
    return {
      progressValue : 30,
      progressValue2 : 0
    }
  }
}
"
/>
