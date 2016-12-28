import fetch from 'focus-core/network/fetch';
import urlBuilder from 'focus-core/util/url/builder';

import { defaultsDeep } from 'lodash';

const defaultOptions = {
    isCORS: false
};

const defaultMethod = 'GET';

/**
 * Private function, to simplify call to fetch.
 * 
 * @param {function} urlFunc the result of the call to urlBuilder.
 * @param {object} urlData data to provide in the url
 * @param {object} bodyData data to provide in the body of the request
 * @param {object} options options for fetch
 * @returns {any} the result of the fetch call
 */
const fetchCall = (urlFunc, urlData, bodyData, options) => (
    fetch(
        urlFunc({
            urlData: urlData || {},
            data: bodyData
        }), defaultsDeep({}, options, defaultOptions)
    )
);

/**
 * Function, to build API driver, so easy call can be made in service.
 * 
 * @param {array} urls an array of url object, like { url: 'api/test/action/', method: 'GET' }
 * @returns {object} an object, with properties named as the config given, like a DAO or DAL (myDriver.loadMyObject({id:myId}), or myDriver.saveMyObject(null, toSave)). 
 */
const apiDriverBuilder = function apiDriverBuilder(urls) {
    const apiDriver = {};
    for (let prop in urls) {
        const url = urls[prop];
        apiDriver[prop] = (urlData, data, options) =>
            (
                fetchCall(
                    urlBuilder(url.url, url.method || defaultMethod),
                    urlData,
                    data,
                    options
                )
            )
    }
    return apiDriver;
}

export default apiDriverBuilder;
