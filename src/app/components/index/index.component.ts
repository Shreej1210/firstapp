import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs"
import { Store } from '@ngxs/store';
import { User } from 'src/app/models/user';
import { state } from '@angular/animations';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  users:Observable<User>|any;
  constructor(private store:Store){
  this.users=this.store.select(state=>state.users.users);
  }
  ngOnInit(): void {
    
  }

}
