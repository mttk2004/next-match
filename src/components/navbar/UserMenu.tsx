/**
 *  Author : Mai Tran Tuan Kiet
 *  File   : UserMenu.tsx
 *  Created: 21:30, 11/18/24
 *  "Family is where life begins and love never ends."
 */

'use client';

import { Session }     from 'next-auth';
import {
	Avatar,
	Dropdown, DropdownItem,
	DropdownMenu,
	DropdownSection,
	DropdownTrigger
}                      from '@nextui-org/react';
import Link            from 'next/link';
import { signOutUser } from '@/app/actions';


function UserMenu({ user }: Props) {
	return <Dropdown placement="bottom-end">
		<DropdownTrigger>
			<Avatar
					isBordered={true} as="button" className="transition-transform transform hover:scale-110"
					color="secondary" size="sm" name={user?.name || 'user avatar'}
					src={user?.image || undefined}
			/>
		</DropdownTrigger>
		
		<DropdownMenu variant="flat" aria-label="User actions menu">
			<DropdownSection>
				<DropdownItem
						isReadOnly={true} as="span" className="h-12 flex flex-row"
						aria-label={user?.name || 'username'}>
					Signed in as {user?.name || 'username'}
				</DropdownItem>
				<DropdownItem as={Link} href="members/edit">
					Edit Profile
				</DropdownItem>
				<DropdownItem color="danger" aria-label="Logout" onClick={async () => await signOutUser()}>
					Logout
				</DropdownItem>
			</DropdownSection>
		</DropdownMenu>
	</Dropdown>;
}

type Props = {
	user: Session['user'];
};

export default UserMenu;
