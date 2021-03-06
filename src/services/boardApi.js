import tokenService from './tokenService';

export default {
    getAll,
    getOne,
    createBoard,
    deleteBoard,
    updateBoard,
    createColumn,
    deleteColumn,
    createTask,
    updateTask,
    deleteTask,
};

const BASE_URL = '/api/boards';

function getAll() {
    return fetch(BASE_URL, {
        method: 'GET',
        headers: tokenService.getAuthMethods(),
    }).then((res) => res.json());
}

function getOne(id) {
    return fetch(`${BASE_URL}/${id}`).then((res) => res.json());
}

function createBoard(board) {
    return fetch(`${BASE_URL}`, {
        method: 'POST',
        headers: tokenService.getAuthMethods(),
        body: JSON.stringify(board),
    })
        .then((res) => {
            if (res.ok) return res.json();
            throw new Error('Something went wrong: 404 (board)..');
        })
        .then((board) => board);
}

function deleteBoard(boardId) {
    return fetch(`${BASE_URL}/${boardId}`, {
        method: 'DELETE',
        headers: tokenService.getAuthMethods(),
    })
        .then((res) => {
            if (res.ok) return res.json();
            throw new Error('Something went wrong: 404 (board delete)');
        })
        .then((deletedBoard) => deletedBoard);
}

function updateBoard(board) {
    fetch(`${BASE_URL}/${board._id}`, {
        method: 'PUT',
        headers: tokenService.getAuthMethods(),
        body: JSON.stringify(board),
    });
}

function createColumn(boardId, column) {
    return fetch(`${BASE_URL}/${boardId}/columns`, {
        method: 'POST',
        headers: tokenService.getAuthMethods(),
        body: JSON.stringify(column),
    })
        .then((res) => {
            if (res.ok) return res.json();
            throw new Error('Something went wrong: 404 (column)..');
        })
        .then((board) => board);
}

function deleteColumn(boardId, column) {
    return fetch(`${BASE_URL}/${boardId}/columns/${column._id}`, {
        method: 'DELETE',
        headers: tokenService.getAuthMethods(),
    })
        .then((res) => {
            if (res.ok) return res.json();
            throw new Error('Something went wrong: 404 (column delete)..');
        })
        .then((board) => board);
}

function createTask(boardId, columnId, task) {
    return fetch(`${BASE_URL}/${boardId}/columns/${columnId}`, {
        method: 'POST',
        headers: tokenService.getAuthMethods(),
        body: JSON.stringify(task),
    })
        .then((res) => {
            if (res.ok) return res.json();
            throw new Error('Something went wrong: 404 (task)...');
        })
        .then((board) => board);
}

function updateTask(boardId, columnId, task) {
    return fetch(
        `${BASE_URL}/${boardId}/columns/${columnId}/tasks/${task._id}`,
        {
            method: 'PUT',
            headers: tokenService.getAuthMethods(),
            body: JSON.stringify(task),
        }
    )
        .then((res) => {
            if (res.ok) return res.json();
            throw new Error('Something went wrong: 404 (task)...');
        })
        .then((board) => board);
}

function deleteTask(boardId, columnId, task) {
    return fetch(
        `${BASE_URL}/${boardId}/columns/${columnId}/tasks/${task._id}`,
        {
            method: 'DELETE',
            headers: tokenService.getAuthMethods(),
            body: JSON.stringify(task),
        }
    )
        .then((res) => {
            if (res.ok) return res.json();
            throw new Error('Something went wrong: 404 (task)...');
        })
        .then((board) => board);
}
