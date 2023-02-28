// axios

// API https://gorest.co.in/

// GET https://gorest.co.in/public/v2/users/670660/todos - отримати список todos юзера 670660

// POST https://gorest.co.in/public/v2/users/670660/todos - додати todo юзера 670660
//  body: {
//     "title": string,
//     "status": "pending" | "completed"
// }

// PUT https://gorest.co.in/public/v2/todos/{todo_id} - оновити todo
// {
//     "due_on": Date ("2022-10-31T20:10:08.393Z") | null,
//     "status": "pending" | "completed"
// }

import axios from 'axios';

const toDoApi = axios.create({
  baseURL: 'https://gorest.co.in/public/v2/',
  headers: {
    Authorization:
      'Bearer 2e0553658a2307688d5ead41915dcf7fc7cb69b6b8105afb0fde7b765d35588d',
    'Content-Type': 'application/json',
  },
});

export async function fetchToDoes() {
  const response = await toDoApi.get('users/670660/todos');
  return response.data;
}

export async function makeCompleteToDo(id) {
  const response = await toDoApi.put(`todos/${id}`, {
    due_on: new Date().toISOString(),
    status: 'completed',
  });
  return response.data;
}

export async function makePendingToDo(id) {
  const response = await toDoApi.put(`todos/${id}`, {
    due_on: null,
    status: 'pending',
  });
  return response.data;
}

export async function postToDo(title) {
  const response = await toDoApi.post(`users/670660/todos`, {
    title,
    status: 'pending',
  });
  return response.data;
}

export async function deleteToDo(id) {
  const response = await toDoApi.delete(`todos/${id}`);
  return response.data;
}
