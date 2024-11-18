/**
 *  Author : Mai Tran Tuan Kiet
 *  File   : Providers.tsx
 *  Created: 21:36, 11/15/24
 *  "Family is where life begins and love never ends."
 */

import { ReactNode }      from 'react';
import { NextUIProvider } from '@nextui-org/react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Providers({ children }: { children: ReactNode }) {
	return <NextUIProvider>
		{children}
		<ToastContainer
				position="bottom-right" pauseOnHover={true} className="isolate z-50"
				hideProgressBar={true} />
	</NextUIProvider>;
}

export default Providers;
