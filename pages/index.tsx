import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { Menu } from "../components/menu.component";
import { PieceInfo } from "../components/piece-info.component";
import { getPiecesInfo } from "../utils";

type Props = {
	images: ReturnType<typeof getPiecesInfo>;
};

export const getStaticProps: GetStaticProps<Props> = async () => ({
	props: { images: getPiecesInfo((piece) => piece.includes("/S01")) },
});

const Home: NextPage<Props> = ({ images }) => {
	return (
		<div className="w-[400px] mx-auto">
			<Head>
				<title>Digital Art Worm</title>
				<meta name="description" content="A Collective Art!" />
				<link rel="icon" href="https://fav.farm/%F0%9F%96%BC%EF%B8%8F" />
			</Head>

			<main>
				<div className="sticky top-0 pl-2 z-10 bg-white/80">
					<Menu />
				</div>
				<ul>
					{images.map(({ path, info, user }) => (
						<li key={info} id={info} className="relative group">
							{/* eslint-disable-next-line @next/next/no-img-element */}
							<img src={path} alt="" width={400} height={300} loading="lazy" />
							<PieceInfo
								info={info}
								user={user}
								className="absolute bottom-1 left-1"
							/>
						</li>
					))}
				</ul>
			</main>

			<footer className="text-center">În memoria lui Iarik. R.I.P.</footer>
		</div>
	);
};

export default Home;
