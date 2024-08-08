const { defineConfig } = require('cypress')

module.exports = defineConfig({
    
    e2e: {
        baseUrl: "https://www.google.com"
    }, env: {
        username: "develop username",
        password: "develop password"
        // add other env 
    }
})

