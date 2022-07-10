import request from "@/helper/request";

const URL = {
  GET: '/notebooks',
  ADD: '/notebooks',
  UPDATE: '/notebook/:id',
  DELETE: '/notebook/:id'
}

export default {
  getAll() {
    return request(URL.GET)
  },
  updateNotebook(notebookId, {title = ''} = {titel: ''}) {
    return request(URL.UPDATE.replace(':id', notebookId), 'PATCH', {title})
  },
  deleteNotebook(notebookId) {
    return request(URL.DELETE.replace(':id', notebookId), 'DELETE')
  },
  addNoteBook({title = ''} = {title: ''}) {
    return request(URL.ADD, 'POST', {title})
  }
}