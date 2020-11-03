import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';
import { ListCicekComponent } from '../list-cicek/list-cicek.component';


@Component({
  selector: 'app-cicek-detail',
  templateUrl: './cicek-detail.component.html',
  styleUrls: ['./cicek-detail.component.css']
})
export class CicekDetailComponent implements OnInit {
  name;
  cicekList;
  obj;

  constructor(private router: Router, private route: ActivatedRoute, private service: DataService) { }

  ngOnInit() {

    this.cicekList = this.service.cicekList;

    this.route.paramMap
      .subscribe(params => {
        this.name = params.get('name');
        //console.log(this.name);
      });

    if (this.cicekList && this.cicekList.length > 0) {
      this.obj = this.cicekList.find((findedCicek) => {
        return findedCicek.name === this.name;

      })
    }
  }

  delete() {
    if (confirm('Silme işlemini onaylıyo musunuz?')) {
      const index = this.cicekList.indexOf(this.obj);
      this.cicekList.splice(index, 1);
      this.router.navigate(['/cicekler']);
    } else {
      // Do nothing!
      console.log(' ');
    }
   
  }

}
