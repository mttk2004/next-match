/**
 *  Author : Mai Tran Tuan Kiet
 *  File   : likeActions.ts
 *  Created: 10:55, 11/22/24
 *  "Family is where life begins and love never ends."
 */

'use server';

import { prisma }        from '@/lib/prisma';
import { getAuthUserId } from './authActions';


export async function toggleLikeMember(targetUserId: string, isLiked: boolean) {
	try {
		const userId = await getAuthUserId();
		if (!userId) throw new Error('User not authenticated');
		
		// Check if the authenticated user exists
		const sourceUser = await prisma.user.findUnique({
			where: { id: userId }
		});
		if (!sourceUser) throw new Error('Authenticated user does not exist');
		
		// Check if the target user exists
		const targetUser = await prisma.user.findUnique({
			where: { id: targetUserId }
		});
		if (!targetUser) throw new Error('Target user does not exist');
		
		if (isLiked) {
			await prisma.like.delete({
				where: {
					sourceUserId_targetUserId: {
						sourceUserId: userId,
						targetUserId
					}
				}
			});
		} else {
			await prisma.like.create({
				data: {
					sourceUserId: userId,
					targetUserId
				}
			});
		}
	} catch (error) {
		console.log(error);
		throw error;
	}
}

export async function fetchCurrentUserLikeIds() {
	try {
		const userId = await getAuthUserId();
		
		const likeIds = await prisma.like.findMany({
			where : {
				sourceUserId: userId
			},
			select: {
				targetUserId: true
			}
		});
		
		return likeIds.map(like => like.targetUserId);
	}
	catch (error) {
		console.log(error);
		throw error;
	}
}

