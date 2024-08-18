const PointService = require("../service/PointService");
const path = require("path")
const uuid = require('uuid')
const {static} = require("express");
const AdminService = require("../service/AdminService");

class adminController {
    async checkPass (req, res) {
        const obj = {
            pass: false
        }

        try {
            if (req.body.pass == process.env.ADMIN_PASS) obj.pass = true

            return res.json(obj)
        } catch (e) {
            console.log(e)
            return res.status(500).json(e)
        }
    }

    async deletePoint (req, res) {
        try {
            if (req.body.pass != process.env.ADMIN_PASS) return res.status(500).json("неправильный код")
            console.log(req.body.id)

            const response = AdminService.delete(req.body.id)
            return res.json({response})
        } catch (e) {
            console.log(e)
            return res.status(500).json(e)
        }
    }

    
}

module.exports = new adminController()
