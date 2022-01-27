import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import { getPiecesInfo } from "../utils";
import { PieceInfo } from "../components/piece-info.component";
import { Menu } from "../components/menu.component";

type Props = {
	images: ReturnType<typeof getPiecesInfo>;
};

export const getStaticProps: GetStaticProps<Props> = async () => ({
	props: { images: getPiecesInfo((piece) => piece.includes("/S02")) },
});

const Home: NextPage<Props> = ({ images }) => {
	return (
		<div className="h-screen flex items-center">
			<Head>
				<title>Digital Art Worm</title>
				<meta name="description" content="A Collective Art!" />
				<link rel="icon" href="https://fav.farm/%F0%9F%96%BC%EF%B8%8F" />
			</Head>

			<div className="overflow-auto">
				<div className="ml-2 sticky left-2">
					<Menu />
				</div>
				<ul className="flex min-w-max">
					{images.map(({ path, info, user }) => (
						<li key={info} id={info} className="relative group">
							{/* eslint-disable-next-line @next/next/no-img-element */}
							<img src={path} alt="" width={640} height={480} loading="lazy" />
							<PieceInfo
								info={info}
								user={user}
								className="absolute bottom-1 left-1"
							/>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default Home;
