import { useState } from 'react';

export const useForm = (initialState = {}) => {
	const [values, setValues] = useState(initialState);

	const handleInputChange = ({ target }) => {
		// console.log(target.name);
		// console.log(target.value);
		setValues({
			...values,
			[target.name]: target.value,
		});
	};

	return [values, handleInputChange];
};
