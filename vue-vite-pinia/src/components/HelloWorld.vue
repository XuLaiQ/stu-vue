<script setup lang="ts">
import useStore from '../store';
import { reactive } from 'vue';

defineProps<{ msg: string }>();
const { user, book } = useStore();

let userInfo = reactive({
	name: '添加的用户',
	age: 0,
	gender: '男'
});

let bookInfo = reactive({
	name: '添加的用户',
	time: '2025-1-10',
	id: '00000'
});

function addUser() {
	// 获取随机的年龄和用户名
	let userName = `添加的用户${user.userList.length + 1}`;
	let age = Math.ceil(Math.random() * 100);
	let gender = '男';

	userInfo = {
		name: userName,
		age: age,
		gender: gender
	};

	user.setUser(userInfo);
}

function addBook() {
	// 获取随机的年龄和用户名
	let bookName = `添加的书籍${book.bookCount + 1}`;

	bookInfo = {
		name: bookName,
		time: `${Math.ceil(Math.random() * 3000 + 1)}-${Math.ceil(Math.random() * 12 + 1)}-${Math.ceil(Math.random() * 30 + 1)}`,
		id: `${Math.random().toString(36).substr(2, 8)}`
	};

	book.addBook(bookInfo);
}

function delBook(name: string) {
	book.removeBook(name);
}
</script>

<template>
	<h1>{{ msg }}</h1>

	<div class="out">
		<div class="user">
			<button @click="addUser" class="option-btn">添加</button>
			<ul>
				<li v-for="item in user.sortedUserList">姓名：{{ item.name }},年龄：{{ item.age }},性别：{{ item.gender }}</li>
			</ul>
		</div>

		<div class="book">
			<button @click="addBook" class="option-btn">添加书籍</button>
			<ul>
				<li v-for="item in book.bookList">
					书籍名称：{{ item.name }}---时间：{{ item.time }}
					<button @click="delBook(item.id)">删除书籍</button>
				</li>
			</ul>

			<!-- <div>{{ book.bookList }}</div> -->
		</div>
	</div>
</template>

<style scoped>
.read-the-docs {
	color: #888;
}
.out {
	display: flex;
	flex-direction: row;
}

.user,
.book{
	width: 500px;
	flex: 1;
	height: 50vh;
	overflow-y: scroll;
}

.option-btn {
	position: fixed;
	top: 350px;
}

</style>
