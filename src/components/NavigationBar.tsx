/**
 *  Author : Mai Tran Tuan Kiet
 *  File   : NavigationBar.tsx
 *  Created: 08:28, 11/16/24
 *  "Family is where life begins and love never ends."
 */

'use client';

import { Button, Navbar, NavbarBrand, NavbarContent } from '@nextui-org/react';
import { GiMatchTip }                                 from 'react-icons/gi';
import { NavLink }                                    from '@/components/index';
import Link                                           from 'next/link';


function NavigationBar() {
	return <Navbar
			className="text-black bg-gradient-to-r from-amber-300 to-amber-400"
			classNames={{
				item: [
					'font-semibold',
					'text-gray-600',
					'hover:text-gray-800',
					'focus:text-gray-800',
					'data-[active=true]:text-gray-800 data-[active=true]:underline',
				]
			}}>
		<NavbarBrand>
			<Link href='/' className="flex gap-2 items-center cursor-pointer">
				<GiMatchTip size={24} />
				<span className="font-bold cursor-pointer text-large">NextMatch</span>
			</Link>
		</NavbarBrand>
		
		<NavbarContent justify="center" className="space-x-4">
			<NavLink href="/members" label="Members" />
			<NavLink href="/lists" label="Lists" />
			<NavLink href="/messages" label="Messages" />
		</NavbarContent>
		
		<NavbarContent justify="end">
			<Button as={Link} href="/register" color="primary" className="font-semibold px-6" radius="none">Sign
																																																	 Up</Button>
			<Button
					as={Link} href="/login" color="secondary" variant="ghost"
					className="font-semibold px-6" radius="none">Sign
																											 In</Button>
		</NavbarContent>
	</Navbar>;
}

export default NavigationBar;
