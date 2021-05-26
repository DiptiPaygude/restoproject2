import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import {RestoService} from '../resto.service';

@Component({
  selector: 'app-addresto',
  templateUrl: './addresto.component.html',
  styleUrls: ['./addresto.component.css']
})
export class AddrestoComponent implements OnInit {
  addRestro = new FormGroup({
    name:new FormControl(''),
    address:new FormControl(''),
    email:new FormControl('')
  })
  constructor(private resto:RestoService) { }
  alert:boolean=false;
  ngOnInit(): void { }

  collectRestro(){
this.resto.saveRestro(this.addRestro.value).subscribe((result)=>{
this.alert=true;
});
this.addRestro.reset({});
  }
  closeAlert(){
    this.alert=false;
  }


}
