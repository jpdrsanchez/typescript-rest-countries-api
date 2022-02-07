import axios from 'axios'

const ENDPOINTS = {
  all: 'all/',
  code: (code: string) => `alpha/${code}`,
  continent: (continentName: string) => `continent/${continentName}`
}

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL
})

export const getAll = async () => api.get(ENDPOINTS.all)

export const getByContinent = async (continentName: string) =>
  api.get(ENDPOINTS.continent(continentName))

export const getByCode = async (code: string) => api.get(ENDPOINTS.code(code))

export const getSomeByCode = async (codes: string[]) => {
  const codePromises = codes.map(code => api.get(ENDPOINTS.code(code)))
  return Promise.all(codePromises)
}
