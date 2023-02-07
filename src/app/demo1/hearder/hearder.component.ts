import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { DemoService } from "../../services/demo.service";

@Component({
  selector: 'app-hearder',
  templateUrl: './hearder.component.html',
  styleUrls: ['./hearder.component.scss'],
  // providers:[DemoService]
})
export class HearderComponent implements OnInit {

  and?:string;

  constructor( private abc: DemoService, private route:Router ) { }

  ngOnInit(): void {
  }


  homePage(){
    this.abc.data1 = 'abc'

    this.route.navigate(['test-error'],{
      queryParams:{
        name:'vivek'
      }
    })

  }

}
