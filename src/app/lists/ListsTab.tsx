/**
 *  Author : Mai Tran Tuan Kiet
 *  File   : ListsTab.tsx
 *  Created: 20:59, 11/22/24
 *  "Family is where life begins and love never ends."
 */

'use client';

import { Member }                                  from '@prisma/client';
import { Tab, Tabs }                               from '@nextui-org/react';
import { Key, useTransition }                      from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import MemberCard                                  from '@/app/members/MemberCard';
import { Loading }                                 from '@/components';


function ListsTab({ members, likeIds }: Props) {
	const searchParams = useSearchParams();
	const router = useRouter();
	const pathname = usePathname();
	const [isPending, startTransition] = useTransition();
	
	const tabs = [
		{ id: 'source', label: 'Members I have liked' },
		{ id: 'target', label: 'Members that like me' },
		{ id: 'mutual', label: 'Mutual likes' },
	];
	
	function handleTabChange(key: Key) {
		startTransition(() => {
			const params = new URLSearchParams(searchParams);
			params.set('type', key.toString());
			router.replace(`${pathname}?${params.toString()}`);
		});
	}
	
	return <div className="flex flex-col gap-5 mt-8 w-full">
		<Tabs
				aria-label="Like tabs" items={tabs} color="secondary"
				onSelectionChange={key => handleTabChange(key)}>
			{item => <Tab
					key={item.id} value={item.id} title={item.label}>
				{
					isPending ? <div className="font-bold">
						<Loading />
					</div> : <>
						{members.length ? <div
								className="mt-10 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-8">
							{members.map(member => (
									<MemberCard member={member} key={member.id} likeIds={likeIds} />
							))}
						</div> : <div>
							 <p className="text-center text-lg">No members found</p>
						 </div>}
					</>
				}
			</Tab>}
		</Tabs>
	</div>;
}

type  Props = {
	members: Member[];
	likeIds: string[];
}

export default ListsTab;
