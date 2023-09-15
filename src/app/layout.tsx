// @style
import "./layout.css";

export default function (props: React.PropsWithChildren) {
	// component logic

	// component layout
	return (
		<html lang="en" data-theme="emerald">
			<head>
				<title>Hello Superbase!</title>
			</head>
			<body className="h-screen w-screen overflow-hidden">{props.children}</body>
		</html>
	);
}
