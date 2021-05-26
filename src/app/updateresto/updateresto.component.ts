import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {RestoService} from '../resto.service';

@Component({
  selector: 'app-updateresto',
  templateUrl: './updateresto.component.html',
  styleUrls: ['./updateresto.component.css']
})
export class UpdaterestoComponent implements OnInit {

  editRestro = new FormGroup({
    name:new FormControl(''),
    address:new FormControl(''),
    email:new FormControl('')
  })

  constructor(private router:ActivatedRoute, private resto: RestoService) { }
  alert:boolean=false;

  ngOnInit(): void {
    //this.id = this.router.snapshot.params['id'];
    console.warn(this.router.snapshot.params.id)
  this.resto.getCurrentResto(this.router.snapshot.params.id).subscribe((result:any)=>
  {
   // console.warn(result)
    this.editRestro = new FormGroup({
      name:new FormControl(result['name']),
      address:new FormControl(result['address']),
      email:new FormControl(result['email'])
    })
  })

  }
collection(){
  //console.warn("item", this.editRestro.value);
  this.resto.updateResto(this.router.snapshot.params.id, this.editRestro.value).subscribe((result)=>{
    console.warn("result",result)
    this.alert=true;

  })

   this.editRestro.reset({});
}
closeAlert(){
  this.alert=false;
}

}
