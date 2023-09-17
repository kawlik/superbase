// @node
import { create } from "zustand";

export const useLedgersContext = create<{
	list: unknown[];
}>(() => ({
	list: [],
}));
