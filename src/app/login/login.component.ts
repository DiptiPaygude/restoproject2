import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import {RestoService} from '../resto.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formGroup: FormGroup = new FormGroup({});
  //message: any;
  errorMessage!: string;
  email:any;
  password: any;
  //alert:boolean=false;
     constructor(private resto:RestoService) { }

  ngOnInit(): void {


   this.initForm();
  }
  initForm(){
    this.formGroup =new FormGroup({
      email:new FormControl('', [Validators.required] ),
    password:new FormControl('', [Validators.required])

    });
  }
  login()
  {
   if(this.formGroup.value){

     this.resto.loginResto(this.formGroup.value).subscribe((result)=>{
         if(this.email == 'email' && this.password == 'password'){
         console.warn(result);
         alert(this.errorMessage = 'password do not match');
         }else{
          alert(this.errorMessage = 'Login Success fully');
         }


     });
     this.formGroup.reset({});
   }

  }

}
