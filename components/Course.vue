<template>
  <h1>
    {{appTitle}}
  </h1>
  <h4>{{counterData.title}}</h4>
  <div>
    <button @click="decreaseCounter" class="bg-gray-400 px-5 rounded-lg" >-</button>
    <span class="p-3">{{counterData.count}}</span>
    <button @click="increaseCounter" class="bg-gray-400 px-5 rounded-lg" >+</button>
  </div>

  <div>
    <h2>Starlink Launches</h2>
    <p v-for="(entry, i) of data?.launches" :key="entry.id">
      {{ i + 1 }}. Mission Name: {{ entry.mission_name }} ({{
        entry.launch_year
      }})
    </p>
  </div>

  <!-- <div>
    <h4>Edit counter title:</h4>
    <input v-mode="counterData.title" type="text">
  </div> -->
</template>

<script setup lang="ts">
const appTitle = "My Amazing Counter App"
const counterData = reactive({
  title: "My Counter Reactive",
  count:0
})
function increaseCounter() {
  counterData.count++
}
function decreaseCounter() {
  counterData.count--
}
const { data } = await useAsyncGql({
  operation: 'launches',
  variables: { limit: 100 }
});
console.log('data', data)
</script>