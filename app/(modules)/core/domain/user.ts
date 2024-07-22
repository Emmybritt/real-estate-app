export interface User {
	firstName: string;
	lastName: string;
	email: string;
	phoneNo: string;
	password: string;
	otp: string;
}

export interface UserSliceState {
	user: User | null;
	loading: boolean;
}
