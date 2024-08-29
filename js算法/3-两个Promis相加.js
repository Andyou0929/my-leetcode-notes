/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */
var addTwoPromises = async function(promise1, promise2) {
    const [a,b]=await Promise.all([promise1,promise2]);
    return a+b;
    
};


 addTwoPromises(new Promise(resolve => setTimeout(() => resolve(2), 20)), new Promise(resolve => setTimeout(() => resolve(5), 60))).then(console.log)
 
