import {
  fetchToDoes,
  makePendingToDo,
  makeCompleteToDo,
  postToDo,
  deleteToDo,
} from './api';
import { renderToDoList } from './render';
import { ulList, buttonAdd, inputField } from './elements';
async function render() {
  const data = await fetchToDoes();

  renderToDoList(data);
}

render();

ulList.addEventListener('click', async e => {
  if (e.target.nodeName === 'BUTTON') {
    e.target.disabled = true;
    await deleteToDo(e.target.parentElement.dataset.id);
    await render();
  }
  if (e.target.nodeName === 'INPUT') {
    e.target.disabled = true;
    if (e.target.checked) {
      await makeCompleteToDo(e.target.parentElement.dataset.id);
      await render();
    } else {
      await makePendingToDo(e.target.parentElement.dataset.id);
      await render();
    }
  }
});

buttonAdd.addEventListener('click', async () => {
  const title = inputField.value.trim();
  if (title) {
    await postToDo(title);
    await render();
  }
});
