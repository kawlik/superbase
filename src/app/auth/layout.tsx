export default function (props: React.PropsWithChildren) {
	// component hooks

	// component layout
	return <main className="flex h-full w-full place-content-center">{props.children}</main>;
}
