import { Component } from '@angular/core';
// import { HeaderComponent } from './header/header.component';
// import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './user/dummy-users';
// import { TasksComponent } from './tasks/tasks.component';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS;
  selectedId?: string;
  name!: string;

  get selectedUser() {

    return this.users.find((user) => user.id === this.selectedId)!;

  }

  onSelectUser(id: string) {
    console.log(id);
    this.selectedId = id;
    // const user = DUMMY_USERS.find(user => user.id === id);
    // this.name = user?.name || '';

  }

  // showSelectedName(name: string) {
  //   console.log(name);
  // }
}
