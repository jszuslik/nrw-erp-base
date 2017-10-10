import {Base} from './base';
import {User} from './users/user';

export class AuditableBase extends Base {
    createdOn: string;
    createdBy: User;
    modifiedOn: string;
    modifiedBy: User;
}
