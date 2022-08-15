import React from 'react'

const togglePosition = {
	start: 'translate-x-0',
	middle: 'translate-x-[14px]',
	end: 'translate-x-[28px]'
}

const ThemeToggle = ({ togglePos = 'end', onClick }) => {
	return (
		<div className="flex text-xs w-24 justify-between items-center">
			<div className="text-white text-[10px]">THEME</div>
			<div className="relative">
				<ul className="w-full absolute bottom-5 flex justify-evenly text-white text-[10px]">
					<li>1</li>
					<li>2</li>
					<li>3</li>
				</ul>
				<div
					className="mt-1 px-1 w-12 h-[1.1rem] bg-[hsl(223,_31%,_20%)] rounded-full flex cursor-pointer items-center"
					onClick={onClick}
				>
					<div
						className={`${togglePosition[togglePos]} hover:bg-[hsl(6,_63%,_60%)] w-[0.7rem] h-[0.7rem] bg-[hsl(6,_63%,_50%)] rounded-full transition-all duration-500`}
					/>
				</div>
			</div>
		</div>
	)
}

export default ThemeToggle
