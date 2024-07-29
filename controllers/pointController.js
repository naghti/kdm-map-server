const PointService = require("../service/PointService");
const path = require("path")
const uuid = require('uuid')
const {static} = require("express");

class pointController {
    async create (req, res) {
        try {
            let photos = req.files?.photos || []
            console.log(req)
            if (!Array.isArray(photos)) photos = [photos]
            const filesName = photos.map(photo => uuid.v4() + ".jpg") || null
            for (let i = 0; i < photos.length; i++) {
                const photo = photos[i]
                photo.mv(path.resolve(__dirname, '..', 'static', filesName[i]))
            }
            const point = await PointService.create(req.body, filesName)
            return res.json({point})

        } catch (e) {
            console.log(e)
            return res.status(500).json(e)
        }
    }

    async getAll (req, res) {
        console.log(req)
        try {
            const points = await PointService.getAll()
            return res.json({points})
        } catch (e) {
            console.log(e)
        }
    }
}

module.exports = new pointController()
