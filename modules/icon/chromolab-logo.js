import React, { Component } from 'react'

class IconChromolabLogo extends Component {
	render() {
		const {
			props,
			props: {
				className
			}
		} = this
		const newProps = {
			...props,
			className: `icon ${className ? className : ''}`
		}

		return (
			<svg {...newProps} viewBox="0 0 272.708 39.766">
				<linearGradient id="icon-chormolab-logo-a" x1="6.5" x2="265.102" y1="22.211" y2="22.211" gradientUnits="userSpaceOnUse">
					<stop offset="0" stopColor="#E31E70"/>
					<stop offset="1" stopColor="#46308A"/>
				</linearGradient>
				<path fill="url(#icon-chormolab-logo-a)" d="M42.426 29.93l-6.318 8.174H20.146c-2.755 0-5.303-.412-7.648-1.238-2.347-.822-4.363-1.953-6.06-3.395s-3.024-3.15-3.99-5.13C1.477 26.36 1 24.212 1 21.9c0-2.308.48-4.425 1.446-6.34.967-1.916 2.297-3.564 3.992-4.94 1.695-1.38 3.712-2.438 6.06-3.185 2.345-.742 4.893-1.115 7.647-1.115h32.457l-1.248 8.265H20.146c-1.332 0-2.566.19-3.706.57-1.14.38-2.124.912-2.944 1.594-.823.68-1.472 1.493-1.95 2.444-.477.953-.71 1.995-.71 3.134 0 1.144.23 2.18.687 3.115.46.932 1.108 1.733 1.95 2.397.836.665 1.827 1.18 2.968 1.543 1.14.365 2.375.547 3.707.547h22.28z"/>
				<linearGradient id="icon-chormolab-logo-b" x1="6.498" x2="265.116" y1="11.342" y2="11.342" gradientUnits="userSpaceOnUse">
					<stop offset="0" stopColor="#E31E70"/>
					<stop offset="1" stopColor="#46308A"/>
				</linearGradient>
				<path fill="url(#icon-chormolab-logo-b)" d="M55.647 21.354H49.48v-7.72H37.563v7.72h-6.226V1.33h6.226v7.094H49.48V1.33h6.167v20.024z"/>
				<linearGradient id="icon-chormolab-logo-c" x1="6.496" x2="265.117" y1="11.342" y2="11.342" gradientUnits="userSpaceOnUse">
					<stop offset="0" stopColor="#E31E70"/>
					<stop offset="1" stopColor="#46308A"/>
				</linearGradient>
				<path fill="url(#icon-chormolab-logo-c)" d="M87.86 21.354h-8.297l-4.458-5.295h-9.52v5.294h-6.197V11.12H76.81c.958 0 1.768-.202 2.426-.6.66-.397.99-.95.99-1.648 0-.78-.302-1.36-.898-1.75-.597-.388-1.438-.584-2.517-.584H59.39l4.044-5.208h12.87c1.137 0 2.314.105 3.532.315 1.218.208 2.327.585 3.323 1.12 1 .542 1.82 1.272 2.47 2.188.647.917.973 2.092.973 3.532 0 .778-.12 1.517-.358 2.214-.238.695-.584 1.325-1.033 1.886-.45.558-1 1.034-1.647 1.42-.65.39-1.384.662-2.202.824.343.262.72.59 1.142.99.417.398.978.945 1.674 1.646l3.683 3.888z"/>
				<linearGradient id="icon-chormolab-logo-d" x1="6.503" x2="265.102" y1="11.344" y2="11.344" gradientUnits="userSpaceOnUse">
					<stop offset="0" stopColor="#E31E70"/>
					<stop offset="1" stopColor="#46308A"/>
				</linearGradient>
				<path fill="url(#icon-chormolab-logo-d)" d="M103.366 1c4.87 0 8.527.83 10.972 2.486 2.444 1.655 3.667 4.27 3.667 7.842 0 3.59-1.218 6.218-3.652 7.87-2.435 1.66-6.096 2.49-10.986 2.49-4.91 0-8.58-.83-11.003-2.49-2.424-1.652-3.636-4.28-3.636-7.87 0-3.572 1.218-6.187 3.65-7.842C94.813 1.83 98.475 1 103.366 1zm0 15.478c1.555 0 2.875-.067 3.95-.194 1.076-.13 1.95-.383 2.622-.766.666-.38 1.152-.9 1.45-1.57s.446-1.54.446-2.62-.148-1.95-.446-2.62c-.298-.668-.784-1.187-1.45-1.56-.673-.366-1.546-.615-2.622-.746-1.075-.128-2.396-.195-3.95-.195-1.56 0-2.877.067-3.953.195-1.078.13-1.953.38-2.617.746-.67.373-1.154.89-1.455 1.56-.298.67-.447 1.54-.447 2.62s.15 1.952.448 2.62c.302.67.786 1.19 1.456 1.57.664.382 1.54.635 2.617.766 1.076.127 2.395.194 3.953.194z"/>
				<linearGradient id="icon-chormolab-logo-e" x1="6.503" x2="265.099" y1="11.344" y2="11.344" gradientUnits="userSpaceOnUse">
					<stop offset="0" stopColor="#E31E70"/>
					<stop offset="1" stopColor="#46308A"/>
				</linearGradient>
				<path fill="url(#icon-chormolab-logo-e)" d="M134.11 8.784c.438.777.82 1.46 1.152 2.048.33.59.618 1.115.866 1.577.253.457.47.874.662 1.253.186.38.37.747.554 1.108.16-.36.332-.724.523-1.093.19-.368.407-.79.658-1.26.25-.467.537-.99.866-1.57.33-.578.717-1.256 1.153-2.035l3.202-5.688c.364-.637.816-1.152 1.366-1.538.55-.394 1.234-.586 2.05-.586.78 0 1.486.225 2.114.672.625.448 1.08 1.143 1.36 2.082l5.06 17.6h-6.17l-1.885-6.973c-.317-1.137-.59-2.134-.805-2.994-.223-.857-.414-1.695-.568-2.515-.342.7-.723 1.473-1.14 2.322-.42.85-.968 1.92-1.648 3.217l-2.692 5.028c-.262.5-.525.895-.795 1.184-.27.288-.545.515-.82.675-.282.16-.58.264-.9.312-.32.05-.67.077-1.05.077s-.728-.026-1.046-.078c-.32-.05-.62-.152-.897-.313-.28-.16-.554-.387-.825-.675-.268-.29-.533-.684-.792-1.184l-2.696-5.058c-.36-.677-.677-1.286-.957-1.828-.28-.537-.534-1.02-.763-1.448-.227-.43-.43-.826-.6-1.186-.17-.358-.335-.708-.493-1.047-.16.8-.35 1.635-.57 2.5-.22.868-.477 1.874-.775 3.01l-1.886 6.974h-6.08l5.18-17.6c.28-.94.738-1.634 1.378-2.082.636-.447 1.344-.672 2.12-.672.802 0 1.475.19 2.024.57.547.378 1.002.898 1.362 1.555l3.202 5.66z"/>
				<linearGradient id="icon-chormolab-logo-f" x1="6.486" x2="265.111" y1="11.344" y2="11.344" gradientUnits="userSpaceOnUse">
					<stop offset="0" stopColor="#E31E70"/>
					<stop offset="1" stopColor="#46308A"/>
				</linearGradient>
				<path fill="url(#icon-chormolab-logo-f)" d="M170.812 1c4.87 0 8.527.83 10.973 2.486 2.443 1.655 3.668 4.27 3.668 7.842 0 3.59-1.217 6.218-3.656 7.87-2.43 1.66-6.093 2.49-10.984 2.49-4.907 0-8.576-.83-11-2.49-2.426-1.652-3.64-4.28-3.64-7.87 0-3.572 1.216-6.187 3.65-7.842C162.262 1.83 165.922 1 170.814 1zm0 15.478c1.558 0 2.873-.067 3.95-.194 1.08-.13 1.954-.383 2.62-.766.67-.38 1.155-.9 1.456-1.57.298-.667.445-1.54.445-2.62s-.147-1.95-.445-2.62c-.3-.668-.787-1.187-1.455-1.56-.667-.366-1.542-.615-2.62-.746-1.078-.128-2.394-.195-3.95-.195-1.557 0-2.875.067-3.95.195-1.08.13-1.954.38-2.62.746-.67.373-1.153.89-1.456 1.56-.296.67-.445 1.54-.445 2.62s.15 1.952.445 2.62c.303.67.787 1.19 1.455 1.57.667.382 1.542.635 2.62.766 1.076.127 2.394.194 3.95.194z"/>
				<linearGradient id="icon-chormolab-logo-g" x1="6.479" x2="265.111" y1="11.342" y2="11.342" gradientUnits="userSpaceOnUse">
					<stop offset="0" stopColor="#E31E70"/>
					<stop offset="1" stopColor="#46308A"/>
				</linearGradient>
				<path fill="url(#icon-chormolab-logo-g)" d="M210.3 16.206l-4.012 5.148h-17.695V1.33h6.198v14.876h15.51z"/>
				<linearGradient id="icon-chormolab-logo-h" x1="6.501" x2="265.103" y1="11.177" y2="11.177" gradientUnits="userSpaceOnUse">
					<stop offset="0" stopColor="#E31E70"/>
					<stop offset="1" stopColor="#46308A"/>
				</linearGradient>
				<path fill="url(#icon-chormolab-logo-h)" d="M219.848 21.354l3.743-5.148h6.9c.65 0 1.212.022 1.693.062-.28-.36-.607-.814-.974-1.362-.37-.547-.725-1.064-1.064-1.542l-3.59-5.3-9.403 13.29h-7.333l12.843-18.11c.42-.578.948-1.096 1.584-1.555.64-.46 1.447-.69 2.428-.69.937 0 1.72.214 2.35.644.63.43 1.16.96 1.6 1.6l12.515 18.11h-23.292z"/>
				<linearGradient id="icon-chormolab-logo-i" x1="6.462" x2="265.103" y1="11.342" y2="11.342" gradientUnits="userSpaceOnUse">
					<stop offset="0" stopColor="#E31E70"/>
					<stop offset="1" stopColor="#46308A"/>
				</linearGradient>
				<path fill="url(#icon-chormolab-logo-i)" d="M267.957 11.058c.88.26 1.622.77 2.23 1.528.612.758.914 1.736.914 2.932 0 .84-.133 1.615-.39 2.323-.262.71-.698 1.324-1.317 1.84-.617.52-1.455.926-2.5 1.227-1.048.303-2.36.447-3.935.447H245.35V9.174h17.727c.46 0 .863-.097 1.21-.284.35-.19.528-.548.528-1.064 0-.5-.182-.84-.54-1.018-.36-.178-.76-.27-1.198-.27H245.35l4.194-5.21h13.265c1.198 0 2.276.116 3.245.344.967.23 1.8.578 2.484 1.047.688.472 1.217 1.05 1.587 1.74.368.684.552 1.49.552 2.407 0 .6-.08 1.13-.24 1.587-.16.458-.363.862-.612 1.21-.25.35-.54.643-.87.87-.328.23-.66.402-1 .524zm-16.373 2.395v2.753h11.403c.678 0 1.165-.12 1.466-.36.3-.237.45-.585.45-1.048 0-.435-.15-.77-.45-1-.3-.228-.788-.344-1.466-.344h-11.403z"/>
				<g fill="#9B257B">
					<path d="M47.67 30.23h1.814l1.595 5.216 1.727-5.236h1.452l1.727 5.236 1.595-5.215h1.77l-2.628 7.757H55.25l-1.74-5.04-1.737 5.04h-1.475l-2.63-7.756zM63.972 30.23h1.815l1.595 5.216 1.728-5.236h1.452l1.728 5.236 1.595-5.215h1.77l-2.628 7.757h-1.475l-1.738-5.04-1.738 5.04H66.6l-2.628-7.756zM80.275 30.23h1.815l1.595 5.216 1.728-5.236h1.452l1.728 5.236 1.595-5.215h1.77l-2.628 7.757h-1.475l-1.738-5.04-1.738 5.04h-1.476l-2.63-7.756zM95.94 36.172h1.78v1.76h-1.78v-1.76zM106.038 30.176h1.563l3.3 7.756h-1.77l-.704-1.727h-3.257l-.705 1.727h-1.728l3.3-7.756zm1.782 4.532l-1.023-2.497-1.022 2.498h2.045zM116.158 30.23h1.694v3.048h3.125V30.23h1.694v7.702h-1.693V34.84h-3.125v3.092h-1.694v-7.7zM131.23 30.176h1.562l3.3 7.756h-1.77l-.705-1.727h-3.257l-.704 1.727h-1.728l3.3-7.756zm1.782 4.532l-1.023-2.497-1.023 2.498h2.045zM147.874 30.23v7.702h-1.694V31.76h-2.223v.583c0 4.532-.737 5.688-2.497 5.688-.275 0-.682-.043-.892-.098l.11-1.397c.077.012.154.022.264.022.914 0 1.43-.584 1.43-4.73V30.23h5.502zM160.425 37.932h-1.672v-5.05l-3.366 5.05h-1.596v-7.7h1.674v5.05l3.39-5.05h1.57v7.7zM171.866 32.167c0 .957-.562 1.474-1.243 1.77.825.266 1.44.838 1.44 1.817 0 1.33-1.133 2.31-2.926 2.31-1.617 0-2.597-.45-3.422-1.287l.902-1.177c.627.615 1.452.98 2.453.98.715 0 1.3-.33 1.3-.925 0-.64-.65-.902-1.53-.902h-.892v-1.408h.87c.89 0 1.374-.308 1.374-.89 0-.54-.506-.86-1.243-.86-.947 0-1.563.32-2.08.848l-.89-1.078c.714-.748 1.638-1.265 3.1-1.265 1.652 0 2.786.868 2.786 2.067zM177.607 30.23h1.694v2.62h1.64c1.783 0 2.817.99 2.817 2.496 0 1.585-1.122 2.586-2.927 2.586h-3.224v-7.7zm1.695 4.07v2.103h1.508c.836 0 1.265-.363 1.265-1.078 0-.648-.43-1.023-1.276-1.023H179.3zm5.314-4.07h1.693v7.702h-1.694v-7.7zM191.985 36.172h1.783v1.76h-1.783v-1.76zM199.103 34.082c0-2.19 1.728-3.982 4.104-3.982 2.377 0 4.082 1.77 4.082 3.982 0 2.19-1.73 3.982-4.105 3.982-2.377 0-4.082-1.77-4.082-3.982zm6.414 0c0-1.32-.968-2.42-2.332-2.42s-2.31 1.077-2.31 2.42c0 1.32.967 2.42 2.33 2.42s2.312-1.078 2.312-2.42zM212.864 30.23h1.694v3.048h3.125V30.23h1.694v7.702h-1.694V34.84h-3.125v3.092h-1.694v-7.7zM231.82 30.23v7.702h-1.695V31.76h-2.223v.583c0 4.532-.737 5.688-2.497 5.688-.275 0-.682-.043-.892-.098l.11-1.397c.077.012.154.022.264.022.914 0 1.43-.584 1.43-4.73V30.23h5.502zM240.377 30.176h1.563l3.3 7.756h-1.77l-.705-1.727h-3.257l-.704 1.727h-1.728l3.3-7.756zm1.782 4.532l-1.024-2.497-1.022 2.498h2.045zM257.13 37.932h-1.67v-5.05l-3.367 5.05h-1.596v-7.7h1.673v5.05l3.388-5.05h1.573v7.7zm-5.137-9.957l.98-.176c.143.45.406.736.868.736s.728-.286.87-.737l.98.175c-.155 1.057-.837 1.673-1.85 1.673-1.01 0-1.693-.616-1.847-1.673zM263.05 30.23h1.693v3.048h3.125V30.23h1.694v7.702h-1.694V34.84h-3.125v3.092h-1.694v-7.7z"/>
				</g>
			</svg>
		)
	}
}

export default IconChromolabLogo