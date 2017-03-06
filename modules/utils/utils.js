export const api = (path, options) => {
	return new Promise((resolve, reject) => {
		fetch(`http://www.chromolab.ru/api/${path}`, options)
			.then(res => res.text())
			.then(data => data.replace('<br>', '\\n'))
			.then(data => data.replace(/<[^<]+?>/g, ''))
			.then(data => JSON.parse(data))
			.then(data => resolve(data))
			.catch(err => reject(err))
	})
}

export const from = (path, paramsObject) => {
	return new Promise((resolve, reject) => {
		fetch(`http://www.chromolab.ru/api/${path}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(paramsObject)
		})
			.then(res => res.json())
			.then(data => {
				if (!data.error)
					resolve(data)
				else
					reject(data)
			})
			.catch(err => reject(err))
	})
}

export const serializeForm = (form) => {
	return [...form.elements]
		.filter(({ type }) => type != 'submit')
		.reduce((result, { name, value }, index) => {
			return result + `${index != 0 ? '&' : ''}${name}=${value}`
		}, '?')
}
