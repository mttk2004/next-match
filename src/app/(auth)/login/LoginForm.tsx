/**
 *  Author : Mai Tran Tuan Kiet
 *  File   : LoginForm.tsx
 *  Created: 14:42, 11/16/24
 *  "Family is where life begins and love never ends."
 */

'use client';

import { Button, Card, CardBody, CardHeader, Input } from '@nextui-org/react';
import { GiPadlock }                                 from 'react-icons/gi';
import { useForm }                                   from 'react-hook-form';
import { loginSchema, LoginSchema }                  from '@/lib/schemas';
import { zodResolver }                               from '@hookform/resolvers/zod';
import { useRouter }                                 from 'next/navigation';
import { signInUSer }                                from '@/app/actions';
import { toast }                                     from 'react-toastify';


function LoginForm() {
	const router = useRouter();
	const {
					register,
					handleSubmit,
					formState: { errors, isValid, isSubmitting }
				} = useForm<LoginSchema>({
		mode            : 'onChange',
		shouldFocusError: true,
		resolver        : zodResolver(loginSchema),
	});
	
	async function onSubmit(data: LoginSchema) {
		const result = await signInUSer(data);
		
		if (result.success) {
			router.push('/members');
		}
		else {
			toast.error(result.errors as string);
		}
	}
	
	return <Card className="max-w-xl mx-auto px-6 py-5 space-y-8">
		<CardHeader className="flex justify-center items-center">
			<div className="flex flex-col gap-2 items-center text-secondary">
				<div className="flex gap-3 items-center">
					<GiPadlock size={24} />
					<h2 className="text-2xl font-bold">Login</h2>
				</div>
				
				<p className="text-neutral-500 text-sm">This is the login form</p>
			</div>
		</CardHeader>
		
		<CardBody>
			<form
					onSubmit={handleSubmit(onSubmit)}
					className="space-y-10">
				<div className="space-y-6">
					<Input
							label="Email" variant="flat" placeholder="Enter your email"
							defaultValue="" {...register('email')} radius="none"
							isInvalid={!!errors.email} errorMessage={errors.email?.message as string}
					/>
					<Input
							label="Password" variant="flat" placeholder="Enter your password"
							type="password" defaultValue="" {...register('password')} radius="none"
							isInvalid={!!errors.password} errorMessage={errors.password?.message as string}
					/>
				</div>
				
				<Button
						color="primary" radius="none" type="submit" className="w-full py-6"
						isLoading={isSubmitting} isDisabled={!isValid}
				>
					Login
				</Button>
			</form>
		</CardBody>
	</Card>;
}

export default LoginForm;
