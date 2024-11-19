/**
 *  Author : Mai Tran Tuan Kiet
 *  File   : MemberCard.tsx
 *  Created: 20:31, 11/19/24
 *  "Family is where life begins and love never ends."
 */

import { Member }                  from '@prisma/client';
import { Card, CardFooter, Image } from '@nextui-org/react';
import Link                        from 'next/link';
import { calculateAge }            from '@/lib/utils';


function MemberCard({ member }: Props) {
	return <Card
			as={Link} href={`members/${member.userId}`} fullWidth={true} radius="sm"
			className="overflow-hidden" isPressable={true}>
		<Image
				src={member.image || '/images/user.png'} alt={member.name} width={300} isZoomed={true}
				className="aspect-square object-cover" radius="none" />
		
		<CardFooter className="absolute bottom-0 bg-dark-gradient text-white z-10">
			<div className="flex-col flex">
				<span className="font-bold">{member.name}, {calculateAge(member.birthday)}</span>
				<span className="text-sm">{member.city}</span>
			</div>
		</CardFooter>
	</Card>;
}

type Props = {
	member: Member;
}

export default MemberCard;
