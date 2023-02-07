import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  name?:string;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    // this.name = this.activatedRoute.snapshot.queryParams?.name
    // console.log(this.name,this.activatedRoute.snapshot);
    this.activatedRoute.queryParams.subscribe(val=>{
      this.name = val?.name
    })
    
  }

}
