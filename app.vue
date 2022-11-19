<script setup lang="ts">
import data from './data'

const setFilter = ref('')
const filteredBlogs = computed(() => {
  if (setFilter.value) {
    return data.filter((blog) => blog.tags.includes(setFilter.value))
  }
  return data
})

function filterByTag(tag: string) {
  setFilter.value = tag
}
</script>
<template>
  <Body class="bg-[#0c0c0c]">
    <div v-if="setFilter" class="text-white m-10">
      currently set Filter:
      <span
        @click="setFilter = ''"
        class="rounded bg-purple-500 px-2 cursor-pointer"
        >{{ setFilter }}
      </span>
    </div>
    <div class="grid gap-4 grid-cols-auto-grid m-10">
      <div
        v-for="blog in filteredBlogs"
        :key="blog.name"
        class="group hover:border-green-500 grid border-2 p-4 border-gray-600 bg-[#121214] text-gray-300 rounded-xl"
      >
        <BlogCard :blog="blog" @set-filter="filterByTag" />
      </div>
    </div>
  </Body>
</template>
