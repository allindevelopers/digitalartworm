import usersInfo from "../data/users-info.json";

export function UserLink({ user }: { user: string }) {
	const lowerCaseUser = user.toLowerCase();
	const userInfo = usersInfo.find(({ name }) => {
		return name.toLowerCase() === lowerCaseUser;
	});

	const social = userInfo?.socials[0];

	if (!social) return <span>{lowerCaseUser}</span>;

	return (
		<a
			href={social.url}
			target="_blank"
			rel="noopener noreferrer"
			className="hover:underline"
		>
			{social.handle}
		</a>
	);
}
