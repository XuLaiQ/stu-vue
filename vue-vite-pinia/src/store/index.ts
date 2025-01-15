import useUserStore from './modules/user';
import useBookStore from "./modules/book"

export default function useStore(){
    return {
        user:useUserStore(),
		book:useBookStore()
    }
}
