import Credentials from "next-auth/providers/credentials"
import type { NextAuthConfig } from "next-auth"
import { loginSchema } from '@/lib/schemas';
import { getUserByEmail } from '@/app/actions';
import { compare } from 'bcryptjs';

export default { providers: [Credentials({
		name: "Credentials",
		async authorize(credentials) {
			const validated = loginSchema.safeParse(credentials);
			
			if (!validated.success) {
				return null;
			}
			
			const { email, password } = validated.data;
			
			const user = await getUserByEmail(email);
			
			if (!user || !await compare(password, user.passwordHash)) {
				return null;
			}
			
			return user;
		}
	})] } satisfies NextAuthConfig
