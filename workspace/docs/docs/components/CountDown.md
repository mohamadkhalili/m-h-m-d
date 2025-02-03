
## Countdown Component

The Countdown component is a flexible and reusable timer component built with Vue 3 and TypeScript. It supports features like auto-start, time updates, and custom controls.

<CodeTabs
templateCode="
 <div class='py-10 rounded-lg shadow-inner flex justify-center items-center'>
    <CountDown :time='110' auto-start format='hh:mm:ss' class='text-6xl font-thin' />
</div>
"
  scriptCode="
export default {
}
"
/>

## Modify the Styles

You can easily customize the appearance of the Countdown component by using the following CSS classes:

- `container`: Adjust the main container styling.
- `countDownClass`: Customize the countdown timer display styles.

<CodeTabs
templateCode="
<div class='py-10 px-2 rounded-lg shadow-inner justify-items-center'>
    <CountDown :time='45' :auto-start='false' format='hh mm ss' class='font-thin text-6xl' >
        <template #controls='{ isRunning, start, reset }'>
        <div class='flex gap-4 mt-10'>
            <Button @click='start' buttonClass='bg-indigo-600 font-normal'>
                {{ isRunning ? 'Running' : 'Start' }}
            </Button>
            <Button @click='reset' buttonClass='font-normal'>Stop</Button>
        </div>
        </template>
    </CountDown>
</div>
"
  scriptCode="
export default {
}
"
/>

## Formats

<CodeTabs
templateCode="
<div class='py-10 gap-4 rounded-lg shadow-inner grid grid-cols-1 justify-items-center'>
    <CountDown :time=4400 auto-start class='text-2xl  text-indigo-900 ' format='hh hours mm minutes ss seconds'/>
    -
    <CountDown :time=4400 auto-start class='text-2xl  text-indigo-900 ' format='hhH mmM ssS'/>
    -
    <CountDown :time=4400 auto-start class='text-2xl  text-indigo-900 ' format='default'/>
    -
    <CountDown :time=4400 auto-start class='text-2xl  text-indigo-900 ' format='hh mm ss'/>
</div>
"
  scriptCode="
export default {
}
"
/>

## Handle Events

<CodeTabs
templateCode="
 <count-down
        :time='3630'
        auto-start
        class='text-4xl font-sans text-gray-600'
        format='hh hours mm ss'
        @update:time='updateTimer'
    />
    <div class='py-10 gap-4 rounded-lg shadow-inner grid grid-cols-2 justify-items-center'>
        <p><span class='text-yellow-600'>{{ timeRemaining }}</span> remaining</p>
        <p><span class='text-yellow-600'>{{ timePassed }}</span> passed</p>
    </div>
"
  scriptCode="
export default {
    data() {
        return {
            RealTime: 0
        };
    },
    computed: {
        timeRemaining() {
            return this.RealTime !== undefined ? this.RealTime : 0;
        },
        timePassed() {
            return this.RealTime !== undefined ? 3630 - this.RealTime : 0;
        }
    },
    methods: {
        updateTimer(time) {
            this.RealTime = time;
        }
    }
};
"
/>

## Countdown Component Features

| **Feature**             | **Description**                                                                                         | **Usage**                                                                                     |
|--------------------------|---------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------|
| **Custom Controls**      | Add custom buttons for controlling the countdown.                                                      | Use the `controls` slot to define buttons for start, pause, and reset.                        |
| **Auto Start**           | Automatically starts the countdown when the component is mounted.                                      | Use the `autoStart` prop and set it to `true`.                                                |
| **Event Handling**       | Handle time updates and countdown finish events in the parent component.                              | Listen to the `update:time` and `finish` events to execute custom logic.                      |
| **Styling Flexibility**  | Fully customizable styles for the countdown timer and controls.                                        | Use the CSS classes `container` and `display` to adjust the appearance.                       |

This documentation provides a structured and detailed guide to using and customizing the Countdown component effectively.
