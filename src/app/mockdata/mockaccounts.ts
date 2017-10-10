import {Account} from '../models/accounts/account';

export const NEWACCOUNT: Account = {
    id: -1,
    isActive: false,
    createdOn: '',
    createdBy: null,
    modifiedOn: '',
    modifiedBy: null,
    accountOwner: null,
    name: '',
    industry: '',
    employees: '',
    annualRevenue: '',
    phone: '',
    website: '',
    rating: 0,
    fax: '',
    ticker: '',
    ownership: '',
    locations: []
};

export const ACCOUNTS: Account[] = [
    {
        id: 1,
        isActive: true,
        createdOn: '10-11-17',
        createdBy: {
            id: 1,
            isActive: true,
            createdOn: '',
            createdBy: null,
            modifiedOn: '',
            modifiedBy: null,
            username: 'jszuslik',
            password: '',
            email: 'joshuaszuslik@gmail.com',
            firstName: 'Joshua',
            lastName: 'Szuslik',
            phone: '41420203939',
            role: 'admin'
        },
        modifiedOn: '10-11-17',
        modifiedBy: {
            id: 1,
            isActive: true,
            createdOn: '',
            createdBy: null,
            modifiedOn: '',
            modifiedBy: null,
            username: 'jszuslik',
            password: '',
            email: 'joshuaszuslik@gmail.com',
            firstName: 'Joshua',
            lastName: 'Szuslik',
            phone: '41420203939',
            role: 'admin'
        },
        accountOwner: {
            id: 1,
            isActive: true,
            createdOn: '',
            createdBy: null,
            modifiedOn: '',
            modifiedBy: null,
            username: 'jszuslik',
            password: '',
            email: 'joshuaszuslik@gmail.com',
            firstName: 'Joshua',
            lastName: 'Szuslik',
            phone: '41420203939',
            role: 'admin'
        },
        name: 'Omni Resources',
        industry: 'Tech',
        employees: '150-200',
        annualRevenue: '$10,000,000',
        phone: '4142023939',
        website: 'https://www.omniresources.com',
        rating: 5,
        fax: '',
        ticker: 'OMNI',
        ownership: 'ESOP',
        locations: [
            {
                id: 1,
                isActive: true,
                address1: 'W257S6750 Fox Ct',
                address2: '',
                city: 'Waukesha',
                state: 'WI',
                zip: '53189',
                country: 'United States'
            }
        ]
    }
];

