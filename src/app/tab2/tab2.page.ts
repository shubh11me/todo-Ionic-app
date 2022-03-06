import { Component,OnInit } from '@angular/core';
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {
  public todos:any[]=[];
  constructor(private service:SharedService) {}
  refresher(c){
 this.todos=c;
  }
  ngOnInit(){
    this.service.refresh.subscribe((data)=>{this.refresher(data);})

  }

}
