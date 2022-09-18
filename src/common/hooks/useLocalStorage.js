const { useState, useEffect } = require("react");

function useLocalStorage(key) {
	const [value, setValue] = useState();

	useEffect(() => {
		const strValue = localStorage.getItem(key);
		if (strValue) {
			setValue(JSON.parse(strValue));
		}
	}, []);

	return [value];
}

export default useLocalStorage;
