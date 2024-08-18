const Point = require("../models/models")

class AdminService {
    async delete (id) {
        const point = await Point.deleteOne({_id: id})
        return point
    }

}

module.exports = new AdminService()
