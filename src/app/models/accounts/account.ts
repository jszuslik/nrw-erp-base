import {AuditableBase} from '../auditable-base';
import {User} from '../users/user';
import {Address} from '../address/address';

export class Account extends AuditableBase {
    accountOwner: User;
    name: string;
    industry: string;
    employees: string;
    annualRevenue: string;
    phone: string;
    website: string;
    rating: number;
    fax: string;
    ticker: string;
    ownership: string;
    locations: Address[];
}
