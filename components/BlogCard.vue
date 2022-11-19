<script setup lang="ts">
type Blog = {
  name: string
  description?: string
  tags: string[]
  twitter?: string
  url: string
}

function computeTwitterLink(twitterHandle: string | undefined) {
  if (twitterHandle) {
    const cleanedTwitterHandle = twitterHandle.replace('@', '')
    return `https://twitter.com/${cleanedTwitterHandle}`
  }
  return '#'
}

defineProps<{
  blog: Blog
}>()
</script>

<template>
  <nuxt-img
    :src="`/img/${useNormalizeImageName(blog.name)}.png`"
    :alt="blog.name"
    loading="lazy"
    :quality="80"
    class="w-screen mb-4 rounded-xl saturate-0 group-hover:saturate-100"
  />
  <div class="font-bold text-lg pb-4">
    {{ blog.name }}
  </div>
  <div class="pb-4 text-gray-400 font-light">
    {{ blog.description }}
  </div>
  <ul class="pb-4">
    <li
      v-for="tag in blog.tags"
      :key="tag"
      class="rounded bg-purple-500 inline-block px-2 mr-1 mb-2 cursor-pointer"
      @click="$emit('setFilter', tag)"
    >
      {{ tag }}
    </li>
  </ul>
  <div
    class="flex flex-1 justify-between items-center pt-2 border-t border-gray-400 border-dotted"
  >
    <NuxtLink external :to="blog.url" target="_blank">
      🔗 {{ blog.name }}
    </NuxtLink>
    <NuxtLink external :to="computeTwitterLink(blog.twitter)" target="_blank">
      🐦 {{ blog.twitter?.replace('@', '') }}
    </NuxtLink>
  </div>
</template>
