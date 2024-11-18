import Credentials             from 'next-auth/providers/credentials';
import type { NextAuthConfig } from 'next-auth';
import { loginSchema }         from '@/lib/schemas';
import { getUserByEmail }      from '@/app/actions';
import { compare }             from 'bcryptjs';


export default {
	providers: [
		Credentials({
			name: 'credentials',
			async authorize(credentials) {
				const { success, data } = loginSchema.safeParse(credentials);
				if (!success) return null;
				
				const { email, password } = data;
				const user = await getUserByEmail(email);
				if (!user || !user.passwordHash || !(await compare(password,
						user.passwordHash))) return null;
				
				return user;
			}
		})
	]
} satisfies NextAuthConfig;
