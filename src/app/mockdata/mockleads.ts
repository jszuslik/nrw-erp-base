import {Lead} from '../models/leads/lead';

export const LEADS: Lead[] = [
    {
        id: 1,
        name: 'Joshua Szuslik',
        image: 'https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/4/005/046/32f/3b07c21.jpg',
        company: 'Omni Resources',
        email: 'joshua.szuslik@omniresources.com',
        phone: '4142023939',
        source: 'Website',
        owner: 'Joshua',
        isActive: true
    },
    {
        id: 2,
        image: 'https://lanex.com/wp-content/uploads/2017/08/max-mccoy-e1502315349156.jpg',
        name: 'Max McCoy',
        company: 'Lanex, LLC',
        email: 'max@lanex.com',
        phone: '5555555555',
        source: 'Website',
        owner: 'Joshua',
        isActive: true
    }
];
