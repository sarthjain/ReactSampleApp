const makeNetworkCall = async (url, { requestType, headers, body, ...otherOptions }) => {
    requestType = requestType ?? 'GET'; 
    url = requestType === 'GET' ? ( url + new URLSearchParams(body) ) : url;
    const options = {
        method: requestType,
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
            ...headers
        },
        body: body && requestType && requestType !== 'GET' ? JSON.stringify(body) : null,
        ...otherOptions
    }

    const response = await fetch(url, options);
    if (!response.ok) {
        console.log(`Network Call :: ${url} : Error - `, response);
        throw new Error(response);
    }
    return await response.json();
};

export default makeNetworkCall;