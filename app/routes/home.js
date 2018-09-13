import Route from '@ember/routing/route';

export default Route.extend({
    model() {
        return [{
            header: 'Who are we?',
            text: 'Ampeva is a consulting organization with a primary focus in Process Safety and Risk Management.  Services are based on years of experience in compliance with 29 CFR 1910.119 (OSHA Process Safety Management of Highly Hazardous Chemicals) and 40 CFR Part 68 (EPA‐ Risk Management Plan).   Paired with a diverse background in onshore Natural Gas E&P, midstream Gas Processing/Treating/NGL Fractionation, and the Chemical Processing Industry, Ampeva delivers a first‐class product for its client.',
        },
        {
            header: '',
            text: '',
        },
        {
            header: '',
            text: '',
        }];
    }
});