/**
 *  Author : Mai Tran Tuan Kiet
 *  File   : prisma.ts
 *  Created: 10:13, 11/17/24
 *  "Family is where life begins and love never ends."
 */

import { PrismaClient } from '@prisma/client';


const globalForPrisma = global as unknown as { prisma: PrismaClient };
export const prisma = globalForPrisma.prisma || new PrismaClient({ log: ['query'] });
if (process.env.NODE_ENV === 'development') {
	globalForPrisma.prisma = prisma;
}
