const path = require("path")
const uuid = require('uuid')
const logger = require("../logger")

const {static} = require("express");
const visitorService = require("../service/visitorService");

class visitController {
    async get (req, res) {
        res.header("Access-Control-Allow-Origin", "*");
        logger(req.body)
        try {
            const ip = req.ip
            const coouldown = 1 * 100 * 60 * 60 * 24 // сутки
            const now = Date.now()

            const visitors = await visitorService.get()

            for (let i = 0; i < visitors.length; i++) {
                const visitor = visitors[i]

                if (visitor.ip == ip) {
                    if (+visitor.visit + coouldown >= now) {
                        const result = await visitorService.getCount()
                        return res.json(result)
                    }
                }

                const result = await visitorService.updateVisitor(ip, now)
                return res.json(result)
            }
        } catch (e) {
            logger([req, e], "error")
            return res.status(500).json(e)
        }
    }
}

module.exports = new visitController()
