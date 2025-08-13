/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        'royal-blue': '#4169E1',
        'royal-blue-dark': '#1E3A8A',
        'royal-blue-light': '#6366F1',
        'cream': '#F5E6D3',
        'cream-dark': '#E8D7C3',
        'warm-beige': '#F7F0E8',
        'accent-orange': '#FF8C42',
        'text-charcoal': '#374151',
        'text-light': '#6B7280',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'float': 'float 3s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}