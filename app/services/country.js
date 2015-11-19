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
    return fakeData.filter(country => country.id = id);
}

export function loadCountryListByCriteria({data: bodyData, urlData}) {
    const {criteria} = bodyData;
    const {skip, top} = urlData;
    console.log('criteria', criteria);
    const begin = skip;
    const end = begin + top;
    return Promise.resolve(fakeData.slice(begin, end))
                  .then(d => {return {dataList: d, totalCount: fakeData.length};});

}
