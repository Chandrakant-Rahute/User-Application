import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  addUserInfo= new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    gender: new FormControl(''),
    status: new FormControl('')
  })
  constructor(private user:CommonService) { }

  ngOnInit(): void {
  }
   createUser(){
    //  console.log(this.addUserInfo.value);
    this.user.addUser(this.addUserInfo.value).subscribe((result)=> {
      console.log("Get Data From Service", result)
    })
   }
}
