/// <reference types="vite/client" />
interface ImportMetaEnv {
    readonly VITE_USE_MOCK: boolean
    readonly VITE_MOCK_DELAY: number
    readonly VITE_API_HOST: string

    readonly VITE_HASURA_URL: string

    readonly VITE_CRYPTO_PEPPER: string

    readonly VITE_AUTH0_DOMAIN: string
    readonly VITE_AUTH0_CLIENT_ID: string
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}