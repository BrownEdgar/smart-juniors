// Ստեղծել կոճակներ որոնք կանեն հետևյալ գործողությունները

// - Jsonplaceholder -ից կստանա 10 հատ post և կպահի `posts` զանգվածի մեջ ,զուգահեռ նաև կնկարի Էջում:  axios-ով կստանաք հետո then-ի մեջ dispatch կանեք
// - Էջում պետք է ունենալ 1 input և այտեղ գրված անունը պետք է ավելացնել `developers` զանգվածի մեջ
// - Խառնել arr զանգվածը(shuffle)։
// - առաջին գործողությունով ստացած 10 հատ post-ի id-ը ջնջել և փոխարենը դնել arr զանգվածի 10 թվերը։
// - ամեն մի post-ում լինի 'x' կոճակ և այն ՛click՛ի ժամանակ պիտի ջնջի հերթական post-ը,

// - Ամեն մի գործողությունից հետո(click) `actions` թվային հատկությունը ավելացնել 1 - ով։

import {
	SET_POST_COUNT,
	ADD_INFO,
	ADD_DEV,
	TOGGLE_MODAL,
	ADD_ANIM,
	SHUFFLE,
	CHANGE_POSTS_IDS,
	REMOVE_POST,
} from './actionTypes';

export const initialValue = {
	actions: 0,
	developers: [],
	posts: [],
	arr: [],
	count: 10,
	modalIsOpen: true,
	submitted: false,
};

export default function reducer(state = initialValue, { type, payload }) {
	switch (type) {
		case SET_POST_COUNT:
			return updateCount(state, payload.postCount);
		case ADD_DEV:
			return addDev(state, payload.devName);
		case TOGGLE_MODAL:
			return toggleModal(state, payload.value);
		case ADD_INFO:
			return addPosts(state, payload.posts);
		case ADD_ANIM:
			return addAnim(state);
		case SHUFFLE:
			return shuffleArray(state);
		case CHANGE_POSTS_IDS:
			return changePostsIds(state);
		case REMOVE_POST:
			return removePost(state, payload.postID);
		default:
			return state;
	}
}

function updateCount(state, postCount) {
	const arr = new Array(postCount).fill().map(() => {
		return Math.floor(Math.random() * 701);
	});

	return {
		...state,
		count: postCount,
		arr,
		actions: state.actions + 1,
	};
}

function addDev(state, devName) {
	return {
		...state,
		developers: [...state.developers, devName],
		actions: state.actions + 1,
	};
}

function addPosts(state, posts) {
	return {
		...state,
		posts,
		actions: state.actions + 1,
	};
}

function toggleModal(state, value) {
	return {
		...state,
		modalIsOpen: value ? value : !state.modalIsOpen,
		actions: state.actions + 1,
	};
}

function addAnim(state) {
	return {
		...state,
		submitted: true,
		actions: state.actions + 1,
	};
}

function shuffleArray(state) {
	const arr = state.arr
		.map((elem) => [elem, Math.random()])
		.sort((a, b) => a[1] - b[1])
		.map((elem) => elem[0]);

	return {
		...state,
		arr,
		actions: state.actions + 1,
	};
}

function changePostsIds(state) {
	const posts = state.arr.reduce((acc, cv, index) => {
		acc[index] = { ...acc[index], id: cv };
		return acc;
	}, state.posts);

	return {
		...state,
		posts,
		actions: state.actions + 1,
	};
}

function removePost(state, postID) {
	const posts = state.posts.filter((post) => post.id !== postID);
	return {
		...state,
		posts,
		actions: state.actions + 1,
	};
}
