/* eslint-disable no-new-func */
import { Fragment, useState } from 'react'
import DocumentHead from 'components/DocumentHead'
import ThemeToggle from 'components/ThemeToggle'

// TODO: Configure theme in tailwind config

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
	const [togglePosition, setTogglePosition] = useState('start')

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
		if (togglePosition === 'start') setTogglePosition('middle')
		else if (togglePosition === 'middle') setTogglePosition('end')
		else if (togglePosition === 'end') setTogglePosition('start')
	}

	return (
		<Fragment>
			<DocumentHead />
			<div className="bg-[rgb(58,71,100)] w-screen h-screen flex items-center justify-center">
				<div className="w-[30rem] h-[32rem] flex-col">
					{/* Calc and Theme toggle */}
					<div className="w-full h-10 flex justify-between px-4">
						<h2 className="font-spartan font-bold text-3xl text-white">
							calc
						</h2>
						<ThemeToggle
							onClick={handleThemeToggleClick}
							togglePos={togglePosition}
						/>
					</div>
					{/* Calc result */}
					<div className="overflow-scroll select-none text-[2.55rem] font-bold  mt-4 mx-4 rounded-md h-[6.5rem] bg-[hsl(224,_36%,_15%)] text-white text-right flex flex-col justify-center pr-4 pb-4">
						{result}
					</div>
					{/* Calc keypad */}
					<div className="mt-3  mx-4 rounded-md grid grid-cols-4 gap-4 justify-center justify-content-center justify-items-center py-[1.25rem] px-4 bg-[hsl(223,_31%,_20%)]">
						{CALCULATOR_KEYS.map((key, idx) => {
							if (key === 'DEL') {
								return (
									<div
										key={idx}
										onClick={() =>
											handleCalculatorKeyClick(key)
										}
										className="select-none hover:pb-[2px] cursor-pointer hover:bg-[hsl(225,_21%,_55%)] bg-[hsl(225,_21%,_49%)] w-20 h-[3.2rem] flex items-center justify-center text-white rounded-lg shadow-[inset_0px_-4px_0px_0px_hsl(224,_28%,_35%)] text-[25px] font-extrabold font-spartan"
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
									className="select-none hover:pb-[2px] cursor-pointer  hover:bg-[hsl(30,_35%,_95%)] bg-[hsl(30,_35%,_89%)] w-20 h-[3.2rem] flex items-center justify-center text-[hsl(221,_14%,_31%)] rounded-lg shadow-[inset_0px_-4px_0px_0px_hsl(28,_16%,_65%)] text-3xl font-extrabold font-spartan"
								>
									{key}
								</div>
							)
						})}
						<div
							onClick={() => handleCalculatorKeyClick('RESET')}
							className="select-none hover:pb-[2px]  cursor-pointer hover:bg-[hsl(225,_21%,_55%)]  bg-[hsl(225,_21%,_49%)] w-48 h-12 flex items-center justify-center text-white rounded-lg col-span-2 shadow-[inset_0px_-4px_0px_0px_hsl(224,_28%,_35%)]  text-xl font-semibold font-spartan"
						>
							RESET
						</div>
						<div
							onClick={() => handleCalculatorKeyClick('=')}
							className="select-none hover:pb-[2px] cursor-pointer hover:bg-[hsl(6,_63%,_55%)] bg-[hsl(6,_63%,_50%)] w-48 h-12 flex items-center justify-center text-white rounded-lg col-span-2 shadow-[inset_0px_-4px_0px_0px_hsl(6,_70%,_34%)]  text-3xl font-extrabold font-spartan"
						>
							=
						</div>
					</div>
				</div>
			</div>
		</Fragment>
	)
}
