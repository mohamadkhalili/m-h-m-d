# CountDown Component

A simple countdown timer component with start, pause, and reset functionality.

## Basic Usage

  <CountDown :initial-time="60" :auto-start="true" />

  <CountDown :initial-time="60" :auto-start="true">
    <template #controls="{ isRunning, start, reset }">
      <button @click="start">
        {{ isRunning ? 'Pause' : 'Start' }}
      </button>
      <button @click="reset">Reset</button>
    </template>
  </CountDown>


  <CountDown :initial-time="60" :auto-start="true">
    <template #controls="{ isRunning, start, reset }">
      <button @click="start">
        {{ isRunning ? 'Pause' : 'Start' }}
      </button>
      <button @click="reset">Reset</button>
    </template>
  </CountDown>