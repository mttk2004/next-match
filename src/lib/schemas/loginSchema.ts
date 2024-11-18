/**
 *  Author : Mai Tran Tuan Kiet
 *  File   : loginSchema.ts
 *  Created: 16:30, 11/16/24
 *  "Family is where life begins and love never ends."
 */

import { z } from 'zod';


export const loginSchema = z.object({
	email   : z.string()
						 .email('Invalid email')
						 .min(5, 'Email is too short')
						 .max(255, 'Email is too long'),
	password: z.string().min(8, 'Password is too short').max(255, 'Password is too long'),
});

export type LoginSchema = z.infer<typeof loginSchema>;
