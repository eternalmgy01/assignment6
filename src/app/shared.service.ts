import { Injectable } from '@angular/core';
import {LoggingService} from './logging.service';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  sharedValue: string;


  constructor(private loggingService: LoggingService) {
    this.sharedValue = ['Samad', 'Daur', 'Das', 'Alua', 'Moldir', 'Miras'] [Math.floor(Math.random() * 6)];
    this.loggingService.log(this.sharedValue);
  }

  public  getSharedValue() {
    return this.sharedValue;
  }
}
