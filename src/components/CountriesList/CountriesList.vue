<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRouter, RouterLink } from 'vue-router'
import type { PropType } from 'vue'
import type { TCountry } from '@/types/types'

const router = useRouter()

const props = defineProps({
  countries: {
    type: Array as PropType<TCountry[]>,
    default: [],
  },
})
</script>

<template>
  <section class="border border-gray-300 p-2 w-full">
    <h1 class="text-lg">Countries List</h1>
    <ul class="max-h-[270px] overflow-auto">
      <li v-for="country of props.countries" :key="country.countryCode">
        <RouterLink
          class="text-blue-300 hover:text-blue-500 hover:underline"
          :to="{
            name: 'country',
            params: {
              countryName: country.name,
              countryCode: country.countryCode,
            },
          }"
          >{{ `${country.name} (${country.countryCode})` }}</RouterLink
        >
      </li>
    </ul>
  </section>
</template>
