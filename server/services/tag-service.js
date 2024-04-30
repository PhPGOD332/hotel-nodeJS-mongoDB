const TagModel = require('../models/tags-model');
const fileUpload = require('express-fileupload');

class TagService {
    async getAllTags() {
        const tags = await TagModel.find({});

        return tags;
    }

    async addTag(data) {
        const icon = data.icon;
        const file = data.file;
        const name = data.name;
        const value = data.value;
        const iconPath = `${__dirname}/images/tags/${icon.name}`

        await file.mv(iconPath,
        function (err) {
            if (err) {
                console.log(err)
                return res.status(500).send({ msg: "Error occurred" });
            }
        });

        const addedTag = await TagModel.create({
            icon: `/tags/${icon.name}`,
            name,
            value
        })

        return 'Запись успешно добавлена.';
    }
}

module.exports = new TagService;