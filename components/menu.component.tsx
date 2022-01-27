import Link from "next/link";

export function Menu() {
	return (
		<div className="text-blue-600 py-1">
			<div className="inline-block font-semibold font-serif">
				<span>Digital Art Worm</span>
				<span> / </span>
				<span>A Collective Art</span>
			</div>
			<ul className="flex flex-wrap gap-2 font-mono text-sm">
				<li className="underline">
					<Link href="/">Season 1</Link>
				</li>
				<li>/</li>
				<li className="underline">
					<Link href="/s2">Season 2</Link>
				</li>
				<li>/</li>
				<li className="underline">
					<a
						href="https://github.com/iamandrewluca/digitalartworm"
						target="_blank"
						rel="noopener noreferrer"
					>
						Source
					</a>
				</li>
				<li>/</li>
				<li className="underline">
					<a
						href="https://topicmd.com/forum.php?action=viewtopic&topicid=88126531"
						target="_blank"
						rel="noopener noreferrer"
					>
						topicmd.com
					</a>
				</li>
			</ul>
		</div>
	);
}
