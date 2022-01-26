import { UserLink } from "./user-link.component";
import { PieceLink } from "./piece-link.component";

export function PieceInfo({
	user,
	info,
	className,
}: {
	user: string;
	info: string;
	className: string;
}) {
	return (
		<div
			className={[
				"bg-black/50 text-white text-xs font-mono",
				"opacity-0 group-hover:opacity-100 transition-opacity duration-500",
				"inline-block rounded-full px-2 py-1",
				className,
			].join(" ")}
		>
			<UserLink user={user} />
			<span> / </span>
			<PieceLink info={info} />
		</div>
	);
}
