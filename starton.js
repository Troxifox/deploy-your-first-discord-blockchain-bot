const axios = require("axios")

const axiosInstance = axios.create({
	baseURL: "https://api.starton.io",
	headers: {
		"x-api-key": "sk_live_643b2006-4496-48ba-a613-5105abcfcfc9",
	},
})

axiosInstance.post(
	"/v3/smart-contract/polygon-mumbai/0xFa5f9974Ff1B37eED08c4f2f7E7D094858c4a27d/read",
	{
		functionName: "symbol",
		params: []
	}
).then((response) => {
	console.log(response.data)
})