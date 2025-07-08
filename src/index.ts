import http from "node:http";

export default {
	async fetch(request: any){
		timers.setTimeout(() => {
			console.log("last");
		}, 10);

		return new Response(`The code is foo`, { status: 200 });
	},
}
