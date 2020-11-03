import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';


@Component({
  selector: 'app-add-cicek',
  templateUrl: './add-cicek.component.html',
  styleUrls: ['./add-cicek.component.css']
})
export class AddCicekComponent implements OnInit {

  name;
  price;
  path;

  form = new FormGroup({
    name: new FormControl('', Validators.required ),
    price:  new FormControl('', Validators.required),
    path:  new FormControl('', Validators.required)
  });

  // cicekList;

  constructor(private service: DataService, private router: Router, private route: ActivatedRoute) {
  
  }

  ngOnInit(): void {

    // this.cicekList = this.service.cicekList;

  }

  onSubmit() {
     this.name = this.form.get("name").value;
     this.price = this.form.get("price").value;
     this.path = this.form.get("path").value;

     if(this.name !== '' && this.price !== '' && this.path !== '' ){
     this.service.cicekList.push({'name': this.name, 'price': this.price, 'imagePath': this.path});
     this.router.navigate(['/cicekler']); //anasayfaya yönlendir

     }
     else{
       alert('Lütfen tüm alanları doldurunuz!!');
     }
  }

}
