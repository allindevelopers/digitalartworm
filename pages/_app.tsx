import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import Script from "next/script";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<>
			<Script src="https://cdn.splitbee.io/sb.js" />
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
