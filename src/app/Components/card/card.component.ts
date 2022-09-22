import { Component,EventEmitter, Input, Output,OnInit } from '@angular/core';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() data:any={}
  @Output() public item=new EventEmitter()
  addButton:boolean=true
  amount:number=1

  constructor() { }
  ngOnInit(): void {
  }


add()
{
  if(this.amount<1){
    this.amount=1
    this.item.emit({item:this.data,quantity:this.amount})
  }
  else
  {
    this.item.emit({item:this.data,quantity:this.amount})
  }
}


}
