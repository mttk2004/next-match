/**
 *  Author : Mai Tran Tuan Kiet
 *  File   : registerSchema.ts
 *  Created: 17:01, 11/16/24
 *  "Family is where life begins and love never ends."
 */

import { z } from 'zod';


export const registerSchema = z.object({
	name           : z.string().min(3, 'Name is too short').max(255, 'Name is too long'),
	email          : z.string()
										.email('Invalid email')
										.min(5, 'Email is too short')
										.max(255, 'Email is too long'),
	password       : z.string().min(8, 'Password is too short').max(255, 'Password is too long'),
	confirmPassword: z.string().min(8, 'Password is too short').max(255, 'Password is too long'),
}).refine(data => data.password === data.confirmPassword, {
	message: 'Passwords do not match',
	path   : ['confirmPassword'],
});

export type RegisterSchema = z.infer<typeof registerSchema>;
