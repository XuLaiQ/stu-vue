import { defineStore } from 'pinia';

interface Book {
  name: string; // 书籍名称
  time: string; // 书籍相关的时间，如出版时间等
  id: string; // 书籍的id
}

interface State {
  bookList: Book[]; // 书籍列表，包含多个 Book 对象
}

const useBookStore = defineStore('book', {
  state: (): State => ({
    bookList: [
      {
        name: '三国演绎',
        time: '1010-1-12',
		id: '2025111'
      },
      {
        name: '红楼梦',
        time: '1791-1-1',
		id: '2025114'
      },
      {
        name: '西游记',
        time: '1592-1-1',
		id: '2025115'
      }
    ]
  }),
  getters: {
    // 示例 getter，获取书籍数量
    bookCount: (state) => state.bookList.length
  },
  actions: {
    // 示例 action，添加书籍到列表
    addBook(book: Book) {
      this.bookList.push(book);
    },
    // 示例 action，删除书籍
    removeBook(bookId: string) {
      this.bookList = this.bookList.filter(book => book.id !== bookId);
    }
  }
});

export default useBookStore;