import {AuditableBase} from '../auditable-base';

export class User extends AuditableBase {
    username: string;
    password: string;
}
