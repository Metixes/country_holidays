<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRouter, RouterLink } from 'vue-router'
import type { PropType } from 'vue'
import type { THoliday } from '@/types/types'
const router = useRouter()

const props = defineProps({
  holidays: { type: Array as PropType<THoliday[]>, default: [] },
})
</script>

<template>
  <section class="border border-gray-300 p-2 w-full">
    <h4 class="text-lg">Random Countries</h4>
    <ul class="max-h-[400px] overflow-auto">
      <li
        class="flex flex-col items-start justify-center gap-2 border border-gray-300 p-2"
        v-for="holiday of props.holidays"
        :key="holiday.countryCode"
      >
        <RouterLink
          class="text-blue-300 hover:text-blue-500"
          :to="{
            name: 'country',
            params: {
              countryName: holiday.counties,
              countryCode: holiday.countryCode,
            },
          }"
        >
          <span>{{ `${holiday.counties} (${holiday.countryCode})` }}</span>
        </RouterLink>
        <span>{{ holiday.name }}</span>
        <span>{{ holiday.date }}</span>
      </li>
    </ul>
  </section>
</template>
