/**
 *  Author : Mai Tran Tuan Kiet
 *  File   : utils.ts
 *  Created: 21:22, 11/19/24
 *  "Family is where life begins and love never ends."
 */

import { differenceInYears } from 'date-fns';


export const calculateAge = (dob: Date) => {
	return differenceInYears(new Date(), dob);
};
