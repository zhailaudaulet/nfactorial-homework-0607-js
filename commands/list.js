const conf = new (require('conf'))()
function list(){
    const todoList = conf.get('todo-list')

    if (todoList && todoList.length) {
        console.log(
           'These are your tasks'
        )
        todoList.forEach((task, index) => {
            if (task.done) {
                console.log(`${index}. ${task.text}`, '--', 'done'                )
            } else {
                console.log(`${index}. ${task.text}`, `--`, `needs to be done`)
            }
        })
  //user has tasks in todoList
    }else {
    console.log('You don\'t have any tasks yet.')
  //user does not have tasks in todoList
    }

}
module.exports = list
