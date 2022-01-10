import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import fs from "fs";

type Props = {
	images: string[];
};

export const getStaticProps: GetStaticProps<Props> = async () => {
	const seasonPath = "daw/daw_s02";
	const rounds = fs.readdirSync(`./public/${seasonPath}`);
	const images = rounds.flatMap((round) => {
		const roundPieces = fs.readdirSync(`./public/${seasonPath}/${round}`);
		return roundPieces.map((piece) => `/${seasonPath}/${round}/${piece}`);
	});

	return { props: { images } };
};

const Home: NextPage<Props> = ({ images }) => {
	return (
		<div className="h-screen flex items-center">
			<Head>
				<title>Digital Art Worm</title>
				<meta name="description" content="A Collective Art!" />
				<link rel="icon" href="https://fav.farm/%F0%9F%96%BC%EF%B8%8F" />
			</Head>

			<ul className="flex min-w-max">
				{images.map((image) => (
					<li key={image}>
						{/* eslint-disable-next-line @next/next/no-img-element */}
						<img src={image} alt="" width={640} height={480} loading="lazy" />
					</li>
				))}
			</ul>
		</div>
	);
};

export default Home;
