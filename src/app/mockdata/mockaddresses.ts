import {Address} from '../models/address/address';

export const NEWADDRESS: Address = {
    id: -1,
    isActive: false,
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: '',
    country: ''
};
export const ADDRESSES: Address[] = [
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
];
