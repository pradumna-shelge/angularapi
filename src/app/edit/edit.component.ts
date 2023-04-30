import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from '../service/api.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { inter } from '../interface';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit{
  id!:number;
  data={}as inter;
  dataform!:FormGroup
constructor(private active:ActivatedRoute,private ser:ApiService,private fb:FormBuilder){
this.dataform = this.fb.group({
  id:[],
  name:[],
  email:[],
  gender:[],
  status:[]
})


}

ngOnInit(): void {
  this.active.params.subscribe(d=>{
    this.id = Number( d['id']);
    console.log(typeof this.id);
    });
    
    this.ser.getid(this.id).subscribe((s:inter)=>{
      this.data = s
      
      this.dataform.patchValue(this.data)
    })


}

get name(){
  return this.dataform.get('name')
}

}
