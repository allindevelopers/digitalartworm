import glob from "glob";

export function getPiecesInfo(filter: (piece: string) => boolean) {
	const pieces = glob.sync("./public/pieces/**.png").filter(filter);
	return pieces.map((piece) => {
		const path = piece.replace("./public", "");
		const [_, _pieces, info, user, _ext] = path.replace(".", "/").replace("_", "/").split("/");
		return { path, user, info };
	});
}
