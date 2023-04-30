import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { inter } from '../interface';

@Component({
  selector: 'app-maincom',
  templateUrl: './maincom.component.html',
  styleUrls: ['./maincom.component.css']
})
export class MaincomComponent {
data = [{} as inter]
constructor(private ser:ApiService){
this.get()
}

  get(){
    this.ser.get().subscribe((arg:any) => this.data = arg);
  }
  delete(id:number|undefined){
    this.ser.delete(id);
    alert('data Deleted')
    this.get()

  }
}
