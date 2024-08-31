const logger = require("../logger")
const Point = require("../models/models")

class PointService {
    async create (info, photos) {
        try {
            if (photos == null) {
                const point = await Point.create(info)
                return point
            }else {
                const point = await Point.create({...info, photos: photos})
                return point
            }
        } catch (e) {
            logger([info, photos], "error")

            throw new Error(e);
        }
    }

    async getAll() {
        try {
            const points = await Point.find()
            return points
        } catch (e) {
            logger("ошибка", "error")

            throw new Error(e);
        }
    }
}

module.exports = new PointService()
