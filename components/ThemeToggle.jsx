import React from 'react'
import Theme from './theme'

const togglePosition = {
	theme1: 'translate-x-0',
	theme2: 'translate-x-[14px]',
	theme3: 'translate-x-[28px]'
}

const ThemeToggle = ({ togglePos, onClick }) => {
	return (
		<div className="flex text-xs w-24 justify-between items-center">
			<div
				className={`${Theme[togglePos]['label-text']} text-[10px] font-semibold`}
			>
				THEME
			</div>
			<div className="relative">
				<ul
					className={`font-semibold w-full absolute bottom-5 flex justify-evenly ${Theme[togglePos]['label-text']} text-[10px]`}
				>
					<li>1</li>
					<li>2</li>
					<li>3</li>
				</ul>
				<div
					className={`mt-1 px-1 w-12 h-[1.1rem] ${Theme[togglePos]['toggle-bg']} rounded-full flex cursor-pointer items-center`}
					onClick={onClick}
				>
					<div
						className={`${togglePosition[togglePos]} hover:${Theme[togglePos]['toggle-btn-hover']} w-[0.7rem] h-[0.7rem] ${Theme[togglePos]['toggle-btn']} rounded-full transition-all duration-500`}
					/>
				</div>
			</div>
		</div>
	)
}

export default ThemeToggle
