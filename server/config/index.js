'use strict'

export default {
    'development' : {
        database : 'postgres',
        username : 'postgres',
        password : 'gs880101',
        // host : '192.168.0.151',
        host : 'localhost',
        dialect : 'postgres',
        pool : {
            max : 5,
            min : 0,
            idle : 10000
        }
    },

    'test' : {
        database : 'postgres',
        username : 'postgres',
        password : 'gs880101',
        host : '192.168.0.151',
        // host : 'localhost',
        dialect : 'postgres',
        pool : {
            max : 5,
            min : 0,
            idle : 10001
        }
    },

    'production' : {
        database : 'postgres',
        username : 'postgres',
        password : 'gs880101',
        host : '192.168.0.151',
        // host : 'localhost',
        dialect : 'postgres',
        pool : {
            max : 5,
            min : 0,
            idle : 10000
        }
    }
}
