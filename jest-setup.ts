import '@testing-library/jest-dom'
import 'jest-styled-components'
import { loadEnvConfig } from '@next/env'

export default async () => {
  const projectDir = process.cwd()
  loadEnvConfig(projectDir)
}
