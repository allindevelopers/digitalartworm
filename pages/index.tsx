import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import glob from "glob";

type Props = {
	images: Array<{
		path: string;
		user: string;
		info: string;
	}>;
};

export const getStaticProps: GetStaticProps<Props> = async () => {
	const images = glob
		.sync("./public/pieces/**.png")
		.filter((piece) => piece.includes("/S01"))
		.map((piece) => {
			const path = piece.replace("./public", "");
			const [_, _pieces, info, user, _ext] = path
				.replace(".", "/")
				.replace("_", "/")
				.split("/");

			return { path, user, info };
		});

	return { props: { images } };
};

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
						<li key={info} id={info} onClick={() => (location.hash = info)}>
							{/* eslint-disable-next-line @next/next/no-img-element */}
							<img src={path} alt="" width={425} height={300} loading="lazy" />
						</li>
					))}
				</ul>
			</main>

			<footer className="text-center">În memoria lui Iarik. R.I.P.</footer>
		</div>
	);
};

export default Home;
