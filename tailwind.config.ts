import type { Config } from 'tailwindcss';
import { nextui }      from '@nextui-org/react';


export default {
	content : [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
		'./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
	],
	theme   : {
		extend: {
			backgroundImage: {
				'dark-gradient': 'linear-gradient(0deg, '
												 + 'rgba(0, 0, 0, 0.9) 0%, '
												 + 'rgba(0, 0, 0, 0.4) 70%,'
												 + ' rgba(0, 0, 0, 0) 100%)',
			}
		},
	},
	darkMode: 'class',
	plugins : [nextui({
		defaultTheme: 'light',
	})],
} satisfies Config;
