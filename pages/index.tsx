import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import fs from "fs";

type Props = {
	images: string[];
};

export const getStaticProps: GetStaticProps<Props> = async () => {
	const seasonPath = "daw/daw_s01";
	const rounds = fs.readdirSync(`./public/${seasonPath}`);
	const images = rounds.flatMap((round) => {
		const roundPieces = fs.readdirSync(`./public/${seasonPath}/${round}`);
		return roundPieces.map((piece) => `/${seasonPath}/${round}/${piece}`);
	});

	return { props: { images } };
};

const Home: NextPage<Props> = ({ images }) => {
	return (
		<div className="w-[425px] mx-auto">
			<Head>
				<title>Digital Art Worm</title>
				<meta name="description" content="A Collective Art!" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<ul>
					{images.map((image) => (
						<li key={image}>
							{/* eslint-disable-next-line @next/next/no-img-element */}
							<img src={image} alt="" />
						</li>
					))}
				</ul>
			</main>

			<footer className="text-center">În memoria lui Iarik. R.I.P.</footer>
		</div>
	);
};

export default Home;
