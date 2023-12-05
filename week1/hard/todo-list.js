/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor(){
    this.todos=[];
  }
  add(todo){
    this.todos.push(todo);
    return this.todos;
  }
  remove(index){
    if(index<this.todos.length&&index>=0){
      this.todos.splice(index,1);
    return this.todos;
    }
    else return this.todos;
    
  }
  update(index,updatedTodo){
    if(index<this.todos.length&&index>=0){
      this.todos[index]=updatedTodo;
      return this.todos;} 
      else{
        return this.todos;
      }
  }

  getAll(){
    return this.todos;
  }
  clear(){
    this.todos=[];
    return this.todos;

  }
  get(index){
  return index >= 0 && index < this.todos.length ? this.todos[index] : null;
  // return this.todos[index]; 
  }


}

module.exports = Todo;
