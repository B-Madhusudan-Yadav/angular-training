import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-user-list',
  imports: [FormsModule, NgFor, NgIf],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  name: string = '';
  searchUser: string = '';
  isVisible: boolean = true;

  users: any = ['Madhusudan', 'MarketMoves', 'Angular', 'React', 'TypeScript'];

get filteredUsers() {
  return this.users.filter((user: string) =>
    user.toLocaleLowerCase().includes(this.searchUser.toLocaleLowerCase())    
  )

}

  toggle(): void {
    this.isVisible = !this.isVisible;
  }

}
