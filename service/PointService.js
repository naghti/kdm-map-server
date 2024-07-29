const Point = require("../models/models")

class PointService {
    async create (info, photos) {
        if (photos == null) {
            const point = await Point.create(info)
            return point
        }else {
            const point = await Point.create({...info, photos: photos})
            return point
        }
    }

    async getAll() {
        const points = await Point.find()
        return points
    }
}

module.exports = new PointService()
