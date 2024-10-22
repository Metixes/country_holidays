<script setup lang="ts">
import { useRoute } from 'vue-router'
import { defineProps, onMounted, ref } from 'vue'
import { requestCountries } from '@/config/axios'
import type { THoliday } from '@/types/types'

const props = defineProps({
  countryName: String,
  countryCode: String,
})

const route = useRoute()
const currentDate = ref(new Date())
const holidays = ref<THoliday[]>([])

const getHolydaysInMonth = async (date: Date) => {
  try {
    const year = date.getFullYear()

    const { data } = await requestCountries.get(
      `PublicHolidays/${year}/${props.countryCode}`,
    )

    holidays.value = data
  } catch (error) {
    console.log(error)
  }
}

onMounted(async (): Promise<void> => {
  await getHolydaysInMonth(currentDate.value)
})
</script>

<template>
  <section class="p-10">
    <div class="flex items-center justify-between gap-5 mb-3">
      <h4 class="text-lg">{{ props.countryName }}</h4>
      <FloatLabel variant="on">
        <DatePicker
          v-model="currentDate"
          view="year"
          dateFormat="yy"
          @date-select="getHolydaysInMonth"
        />
        <label for="on_label">Select a year</label>
      </FloatLabel>
    </div>
    <ul class="flex flex-col gap-2">
      <li
        class="flex flex-col items-start justify-center gap-2 border border-gray-300 p-1 rounded-md"
        v-for="holiday of holidays"
        :key="holiday.countryCode"
      >
        <span>{{ holiday.name }}</span>
        <span>{{ holiday.date }}</span>
      </li>
    </ul>
  </section>
</template>

<style scoped></style>
