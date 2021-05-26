import { Component, Input, OnInit } from '@angular/core';
import { RestoService } from '../resto.service';
import { HttpClient,  HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-listresto',
  templateUrl: './listresto.component.html',
  styleUrls: ['./listresto.component.css']
})
export class ListrestoComponent implements OnInit {
  collection:any = [] ;

  //item:any=[];


  constructor( private resto: RestoService) { }


  ngOnInit(): void {


    this.resto.getList().subscribe((result)=>
    {
      console.warn(result);
      this.collection=result;
    })
  }
       deleteResto(item: any){
         console.warn(item)
         this.collection.splice(item-1, 1)
         this.resto.deleteResto(item).subscribe((result)=>
         {
           console.warn(result)

         })

       }

}
