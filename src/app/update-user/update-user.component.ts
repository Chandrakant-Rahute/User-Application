import { Component, OnInit } from '@angular/core';
import {CommonService} from '../common.service';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  alert:boolean = false;
  editUser= new FormGroup({  
    name:new FormControl(''),
    email:new FormControl(''),
    gender:new FormControl(''),
    status:new FormControl('')
  })

  constructor(private user:CommonService, private router:ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.router.snapshot.params['id'])
    this.user.getCurrentData(this.router.snapshot.params['id']).subscribe((result:any)=> {
      this.editUser = new FormGroup ({
        name:new FormControl(result['name']),
        email:new FormControl(result['email']),
        gender:new FormControl(result['gender']),
        status:new FormControl(result['status']),
      })
    })
  }
  updateUser(){
    this.user.updateUser(this.router.snapshot.params['id'],this.editUser.value).subscribe((result)=> {
      console.log(result,"data updated successfully")
    })
  }
}
   