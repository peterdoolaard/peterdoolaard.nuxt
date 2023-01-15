// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
	modules: [
		'@nuxt/image-edge',
		'@nuxt/content',
	],
	content: {
		documentDriven: false,
		highlight: {
			theme: 'solarized-light'
		}
	},
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: `
            @use "@/assets/css/_normalize.scss" as *;
            @use "@/assets/css/_reset.scss" as *;
            @use "@/assets/css/_variables.scss" as *;
            @use "@/assets/css/_breakpoints.scss" as *;
            @use "@/assets/css/_utils.scss" as *;
          `,
				}
			}
		}
	},
	css: [
		'@/assets/css/main.scss',
	],
	app: {
		head: {
			htmlAttrs: {
				lang: 'nl'
			},
			title: 'Freelance front-end developer | Peter Doolaard',
			meta: [
				{name: 'viewport', content: 'width=device-width, initial-scale=1'},
				{charset: 'utf-8'},
				{
					name: 'description', content: 'Peter Doolaard is freelance front-end developer en auteur van boeken over' +
						' webdevelopment.'
				},
			],
			link: [
				{ rel: 'me', href: 'https://mastodon.social/@peterdoolaard' }
			]
		}
	},
	image: {
		presets: {
			portrait: {
				modifiers: {
					format: 'webp',
					height: 150
				}
			}
		}
	}
})
