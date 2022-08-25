module.exports = {
	content: ['./pages//*.{js,ts,jsx,tsx}', './components//*.{js,ts,jsx,tsx}'],
	theme: {
		fontFamily: {
			spartan: "'League Spartan', sans-serif"
		},

		extend: {
			colors: {
				theme1: {
					'main-bg': 'hsl(222, 26%, 31%)',
					'toggle-bg': 'hsl(223, 31%, 20%)',
					'toggle-btn': 'hsl(6, 63%, 50%)',
					'toggle-btn-hover': 'hsl(6, 63%, 60%)',
					'result-bg': 'hsl(224, 36%, 15%)',
					'keypad-bg': 'hsl(223, 31%, 20%)',
					'delete-reset-bg': 'hsl(225, 21%, 49%)',
					'delete-reset-hover': 'hsl(225, 21%, 55%)',
					'equal-bg': 'hsl(6, 63%, 50%)',
					'equal-hover': 'hsl(6, 63%, 55%)',
					'keys-bg': 'hsl(30, 25%, 89%)',
					'keys-bg-hover': 'hsl(30, 25%, 92%)',
					'keys-text': 'hsl(221, 14%, 31%)',
					'label-text': 'hsl(0, 0%, 100%)',
					'equal-text': 'hsl(0, 0%, 100%)'
				},
				theme2: {
					'main-bg': 'hsl(0, 0%, 90%)',
					'toggle-bg': 'hsl(0, 5%, 81%)',
					'toggle-btn': 'hsl(25, 98%, 40%)',
					'toggle-btn-hover': 'hsl(185, 42%, 45%)',
					'result-bg': ' hsl(0, 0%, 95%)',
					'keypad-bg': 'hsl(0, 5%, 81%)',
					'delete-reset-bg': 'hsl(185, 42%, 37%)',
					'delete-reset-hover': 'hsl(185, 42%, 45%)',
					'equal-bg': 'hsl(25, 98%, 40%)',
					'equal-hover': 'hsl(25, 98%, 45%)',
					'keys-bg': 'hsl(45, 7%, 89%)',
					'keys-bg-hover': 'hsl(45, 7%, 92%)',
					'keys-text': 'hsl(60, 10%, 19%)',
					'label-text': 'hsl(60, 10%, 19%)',
					'equal-text': 'hsl(0, 0%, 100%)'
				},
				theme3: {
					'main-bg': 'hsl(268, 75%, 9%)',
					'toggle-bg': 'hsl(268, 71%, 12%)',
					'toggle-btn': 'hsl(176, 100%, 44%)',
					'toggle-btn-hover': 'hsl(176, 100%, 50%)',
					'result-bg': 'hsl(268, 71%, 12%)',
					'keypad-bg': 'hsl(268, 71%, 12%)',
					'delete-reset-bg': 'hsl(281, 89%, 26%)',
					'delete-reset-hover': 'hsl(281, 89%, 35%)',
					'equal-bg': 'hsl(176, 100%, 44%)',
					'equal-hover': 'hsl(176, 100%, 50%)',
					'keys-bg': 'hsl(268, 47%, 21%)',
					'keys-bg-hover': 'hsl(268, 47%, 28%)',
					'keys-text': 'hsl(52, 100%, 62%)',
					'label-text': 'hsl(52, 100%, 62%)',
					'equal-text': 'hsl(198, 20%, 13%)'
				}
			}
		}
	},
	plugins: []
}
