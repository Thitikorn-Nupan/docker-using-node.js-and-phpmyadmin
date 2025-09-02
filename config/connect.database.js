import mysql from 'mysql2/promise'
import dotenv from "dotenv"
import path from 'path'
/**
    you don't forget 
    you set WORKDIR /usr/src/app
    means any file that you add to container
    they're on it !!
    So .env you should access to /usr/src/app/.env Right ?
    it is not run on your current path pc
    log.info(path.resolve('../app/.env'))
*/
dotenv.config({ path: path.resolve('.env') ,debug :true})

class ConnectDatabase {

    myConnect = null

    #initConnectMySQL = async () => {
        this.myConnect = await mysql.createConnection({
            // host: '127.0.0.1', // 127.0.0.1 or localhost work for local host access container !!
            // host: process.env.PMA_HOST_DATABASE, // not working anymore why ??
            host: 'host.docker.internal', // fix error connect ECONNREFUSED 172.21.0.2:3307 why it can't connect by service name
            user: process.env.SQLD_USERNAME,
            password: process.env.SQLD_PASSWORD,
            database: process.env.SQLD_DATABASE,
            port: process.env.SQLD_EXPOSED_PORT
        })
    }

    get initConnectMySQL() { // method for using await to make sure that myConnect it is initial
        return this.#initConnectMySQL()
    }

}




export default ConnectDatabase
