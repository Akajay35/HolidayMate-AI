import type { Config } from 'tailwindcss';
const config: Config = { content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'], theme: { extend: { colors: { ink: '#14251f', forest: '#176b52', mint: '#e8f3ed', sand: '#f7f6f1' }, boxShadow: { soft: '0 16px 50px rgba(20,37,31,.08)' } } }, plugins: [] };
export default config;
