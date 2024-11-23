/**
 *  Author : Mai Tran Tuan Kiet
 *  File   : Loading.tsx
 *  Created: 12:31, 11/23/24
 *  "Family is where life begins and love never ends."
 */

import { Spinner } from '@nextui-org/react';


function Loading({ label }: { label?: string }) {
	return <div className="fixed inset-0 flex justify-center items-center">
		<Spinner label={label || 'Loading...'} color="secondary" labelColor="secondary" />
	</div>;
}

export default Loading;
