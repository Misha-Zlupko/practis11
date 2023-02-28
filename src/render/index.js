import { ulList } from '../elements';
export function renderToDoList(todos) {
  const markUp = todos
    .sort((a, b) => b.id - a.id)
    .map(
      ({ title, status, id, due_on }) =>
        `<li class= "${status}" data-id = "${id}">
          <input type= "checkbox" ${status === 'completed' ? 'checked' : ''}>
          <p>${title} ${due_on ? new Date(due_on).toLocaleString() : ''}</p>
          <button>❌</button></li>`
    )
    .join('');
  ulList.innerHTML = markUp;
}
