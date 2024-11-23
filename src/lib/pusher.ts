/**
 *  Author : Mai Tran Tuan Kiet
 *  File   : pusher.ts
 *  Created: 22:03, 11/22/24
 *  "Family is where life begins and love never ends."
 */


import PusherServer from 'pusher';
import PusherClient from 'pusher-js';


declare global {
	var pusherServerInstance: PusherServer | undefined;
	var pusherClientInstance: PusherClient | undefined;
}

if (!global.pusherServerInstance) {
	global.pusherServerInstance = new PusherServer({
		appId  : process.env.PUSHER_APP_ID!,
		key    : process.env.NEXT_PUBLIC_PUSHER_APP_KEY!,
		secret : process.env.PUSHER_SECRET!,
		cluster: 'ap1',
		useTLS : true
	});
}

if (!global.pusherClientInstance) {
	global.pusherClientInstance = new PusherClient(process.env.NEXT_PUBLIC_PUSHER_APP_KEY!, {
		channelAuthorization: {
			endpoint : '/api/pusher-auth',
			transport: 'ajax'
		},
		cluster             : 'ap1'
	});
}

export const pusherServer = global.pusherServerInstance;
export const pusherClient = global.pusherClientInstance;
