exports = module.exports = {
    bip70: require('./'),
    requestBuilderTest: require('./test/request_builder.test'),
    protobufTest: require('./test/protobuf.test'),
    uriTest: require('./test/uri.test'),
    validationTest: require('./test/x509/validation.test'),
    clientTest: require('./test/client.test')
};
