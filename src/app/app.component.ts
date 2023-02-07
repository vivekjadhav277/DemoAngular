import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DemoService } from './services/demo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush})
export class AppComponent implements OnInit {
  title = 'AngularDemo';
  peoples:any;
  constructor(private service:DemoService){}
  ngOnInit(): void {
    this.service.getPeoples().subscribe(data => {
      console.log('Data',data);
      this.peoples = data;
      
    })

    this.service.getSingleUser(1).subscribe(data => {
      console.log('Data',data);
      
    })
  }


  // get peoples(): Observable<any> {
  //  return this.service.getPeoples()
  // }





}
