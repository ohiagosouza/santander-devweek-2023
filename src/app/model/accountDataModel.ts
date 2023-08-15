export interface AccountDataModel {
	name: String,
	account: {
		agency: String,
		number: String,
	},
	card: {
		limit: Number,
		number: String,
	},
};
