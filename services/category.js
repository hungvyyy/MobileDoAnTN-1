import { api } from "./index";

const categoryService = {
    getCategory(){
        return api.call().get('/category_news')
    }
}

export default categoryService;