// @next
import Link from "next/link";

// @icon
import { IconType } from "react-icons";
import { MdCalendarMonth, MdEditCalendar, MdPerson } from "react-icons/md";

export function Footer() {
	// component logic

	// component layout
	return (
		<footer className="navbar flex-nowrap gap-2 border-t pb-6">
			<ButtonNav href="/home/ledgers" icon={MdEditCalendar} />
			<ButtonNav href="/home/reports" icon={MdCalendarMonth} />
			<ButtonNav href="/home/account" icon={MdPerson} />
		</footer>
	);
}

function ButtonNav(props: { href: string; icon: IconType }) {
	// component logic

	// component layout
	return (
		<Link href={props.href} className="btn btn-ghost flex-1">
			<props.icon className="text-xl" />
		</Link>
	);
}
