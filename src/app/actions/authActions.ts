/**
 *  Author : Mai Tran Tuan Kiet
 *  File   : authActions.ts
 *  Created: 11:05, 11/17/24
 *  "Family is where life begins and love never ends."
 */

'use server';

import { registerSchema, RegisterSchema } from '@/lib/schemas';
import { prisma }                         from '@/lib/prisma';
import { ActionResult }                   from '@/types';
import { User }                           from '@prisma/client';
import bcrypt                             from 'bcryptjs';


export const registerUser = async (data: RegisterSchema): Promise<ActionResult<User>> => {
	try {
		const { success, data: validatedData, error } = registerSchema.safeParse(data);
		if (!success) return { success: false, errors: error.errors };
		
		const { name, email, password } = validatedData;
		const existingUser: User | null = await prisma.user.findUnique({ where: { email } });
		if (existingUser) return { success: false, errors: 'Email already exists' };
		
		const hashedPassword = await bcrypt.hash(password, 12);
		const user = await prisma.user.create({
			data: { name, email, passwordHash: hashedPassword },
		});
		
		return { success: true, data: user };
	}
	catch (error) {
		console.log(error);
		return { success: false, errors: 'Internal server error' };
	}
};

export const getUserByEmail = async (email: string): Promise<User | null> => {
	return prisma.user.findUnique({ where: { email } });
};

export const getUserById = async (id: string): Promise<User | null> => {
	return prisma.user.findUnique({ where: { id } });
};
