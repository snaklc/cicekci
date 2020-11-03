import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-list-cicek',
  templateUrl: './list-cicek.component.html',
  styleUrls: ['./list-cicek.component.css']
})
export class ListCicekComponent implements OnInit {
 
  cicekList;
  

  constructor(private service: DataService) { }

  ngOnInit() {
  this.cicekList = this.service.cicekList;
  
  }




}

