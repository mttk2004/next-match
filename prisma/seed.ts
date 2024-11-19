/**
 *  Author : Mai Tran Tuan Kiet
 *  File   : seed.ts
 *  Created: 16:00, 11/19/24
 *  "Family is where life begins and love never ends."
 */

import { PrismaClient } from '@prisma/client';
import { membersData }  from './membersData';
import { hash }         from 'bcryptjs';


const prisma = new PrismaClient();

const seedMembers = async () => {
	return membersData.map(async member => prisma.user.create({
		data: {
			email        : member.email,
			emailVerified: new Date(),
			name         : member.name,
			passwordHash : await hash('password', 12),
			member       : {
				create: {
					birthday   : new Date(member.dateOfBirth),
					gender     : member.gender,
					name       : member.name,
					createdAt  : member.created,
					updatedAt  : member.lastActive,
					description: member.description,
					city       : member.city,
					country    : member.country,
					image      : member.image,
					photos     : {
						create: {
							url: member.image,
						}
					}
				}
			}
		}
	}));
};

const main = async () => {
	await seedMembers();
};

main().catch(e => {
	console.log(e);
	process.exit(1);
}).finally(async () => {
	await prisma.$disconnect();
});
