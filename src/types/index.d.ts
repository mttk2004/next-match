/**
 *  Author : Mai Tran Tuan Kiet
 *  File   : index.d.ts
 *  Created: 21:03, 11/17/24
 *  "Family is where life begins and love never ends."
 */

import { ZodIssue } from 'zod';


export type ActionResult<T> = { success: true; data: T } | {
	success: false;
	errors: string | ZodIssue[]
};
