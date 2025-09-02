import express from "express";

class HttpModulesService {

    get application() {
        return express()
    }

}



export default HttpModulesService