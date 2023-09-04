import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { AddUser } from 'src/app/store/actions/user.actions';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  angForm:FormGroup|any;
  constructor(private fb:FormBuilder,private store:Store)
  {}
  ngOnInit(): void {
    
  }
  createform()
  {
    this.angForm=this.fb.group({
      name:['',Validators.required],
      email:['',Validators.required]
  });
}
  adduser(name:any,email:any)
  {
    this.store.dispatch(new AddUser({name,email}));
console.log(name,email);
  }

}
