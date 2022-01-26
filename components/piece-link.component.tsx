export function PieceLink({ info }: { info: string }) {
	return (
		<a href={`#${info}`} className="hover:underline">
			{info.replace("R", " R").replace("P", " P").toLocaleLowerCase()}
		</a>
	);
}
