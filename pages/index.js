/* eslint-disable no-new-func */
import { Fragment, useState } from 'react'
import DocumentHead from 'components/DocumentHead'
import ThemeToggle from 'components/ThemeToggle'
import Theme from 'components/theme'

const CALCULATOR_KEYS = [
	'7',
	'8',
	'9',
	'DEL',
	'4',
	'5',
	'6',
	'+',
	'1',
	'2',
	'3',
	'-',
	'.',
	'0',
	'/',
	'*'
]

export default function Home() {
	const [result, setResult] = useState('')
	const [togglePosition, setTogglePosition] = useState('theme1')

	const handleCalculatorKeyClick = (calcKey) => {
		console.log('calcKey: ', calcKey)
		if (result === '' && calcKey === '=') {
			return
		} else if (calcKey === 'DEL') {
			// Backspace
			setResult((prev) =>
				prev.length > 1 ? prev.substring(0, prev.length - 1) : ''
			)
			return
		} else if (calcKey === 'RESET') {
			// Resets calculator
			setResult('')
			return
		} else if (calcKey === '=') {
			// Evaluates expression
			setResult(
				Number(Function(`return ${result}`)()).toLocaleString('en-US')
			)
			return
		} else if (
			// Not allow next-to-next:  decimals, operators
			['.', '+', '*', '/', '-'].includes(calcKey) &&
			['.', '+', '*', '/', '-'].includes(result[result.length - 1])
		) {
			return
		}

		setResult((prev) => prev.concat(calcKey).replaceAll(',', ''))
	}

	const handleThemeToggleClick = () => {
		if (togglePosition === 'theme1') setTogglePosition('theme2')
		else if (togglePosition === 'theme2') setTogglePosition('theme3')
		else if (togglePosition === 'theme3') setTogglePosition('theme1')
	}

	return (
		<Fragment>
			<DocumentHead />
			<div
				className={`${Theme[togglePosition]['main-bg']}  bg-theme1-main-bg w-screen h-screen flex items-center justify-center transition-all`}
			>
				<div className="w-[30rem] h-[32rem] flex-col">
					{/* Calc and Theme toggle */}
					<div className="w-full h-10 flex justify-between px-4">
						<h2
							className={`font-spartan font-bold text-3xl ${Theme[togglePosition]['label-text']}`}
						>
							calc
						</h2>
						<ThemeToggle
							onClick={handleThemeToggleClick}
							togglePos={togglePosition}
						/>
					</div>
					{/* Calc result */}
					<div
						className={`transition-colors overflow-scroll select-none text-[2.55rem] font-bold  mt-4 mx-4 rounded-md h-[6.5rem]  ${Theme[togglePosition]['label-text']} text-right flex flex-col justify-center pr-4 pb-4 ${Theme[togglePosition]['result-bg']}`}
					>
						{result}
					</div>
					{/* Calc keypad */}
					<div
						className={`mt-3  mx-4 rounded-md grid grid-cols-4 gap-4 justify-center justify-content-center justify-items-center py-[1.25rem] px-4 ${Theme[togglePosition]['keypad-bg']}`}
					>
						{CALCULATOR_KEYS.map((key, idx) => {
							if (key === 'DEL') {
								return (
									<div
										key={idx}
										onClick={() =>
											handleCalculatorKeyClick(key)
										}
										className={`select-none hover:pb-[2px] cursor-pointer ${Theme[togglePosition]['delete-reset-hover']} ${Theme[togglePosition]['delete-reset-bg']} w-[4.5rem] h-[3.1rem] md:w-20 md:h-[3.2rem] flex items-center justify-center text-white rounded-lg ${Theme[togglePosition]['delete-reset-shadow']} text-[25px] font-extrabold font-spartan`}
									>
										{key}
									</div>
								)
							}

							return (
								<div
									key={idx}
									onClick={() =>
										handleCalculatorKeyClick(key)
									}
									className={`select-none hover:pb-[2px] cursor-pointer  ${Theme[togglePosition]['keys-bg-hover']} ${Theme[togglePosition]['keys-bg']} w-[4.5rem] h-[3.1rem] md:w-20 md:h-[3.2rem] flex items-center justify-center ${Theme[togglePosition]['keys-text']} rounded-lg ${Theme[togglePosition]['keys-shadow']} text-3xl font-extrabold font-spartan`}
								>
									{key}
								</div>
							)
						})}
						<div
							onClick={() => handleCalculatorKeyClick('RESET')}
							className={`select-none hover:pb-[2px]  cursor-pointer ${Theme[togglePosition]['delete-reset-hover']}  ${Theme[togglePosition]['delete-reset-bg']} w-40 h-12 md:w-48 md:h-12 flex items-center justify-center text-white rounded-lg col-span-2 ${Theme[togglePosition]['delete-reset-shadow']}  text-xl font-semibold font-spartan`}
						>
							RESET
						</div>
						<div
							onClick={() => handleCalculatorKeyClick('=')}
							className={`select-none hover:pb-[2px] cursor-pointer ${Theme[togglePosition]['equal-hover']}  ${Theme[togglePosition]['equal-bg']} w-40 h-12 md:w-48 md:h-12 flex items-center justify-center ${Theme[togglePosition]['equal-text']} rounded-lg col-span-2 ${Theme[togglePosition]['equal-shadow']}  text-3xl font-extrabold font-spartan`}
						>
							=
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	)
}
