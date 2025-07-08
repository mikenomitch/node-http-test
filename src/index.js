// import timers from "node:timers";

// export default {
// 	async fetch(request){
// 		timers.setTimeout(() => {
// 			console.log("last");
// 		}, 10);

// 		return new Response(`The code is foo`, { status: 200 });
// 	},
// }


import { request } from 'node:http';

export default {
	async fetch(req) {
		const code = await new Promise((resolve, reject) => {
			request('http://example.com', { method: 'GET' }, (res) => {
				resolve(res.statusCode);
			});
		});

		return new Response(`The code is: ${code}`, { status: 200 });
	},
}
