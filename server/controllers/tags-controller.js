const TagService = require('../services/tag-service');

class TagsController {
    async getAllTags(req, res, next) {
        try {
            const data = req.query;
            const tagsData = await TagService.getAllTags();
            return res.json(tagsData);
        } catch(e) {
            return e.message;
        }
    }

    async addTag(req, res, next) {
        try {
            const data = req.body;
            console.log(req.files)
            const addedTag = await TagService.addTag(data);
            return res.json(addedTag);
        } catch (e) {
            return e.message;
        }
    }
}

module.exports = new TagsController;