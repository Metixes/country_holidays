export type TCountry = {
  countryCode: string
  name: string
}

export type TCountries = {
  [countryCode: string]: TCountry
}

export type THoliday = {
  date: string
  localName: string
  name: string
  countryCode: string
  fixed: boolean
  global: boolean
  counties: string | null
  launchYear: string | null
}
