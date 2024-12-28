  <div>
    <h1>Countdown Example</h1>
    <CountDown time="20" >
      <template #controls="{ isRunning, start, reset }">
        <button @click="start">{{ isRunning ? 'Pause' : 'Start' }}</button>
        <button @click="reset">Reset</button>
      </template>
    </CountDown>
    <CountDown time="10" />
    <!-- Debugging line to show initial-time -->
  </div>

<script setup lang="ts">

// You can define other logic here if needed
</script>
