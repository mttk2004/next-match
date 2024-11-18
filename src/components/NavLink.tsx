/**
 *  Author : Mai Tran Tuan Kiet
 *  File   : NavLink.tsx
 *  Created: 10:37, 11/16/24
 *  "Family is where life begins and love never ends."
 */

'use client';

import Link            from 'next/link';
import { NavbarItem }  from '@nextui-org/react';
import { usePathname } from 'next/navigation';


function NavLink({ href, label }: Props) {
	const pathname = usePathname();
	
	return <NavbarItem as={Link} isActive={pathname === href} href={href}>{label}</NavbarItem>;
}

type Props = {
	href: string;
	label: string;
}

export default NavLink;
