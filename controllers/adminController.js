const PointService = require("../service/PointService");
const path = require("path")
const uuid = require('uuid')
const {static} = require("express");
const AdminService = require("../service/AdminService");
const logger = require("../logger");

class adminController {
    async checkPass (req, res) {
        res.header("Access-Control-Allow-Origin", "*");
        logger(req.body)

        const obj = {
            pass: false
        }

        try {
            if (req.body.pass == process.env.ADMIN_PASS) obj.pass = true

            return res.json(obj)
        } catch (e) {
            logger([req, e], "error")
            return res.status(500).json(e)
        }
    }

    async deletePoint (req, res) {
        res.header("Access-Control-Allow-Origin", "*");
        console.log(req.body.id)
        logger(req.body)
        try {
            if (req.body.pass != process.env.ADMIN_PASS) return res.status(500).json("неправильный код")
            console.log(req.body.id)

            const response = AdminService.delete(req.body.id)
            return res.json("all good")
        } catch (e) {
            logger([req, e], "error")
            return res.status(500).json(e)
        }
    }

    
}

module.exports = new adminController()
