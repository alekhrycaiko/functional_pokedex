const redis = require('redis');
const setCache = function (client, key, val) {   
    return new Promise ((resolve, reject) => {
        client.set(key, val, ( (err, res) => { 
            if (err) { 
                reject(err);
            }
            resolve(val);
        }));
    });
}
const getCache = function (client, key) {
    return new Promise ((resolve, reject) => { 
        client.get(key, function (err, resp) { 
            if (err) { 
                reject(err);
            }
            resolve(resp);
        });
    });
};
module.exports = function () {
    return { 
        setCache : setCache,
        getCache : getCache
    }
}
