// @next
import Link from "next/link";

// @icon
import { IconType } from "react-icons";
import {
	MdLogout,
	MdMoreVert,
	MdPerson,
	MdSearch,
	MdSecurity,
	MdSettings,
} from "react-icons/md";

export function Header() {
	// component logic

	// component layout
	return (
		<header className="navbar flex-nowrap gap-2">
			<div className="flex flex-1 flex-nowrap gap-2">
				<ButtonAvatar href="#" />
				<span className="text-lg">Home</span>
			</div>
			<nav className="flex flex-nowrap gap-2">
				<ButtonSearch href="#" />
				<DropdownMenu
					list={[
						[
							{ href: "#", icon: MdSecurity, text: "Security" },
							{ href: "#", icon: MdSettings, text: "Settings" },
						],
						[{ href: "/auth/logout", icon: MdLogout, text: "Logout" }],
					]}
				/>
			</nav>
		</header>
	);
}

function ButtonAvatar(props: { href: string }) {
	// component logic

	// component layout
	return (
		<Link href={props.href} className="avatar btn btn-circle btn-sm online">
			<MdPerson className="text-xl" />
		</Link>
	);
}

function ButtonSearch(props: { href: string }) {
	// component logic

	// component layout
	return (
		<Link href={props.href} className="btn btn-square btn-ghost btn-sm">
			<MdSearch className="text-xl" />
		</Link>
	);
}

function DropdownMenu(props: {
	list: {
		href: string;
		icon: IconType;
		text: string;
	}[][];
}) {
	// component logic

	// component layout
	return (
		<div className="dropdown dropdown-end">
			<label tabIndex={0} className="btn btn-square btn-ghost btn-sm">
				<MdMoreVert className="text-xl" />
			</label>
			<ul
				tabIndex={0}
				className="menu dropdown-content rounded-box z-20 mt-2 w-36 bg-base-100 shadow"
			>
				{props.list.map((items, index) => (
					<div key={index}>
						{index > 0 && <hr className="my-2" />}
						{items.map((item) => (
							<li key={item.text}>
								<Link href={item.href}>
									<item.icon className="mr-2 text-lg" />
									{item.text}
								</Link>
							</li>
						))}
					</div>
				))}
			</ul>
		</div>
	);
}
