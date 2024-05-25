import { Component, Input, input, Signal, computed, Output, EventEmitter, output } from '@angular/core';
import { User } from './user.model';
//  type User = {
//   id: string;
//   avatar: string;
//   name: string;
//  }


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent {
  @Input({required: true}) user!: User;
  @Input({required: true}) selected!: boolean;
  @Output() select = new EventEmitter<string>();

  //select = output<string>();
  // avatar = input.required<string>();
  // name = input<string>();

  // imagePath = computed(()=> {
  //   return 'assets/users/' + this.avatar();
  // } )

  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }
  

  onSelectUser() {
    this.select.emit(this.user.id);
    // console.log('click');
    // const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    // this.selectedUser.set(DUMMY_USERS[randomIndex])
    // // this.selectedUser = DUMMY_USERS[randomIndex];
  }
}
