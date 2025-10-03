import { defineConfig } from '@adonisjs/inertia'

const inertiaConfig = defineConfig({
  ssr: {
    enabled: false,
    entrypoint: 'inertia/ssr.ts',
  },
})

export default inertiaConfig
