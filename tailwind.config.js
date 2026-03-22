module.exports = {
  content: ["./layouts/**/*.html", "./content/**/*.md"],
  theme: {
    extend: {
      colors: {
        ef: {
          'bg-dim': 'var(--ef-bg-dim)',
          bg:       'var(--ef-bg0)',
          bg1:      'var(--ef-bg1)',
          bg2:      'var(--ef-bg2)',
          bg3:      'var(--ef-bg3)',
          bg4:      'var(--ef-bg4)',
          bg5:      'var(--ef-bg5)',
          'bg-visual': 'var(--ef-bg-visual)',
          'bg-red':    'var(--ef-bg-red)',
          'bg-yellow': 'var(--ef-bg-yellow)',
          'bg-green':  'var(--ef-bg-green)',
          'bg-blue':   'var(--ef-bg-blue)',
          'bg-purple': 'var(--ef-bg-purple)',
          fg:      'var(--ef-fg)',
          grey0:   'var(--ef-grey0)',
          grey1:   'var(--ef-grey1)',
          grey2:   'var(--ef-grey2)',
          green:   'var(--ef-green)',
          aqua:    'var(--ef-aqua)',
          orange:  'var(--ef-orange)',
          red:     'var(--ef-red)',
          yellow:  'var(--ef-yellow)',
          purple:  'var(--ef-purple)',
          blue:    'var(--ef-blue)',
        }
      }
    }
  },
  plugins: [require('@tailwindcss/typography')],
}
