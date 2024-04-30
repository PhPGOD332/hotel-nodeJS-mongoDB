import $api from "../http";

class TagService {
    static async getAllTags() {
        return await $api.get('api/tags');
    }

    static async addTag(data) {
        const tagInfo = data;
        console.log(tagInfo)
        return await $api.post('api/tags/addTag', {tagInfo}, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
    }

    static async removeTag(id) {
        return await $api.delete('api/tags/removeTag', {id});
    }

    static async editTag(data) {
        return await $api.post('api/tags', {data});
    }
}

export default TagService;