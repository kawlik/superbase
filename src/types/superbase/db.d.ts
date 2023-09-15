export type Json =
	| string
	| number
	| boolean
	| null
	| { [key: string]: Json | undefined }
	| Json[];

export interface Database {
	public: {
		Tables: {
			_BillToUser: {
				Row: {
					A: number;
					B: number;
				};
				Insert: {
					A: number;
					B: number;
				};
				Update: {
					A?: number;
					B?: number;
				};
				Relationships: [
					{
						foreignKeyName: "_BillToUser_A_fkey";
						columns: ["A"];
						referencedRelation: "Bill";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "_BillToUser_B_fkey";
						columns: ["B"];
						referencedRelation: "User";
						referencedColumns: ["id"];
					},
				];
			};
			_prisma_migrations: {
				Row: {
					applied_steps_count: number;
					checksum: string;
					finished_at: string | null;
					id: string;
					logs: string | null;
					migration_name: string;
					rolled_back_at: string | null;
					started_at: string;
				};
				Insert: {
					applied_steps_count?: number;
					checksum: string;
					finished_at?: string | null;
					id: string;
					logs?: string | null;
					migration_name: string;
					rolled_back_at?: string | null;
					started_at?: string;
				};
				Update: {
					applied_steps_count?: number;
					checksum?: string;
					finished_at?: string | null;
					id?: string;
					logs?: string | null;
					migration_name?: string;
					rolled_back_at?: string | null;
					started_at?: string;
				};
				Relationships: [];
			};
			Bill: {
				Row: {
					id: number;
					timestampCreatedAt: string;
					timestampUpdatedAt: string;
					timestampValidTo: string | null;
					title: string;
				};
				Insert: {
					id?: number;
					timestampCreatedAt?: string;
					timestampUpdatedAt: string;
					timestampValidTo?: string | null;
					title: string;
				};
				Update: {
					id?: number;
					timestampCreatedAt?: string;
					timestampUpdatedAt?: string;
					timestampValidTo?: string | null;
					title?: string;
				};
				Relationships: [];
			};
			Post: {
				Row: {
					id: number;
					postExpenseId: number | null;
					postMessageId: number | null;
					timestampCreatedAt: string;
					timestampUpdatedAt: string;
					userId: number;
				};
				Insert: {
					id?: number;
					postExpenseId?: number | null;
					postMessageId?: number | null;
					timestampCreatedAt?: string;
					timestampUpdatedAt: string;
					userId: number;
				};
				Update: {
					id?: number;
					postExpenseId?: number | null;
					postMessageId?: number | null;
					timestampCreatedAt?: string;
					timestampUpdatedAt?: string;
					userId?: number;
				};
				Relationships: [
					{
						foreignKeyName: "Post_postExpenseId_fkey";
						columns: ["postExpenseId"];
						referencedRelation: "PostExpense";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "Post_postMessageId_fkey";
						columns: ["postMessageId"];
						referencedRelation: "PostMessage";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "Post_userId_fkey";
						columns: ["userId"];
						referencedRelation: "User";
						referencedColumns: ["id"];
					},
				];
			};
			PostExpense: {
				Row: {
					expenseCost: number;
					expenseName: string;
					expenseType: string;
					id: number;
					userId: number;
				};
				Insert: {
					expenseCost: number;
					expenseName: string;
					expenseType: string;
					id?: number;
					userId: number;
				};
				Update: {
					expenseCost?: number;
					expenseName?: string;
					expenseType?: string;
					id?: number;
					userId?: number;
				};
				Relationships: [
					{
						foreignKeyName: "PostExpense_userId_fkey";
						columns: ["userId"];
						referencedRelation: "User";
						referencedColumns: ["id"];
					},
				];
			};
			PostMessage: {
				Row: {
					id: number;
					messageText: string;
					messageType: string;
				};
				Insert: {
					id?: number;
					messageText: string;
					messageType: string;
				};
				Update: {
					id?: number;
					messageText?: string;
					messageType?: string;
				};
				Relationships: [];
			};
			User: {
				Row: {
					id: number;
					nickname: string;
					photoURL: string | null;
					username: string;
				};
				Insert: {
					id?: number;
					nickname: string;
					photoURL?: string | null;
					username: string;
				};
				Update: {
					id?: number;
					nickname?: string;
					photoURL?: string | null;
					username?: string;
				};
				Relationships: [];
			};
		};
		Views: {
			[_ in never]: never;
		};
		Functions: {
			[_ in never]: never;
		};
		Enums: {
			[_ in never]: never;
		};
		CompositeTypes: {
			[_ in never]: never;
		};
	};
}
