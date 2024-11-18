/**
 *  Author : Mai Tran Tuan Kiet
 *  File   : Providers.tsx
 *  Created: 21:36, 11/15/24
 *  "Family is where life begins and love never ends."
 */

import { ReactNode }      from 'react';
import { NextUIProvider } from '@nextui-org/react';


function Providers({ children }: { children: ReactNode }) {
	return <NextUIProvider>
		{children}
	</NextUIProvider>;
}

export default Providers;
