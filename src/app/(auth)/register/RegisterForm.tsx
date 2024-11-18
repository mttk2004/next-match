/**
 *  Author : Mai Tran Tuan Kiet
 *  File   : RegisterForm.tsx
 *  Created: 17:00, 11/16/24
 *  "Family is where life begins and love never ends."
 */

'use client';

import { useForm }                                   from 'react-hook-form';
import { zodResolver }                               from '@hookform/resolvers/zod';
import { registerSchema, RegisterSchema }            from '@/lib/schemas';
import { Card, CardBody, CardHeader, Input, Button } from '@nextui-org/react';
import { GiPadlock }                                 from 'react-icons/gi';
import { registerUser }                              from '@/app/actions/authActions';


function RegisterForm() {
	const {
					register,
					setError,
					handleSubmit,
					formState: { errors, isSubmitting, isValid }
				} = useForm<RegisterSchema>({
		mode            : 'onTouched',
		shouldFocusError: true,
		resolver        : zodResolver(registerSchema),
	});
	
	async function onSubmit(data: RegisterSchema) {
		const result = await registerUser(data);
		console.log(result);
		
		if (result.success) {
			console.log('User registered successfully');
			console.log(result.data);
		}
		else {
			if (Array.isArray(result.errors)) {
				result.errors.forEach((error) => {
					const fieldName = error.path.join('.');
					setError(fieldName as keyof RegisterSchema, {
						type   : 'manual',
						message: error.message,
					});
				});
			}
			else {
				setError('root.serverError', {
					type   : 'manual',
					message: result.errors,
				});
			}
		}
	}
	
	return (
			<Card className="max-w-xl mx-auto px-6 py-5 space-y-8">
				<CardHeader className="flex justify-center items-center">
					<div className="flex flex-col gap-2 items-center text-secondary">
						<div className="flex gap-3 items-center">
							<GiPadlock size={24} />
							<h2 className="text-2xl font-bold">Register</h2>
						</div>
						<p className="text-neutral-500 text-sm">This is the register form</p>
					</div>
				</CardHeader>
				<CardBody>
					<form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
						<div className="space-y-4">
							{errors.root?.serverError && (
									<p className="text-red-500 text-sm">{errors.root.serverError.message}</p>
							)}
							<Input
									label="Name" variant="flat" placeholder="Enter your name"
									defaultValue="" {...register('name')} radius="none"
									isInvalid={!!errors.name} errorMessage={errors.name?.message as string}
							/>
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
							<Input
									label="Confirm Password" variant="flat" placeholder="Confirm your password"
									type="password" defaultValue="" {...register('confirmPassword')}
									isInvalid={!!errors.confirmPassword} radius="none"
									errorMessage={errors.confirmPassword?.message as string}
							/>
						</div>
						<Button
								isLoading={isSubmitting} isDisabled={!isValid}
								color="primary" radius="none" type="submit"
								className="w-full py-6">Register</Button>
					</form>
				</CardBody>
			</Card>
	);
}

export default RegisterForm;
