import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'app'; 任務 04 : 將 app.component.ts 中的 title 屬性移到 title.component.ts 檔案中

  inputHint = '你有什麼待辦事項嗎?';

  todos: any[] = []; // 需要給初始值，空陣列
  todo = '';


  addTodos() {
    if (this.todo) {
      console.log(this.todo);
      this.todos.push(this.todo);
      this.todo = '';

    } else {
      alert('你沒有輸入任何東西，想騙我?');

    }
  }



}
