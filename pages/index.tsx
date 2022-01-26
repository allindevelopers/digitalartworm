import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { getPiecesInfo } from "../utils";

type Props = {
	images: ReturnType<typeof getPiecesInfo>;
};

export const getStaticProps: GetStaticProps<Props> = async () => ({
	props: { images: getPiecesInfo((piece) => piece.includes("/S01")) },
});

const Home: NextPage<Props> = ({ images }) => {
	return (
		<div className="w-[425px] mx-auto">
			<Head>
				<title>Digital Art Worm</title>
				<meta name="description" content="A Collective Art!" />
				<link rel="icon" href="https://fav.farm/%F0%9F%96%BC%EF%B8%8F" />
			</Head>

			<main>
				<ul>
					{images.map(({ path, info, user }) => (
						<li
							key={info}
							id={info}
							onClick={() => (location.hash = info)}
							className="relative group"
						>
							{/* eslint-disable-next-line @next/next/no-img-element */}
							<img
								src={path}
								alt=""
								width={425}
								height={300}
								loading="lazy"
								className="cursor-pointer"
							/>
							<div
								className={[
									"absolute bottom-1 left-1 rounded-full px-2 py-1",
									"bg-black/50 text-white text-xs font-mono",
									"opacity-0 group-hover:opacity-100 transition-opacity duration-500",
								].join(" ")}
							>
								{user.toLocaleLowerCase()}
								<span> / </span>
								{info.replace("R", " R").replace("P", " P").toLocaleLowerCase()}
							</div>
						</li>
					))}
				</ul>
			</main>

			<footer className="text-center">În memoria lui Iarik. R.I.P.</footer>
		</div>
	);
};

export default Home;
