/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				'earth': "url('https://images.unsplash.com/photo-1614642240262-a452c2c11724?dpr=1&h=200&w=120&auto=format&fit=crop&q=60&ixid=M3wxMjA3fDB8MXxzZWFyY2h8M3x8Y29oZXRlfGVzfDB8MXx8fDE3MTQ0OTg3MTZ8MA&ixlib=rb-4.0.3')"
			}
		},
	},
	plugins: [],
}
