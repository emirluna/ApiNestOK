export class CreateUserDto {
    readonly email: string;
    readonly password: string;
    readonly name: string;
    readonly last_name: string;
    readonly phone: string;
    readonly status: number;
    readonly role: string;
    readonly enterprise_id: string;
}