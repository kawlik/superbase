// @root
import { Bill } from "@/types/bill";
import { superbaseClient } from "./superbase";

export function subscribeLedgers() {
	return superbaseClient.channel("channel-ledgers").on<Bill[]>(
		"postgres_changes",
		{
			event: "*",
			filter: "*",
			schema: "public",
			table: "Bills",
		},
		(payload) => {},
	);
}
