/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: [
			'tailwindui.com',
			'images.unsplash.com',
			'i.ibb.co',
			'lh3.googleusercontent.com',
		],
	},
};

module.exports = nextConfig;
