# Countdown Component Documentation

## Overview
The Countdown component is a highly customizable and reusable timer component built with Vue 3 and TypeScript. It offers a range of features such as automatic start, event emission, and custom control slots, making it ideal for integration into a variety of applications.

---

## Features
- **Customizable Initial Time**: Start the countdown from any specified time in seconds.
- **Auto Start**: Option to automatically start the countdown on component mount.
- **Slot for Controls**: Allows users to define custom controls for starting, pausing, and resetting the timer.
- **Event Emission**: Provides `update:time` and `finish` events to communicate state changes to parent components.
- **Flexible Integration**: Supports both minimal setups and advanced use cases with event handling and custom designs.

---

## Props

| Prop Name      | Type     | Default   | Description                                      |
|----------------|----------|-----------|--------------------------------------------------|
| `Time`  | Number   | Required  | The initial time (in seconds) to start the countdown from. |
| `autoStart`    | Boolean  | `false`   | Determines if the countdown starts automatically on mount. |

---

## Events

| Event Name      | Payload         | Description                                      |
|------------------|-----------------|--------------------------------------------------|
| `update:time`    | Number          | Emitted whenever the remaining time updates.     |
| `finish`         | Number          | Emitted when the countdown reaches zero.         |

---

## Slots

| Slot Name       | Props Passed            | Description                                      |
|------------------|-------------------------|--------------------------------------------------|
| `controls`       | `isRunning`, `start`, `reset` | Use this slot to provide custom controls for the timer. |

---

## Usage Examples

### Basic Example


  <div>
    <h1>Simple Countdown</h1>
    <CountDown time=30 :autoStart="false">
      <template #controls="{ isRunning, start, reset }">
        <button @click="start">
          {{ isRunning ? 'Pause' : 'Start' }}
        </button>
        <button @click="reset">Reset</button>
      </template>
    </CountDown>
  </div>



---

### Advanced Example with Events

  <div>
    <h1>Countdown with Event Handling</h1>
    <CountDown
      time="60"
      :autoStart="true"
      @update:time="handleTimeUpdate"
      @finish="handleFinish">
      <template #controls="{ isRunning, start, reset }">
        <button @click="start">
          {{ isRunning ? 'Pause' : 'Start' }}
        </button>
        <button @click="reset">Reset</button>
      </template>
    </CountDown>
  </div>

<script setup>
const handleTimeUpdate = (newTime) => {
  console.log('Time updated:', newTime);
};

const handleFinish = () => {
  console.log('Countdown finished!');
};
</script>


---

### Minimal Example (No Custom Controls)


  <div>
    <h1>Minimal Countdown</h1>
    <CountDown time="20000" :autoStart="true" />
  </div>

---

## Styling
The Countdown component uses a set of predefined CSS classes to allow easy customization:

| Class Name      | Description                                      |
|------------------|--------------------------------------------------|
| `container`      | The main wrapper for the countdown component.    |
| `display`        | The display area for the remaining time.         |
| `startButton`    | Default styling for the start button.            |
| `pauseButton`    | Default styling for the pause button.            |
| `resetButton`    | Default styling for the reset button.            |

### Example CSS

```css
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.display {
  font-size: 2rem;
  margin-bottom: 10px;
}

button {
  margin: 5px;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
}
```

---

## API Summary

### Methods (Exposed via `defineExpose`)

| Method Name      | Description                                      |
|------------------|--------------------------------------------------|
| `start()`        | Starts or resumes the countdown.                 |
| `stop()`         | Pauses the countdown.                            |
| `reset()`        | Resets the countdown to the initial time.        |

---

## Conclusion
The Countdown component is a versatile tool that can be tailored to fit a variety of applications, from simple timers to complex UI integrations. Its flexibility with slots, events, and props ensures it meets the needs of both basic and advanced use cases.

