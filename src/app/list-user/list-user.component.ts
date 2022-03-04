import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  public collection:any;

  constructor(private commonService:CommonService) { }

   ngOnInit(): void {
    this.commonService.getUserOfList().subscribe((result) => {
      this.collection = result;
      console.log(this.collection)
    });
    
  }

}
