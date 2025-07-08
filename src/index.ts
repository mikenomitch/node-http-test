import { request } from 'node:http';

export default {
	async fetch(request, env, ctx): Promise<Response> {
		const code = await new Promise<string>((resolve, reject) => {
			request('http://example.com', { method: 'GET' }, (res: any) => {
				resolve(res.statusCode);
			});
		});

		return new Response(`The code is: ${code}`, { status: 200 });
	},
} satisfies ExportedHandler<Env>;
