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
			"_[KEY]_Bill_User": {
				Row: {
					bill_id: string;
					id: string;
					user_id: string;
				};
				Insert: {
					bill_id: string;
					id?: string;
					user_id: string;
				};
				Update: {
					bill_id?: string;
					id?: string;
					user_id?: string;
				};
				Relationships: [
					{
						foreignKeyName: "_[KEY]_Bill_User_bill_id_fkey";
						columns: ["bill_id"];
						referencedRelation: "Bills";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "_[KEY]_Bill_User_user_id_fkey";
						columns: ["user_id"];
						referencedRelation: "Users";
						referencedColumns: ["id"];
					},
				];
			};
			Bills: {
				Row: {
					id: string;
					timestampCreatedAt: string;
					timestampUpdatedAt: string;
					timestampValidTo: string | null;
					title: string;
				};
				Insert: {
					id?: string;
					timestampCreatedAt?: string;
					timestampUpdatedAt?: string;
					timestampValidTo?: string | null;
					title: string;
				};
				Update: {
					id?: string;
					timestampCreatedAt?: string;
					timestampUpdatedAt?: string;
					timestampValidTo?: string | null;
					title?: string;
				};
				Relationships: [];
			};
			PostExpenses: {
				Row: {
					expenseCost: number;
					expenseName: string;
					expenseType: string | null;
					id: string;
					userID: string;
				};
				Insert: {
					expenseCost: number;
					expenseName: string;
					expenseType?: string | null;
					id: string;
					userID: string;
				};
				Update: {
					expenseCost?: number;
					expenseName?: string;
					expenseType?: string | null;
					id?: string;
					userID?: string;
				};
				Relationships: [
					{
						foreignKeyName: "PostExpenses_userID_fkey";
						columns: ["userID"];
						referencedRelation: "Users";
						referencedColumns: ["id"];
					},
				];
			};
			PostMessages: {
				Row: {
					id: string;
					messageText: string;
					messageType: string;
				};
				Insert: {
					id?: string;
					messageText: string;
					messageType: string;
				};
				Update: {
					id?: string;
					messageText?: string;
					messageType?: string;
				};
				Relationships: [];
			};
			Posts: {
				Row: {
					id: string;
					postMessageID: string | null;
					timestampCreatedAt: string;
					timestampUpdatedAt: string;
					userID: string;
				};
				Insert: {
					id: string;
					postMessageID?: string | null;
					timestampCreatedAt?: string;
					timestampUpdatedAt?: string;
					userID: string;
				};
				Update: {
					id?: string;
					postMessageID?: string | null;
					timestampCreatedAt?: string;
					timestampUpdatedAt?: string;
					userID?: string;
				};
				Relationships: [
					{
						foreignKeyName: "Posts_postMessageID_fkey";
						columns: ["postMessageID"];
						referencedRelation: "PostMessages";
						referencedColumns: ["id"];
					},
					{
						foreignKeyName: "Posts_userID_fkey";
						columns: ["userID"];
						referencedRelation: "Users";
						referencedColumns: ["id"];
					},
				];
			};
			Users: {
				Row: {
					id: string;
					photoURL: string | null;
					timestampCreatedAt: string;
					timestampUpdatedAt: string;
					username: string | null;
				};
				Insert: {
					id: string;
					photoURL?: string | null;
					timestampCreatedAt?: string;
					timestampUpdatedAt?: string;
					username?: string | null;
				};
				Update: {
					id?: string;
					photoURL?: string | null;
					timestampCreatedAt?: string;
					timestampUpdatedAt?: string;
					username?: string | null;
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
