const logger = require("../logger")
const {Visitors, VisitorsCount} = require("../models/models")

class VisitorService {
    async get() {
        try {
            const visitors = await Visitors.find()
            return visitors
        } catch (e) {
            logger("ошибка", "error")

            throw new Error(e);
        }
    }
    async getCount() {
        try {
            const res = await VisitorsCount.find()
            return res
        } catch (e) {
            logger("ошибка", "error")

            throw new Error(e);
        }
    }
    
    async updateVisitor(ip, newVisit) {
        try {
            const updatedVisitor = await Visitors.findOneAndUpdate(
                { ip: ip }, 
                { visit: newVisit }, 
                { new: true, upsert: true }
            );

            const res = await this.updateCount()

            return res
        } catch (e) {
            logger("ошибка", "error")
            throw new Error(e);
        }
    }
    async updateCount() {
        try {
            const count = await VisitorsCount.findOneAndUpdate(
                {}, 
                { $inc: { amount: 1 } },
                { new: true, upsert: true }
            );

            return count
        } catch (e) {
            logger("ошибка", "error")
    
            throw new Error(e);
        }
    }
}

module.exports = new VisitorService()
