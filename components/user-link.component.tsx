import usersInfo from "../data/users-info.json";

export function UserLink({ user }: { user: string }) {
	const lowerCaseUser = user.toLowerCase();
	const userInfo = usersInfo.find((info) => info.name.toLowerCase() === lowerCaseUser);

	if (!userInfo) return <span>{lowerCaseUser}</span>;

	if (userInfo.social)
		return (
			<a
				href={userInfo.social.url}
				target="_blank"
				rel="noopener noreferrer"
				className="hover:underline"
			>
				{userInfo.social.handle}
			</a>
		);

	return (
		<a
			href={`https://topicmd.com/userdetails.php?id=${userInfo.tmdId}`}
			target="_blank"
			rel="noopener noreferrer"
			className="hover:underline"
		>
			{userInfo.name}
		</a>
	);
}
