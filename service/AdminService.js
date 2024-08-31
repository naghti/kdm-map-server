const logger = require("../logger");
const Point = require("../models/models")

class AdminService {
    async delete (id) {
        try {
            const point = await Point.deleteOne({_id: id})
            return point
        } catch (e) {
            logger(id, "error")
            
            throw new Error(e);
        }
    }

}

module.exports = new AdminService()
