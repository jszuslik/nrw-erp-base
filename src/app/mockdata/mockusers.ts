import {User} from '../models/users/user';

export const NEWUSER: User = {
    id: -1,
    isActive: false,
    createdOn: '',
    createdBy: null,
    modifiedOn: '',
    modifiedBy: null,
    username: '',
    password: '',
    email: '',
    firstName: '',
    lastName: '',
    phone: '',
    role: ''
};

export const USERS: User[] = [
    {
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
    }
];
