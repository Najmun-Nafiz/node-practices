
const environments = {};

// local environment
environments.local = {
    port: 4000,
    envName: 'local'
};

// production environment
environments.production = {
    port: 6000,
    envName: 'production'
};

// determine which environment was passed
const currentEnvironment = typeof(process.env.NODE_ENV) == 'string' ? process.env.NODE_ENV : 'local';

// export corresponding environment object
const environmentToExport = typeof(environments[currentEnvironment]) == 'object' ? environments[currentEnvironment] : environments.local;

// export module
module.exports = environmentToExport;