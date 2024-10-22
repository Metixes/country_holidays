<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'
import { requestCountries } from '@/config/axios'
import { useRouter, RouterLink } from 'vue-router'
import type { TCountries, TCountry, THoliday } from '@/types/types'

import CountriesList from '@/components/CountriesList/CountriesList.vue'
import HolidaysList from '@/components/HolidaysList/HolidaysList.vue'

const router = useRouter()

const countries = ref<TCountry[]>([])
const formattedCountries = ref<TCountries>({})
const foundCities = ref<TCountry[]>([])
const randomHolidays = ref<THoliday[]>([])
const intervalId = ref<number | undefined>(0)
const selectedCountry = ref(null)

const showCountryInfo = ({ value }: { value: TCountry }) => {
  router.push({
    name: 'country',
    params: {
      countryName: value.name,
      countryCode: value.countryCode,
    },
  })
}

const filteredCountries = ({ query }: { query: String }) => {
  intervalId.value = setTimeout(() => {
    if (!query.trim().length) {
      foundCities.value = [...countries.value]
    } else {
      foundCities.value = countries.value.filter(country => {
        return country.name.toLowerCase().startsWith(query.toLowerCase())
      })
    }
  }, 350)
}

/* Get Methods */
const getCountries = async () => {
  try {
    const { data } = await requestCountries.get(`AvailableCountries`)

    countries.value = data

    data.forEach((country: TCountry) => {
      formattedCountries.value[country.countryCode] = country
    })
  } catch (error) {
    console.log(error)
  }
}

const getRandomHolydays = async () => {
  try {
    const { data } = await requestCountries.get(`NextPublicHolidaysWorldwide`)

    randomHolidays.value = data.sort(() => 0.5 - Math.random()).slice(0, 3)

    randomHolidays.value.forEach(holiday => {
      holiday.counties = formattedCountries.value[holiday.countryCode].name
    })
  } catch (error) {
    console.log(error)
  }
}

onMounted(async (): Promise<void> => {
  await getCountries()
  await getRandomHolydays()
})

onUnmounted(() => {
  clearTimeout(intervalId.value)
})
</script>

<template>
  <main class="p-10">
    <section class="flex items-center justify-evenly gap-5">
      <div class="flex flex-col gap-2 w-2/4">
        <AutoComplete
          v-model="selectedCountry"
          forceSelection
          optionLabel="name"
          :suggestions="foundCities"
          placeholder="Search a county"
          @complete="filteredCountries"
          @option-select="showCountryInfo"
        />
        <CountriesList v-if="countries.length" :countries="countries" />
      </div>
      <HolidaysList
        v-if="randomHolidays.length"
        class="w-2/4"
        :holidays="randomHolidays"
      />
    </section>
  </main>
</template>
