import React from 'react'

const ChartContainer = ({ height, width, children, customStyles }) => {
	return (
		<div className={`rounded-lg ${height}]} ${width} ${customStyles}`}>
			{children}
		</div>
	)
}

export default ChartContainer