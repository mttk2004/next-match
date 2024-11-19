/**
 *  Author : Mai Tran Tuan Kiet
 *  File   : middleware.ts
 *  Created: 11:01, 11/19/24
 *  "Family is where life begins and love never ends."
 */

import { auth }                     from '@/auth';
import { authRoutes, publicRoutes } from '@/routes';
import { NextResponse }             from 'next/server';


export default auth(req => {
	const { nextUrl, auth } = req;
	
	const isLoggedIn = !!auth;
	const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
	const isAuthRoute = authRoutes.includes(nextUrl.pathname);
	
	// Public routes
	if (isPublicRoute) return NextResponse.next();
	
	// Auth routes
	if (isAuthRoute) {
		if (isLoggedIn) return NextResponse.redirect(new URL('/', req.url));
		return NextResponse.next();
	}
	
	// Private routes
	if (!isLoggedIn) return NextResponse.redirect(new URL('/login', req.url));
	return NextResponse.next();
});


export const config = {
	matcher: ['/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)'],
};
