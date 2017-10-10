import {AuditableBase} from '../auditable-base';

export class User extends AuditableBase {
    username: string;
    password: string;
    email: string;
    firstName: string;
    lastName: string;
    phone: string;
    role: string;
}
