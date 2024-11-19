/**
 *  Author : Mai Tran Tuan Kiet
 *  File   : memberActions.ts
 *  Created: 20:17, 11/19/24
 *  "Family is where life begins and love never ends."
 */

import { prisma } from '@/lib/prisma';
import { auth }   from '@/auth';


export const getMembers = async () => {
	const session = await auth();
	if (!session?.user) return null;
	
	try {
		return await prisma.member.findMany({
			where: {
				NOT: { userId: session.user.id },
			}
		});
	}
	catch (error) {
		console.log(error);
	}
};
