//import fetch from 'focus-core/network/fetch';
//import countryUrl from '../config/server/countries';

let fakeData = [];
for(let i = 0; i < 150; i++) {
    fakeData.push({
        id: i,
        name: `Country ${i}`
    })
}


export function loadCountryById(id) {
    console.log('iDDDDD', id);
    return Promise.resolve(fakeData.find(country => country.id === id));
}

export function loadCountryListByCriteria({data: bodyData, urlData}) {
    const {criteria} = bodyData;
    const {skip, top} = urlData;
    console.log('criteria', criteria);
    const filteredData = criteria !== null && criteria !== undefined ? fakeData.filter(country => country.name.toLowerCase().indexOf(criteria) !== -1) : fakeData;
    const begin = skip;
    const end = begin + top;
    const totalCount = filteredData.length !== fakeData.length ? filteredData.length : fakeData.length;
    return Promise.resolve(filteredData.slice(begin, end))
                  .then(d => {return {dataList: d, totalCount};});

}

export function saveCountry(country) {
    const idx = fakeData.findIndex(c => c.id === country.id);
    if(idx !== -1) {
        fakeData[idx] = country;
    }else {
        console.warn('non existing country???');
    }
    return Promise.resolve(country);
}
