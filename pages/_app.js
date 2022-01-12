import '../styles/globals.css'

import { MoralisProvider } from 'react-moralis'

function MyApp({ Component, pageProps }) {
	return (
    <MoralisProvider
      appId="IEPIlwlUejgQ5F0BufKGybuxI0NX4382tKIV1x4V"
      serverUrl="https://ggprzp7ux30w.usemoralis.com:2053/server">
      <Component {...pageProps} />
    </MoralisProvider>
	)
}

export default MyApp
