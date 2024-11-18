import { Button }        from '@nextui-org/react';
import { auth, signOut } from '@/auth';


async function Home() {
	const session = await auth();
	
	return <div>
		<h1>Home</h1>
		<p>Welcome to the home page.</p>
		{session ? <>
			<pre>{JSON.stringify(session, null, 2)}</pre>
			<form
					action={async () => {
						'use server';
						await signOut();
						console.log('Signed out');
					}}>
				<Button color="danger" radius="none" type="submit">Sign out</Button>
			</form>
		</> : 'No session'}
		<Button color="primary" radius="none"> Click me</Button>
	</div>;
}

export default Home;
