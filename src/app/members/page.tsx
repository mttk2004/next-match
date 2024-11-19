import { getMembers } from '@/app/actions';
import MemberCard     from '@/app/members/MemberCard';


async function MembersPage() {
	const members = await getMembers();
	
	return <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 mt-6">
		{members && members.map(member => <MemberCard key={member.id} member={member} />)}
	</div>;
}

export default MembersPage;
