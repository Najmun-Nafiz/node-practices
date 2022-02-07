
const handler = {};

handler.homeHandler = (requestProperties, callback) => {
    callback(200, {
        message: 'This is a sample url',
    });
}

module.exports = handler;