import axios from 'axios'

const ENDPOINTS = {
  all: 'all/',
  name: (name: string) => `name/${name}`,
  continent: (continentName: string) => `continent/${continentName}`
}

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL
})

export const getAll = async () => api.get(ENDPOINTS.all)

export const getByContinent = async (continentName: string) =>
  api.get(ENDPOINTS.continent(continentName))

export const getByName = async (name: string) => api.get(ENDPOINTS.name(name))
