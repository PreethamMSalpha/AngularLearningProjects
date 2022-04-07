import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Counter App';

  count:number = 0;

  handleIncrease = () => {
    // this.count = this.count + 1;

    //making count should not go beyound 10
    if(this.count >= 10){
      this.count = 0;
    }else{
      this.count = this.count + 1; 
    }
  }

  handleDecrease = () => {
    //making count should not go less than zero
    if(this.count <= 0){
      this.count = 0;
    }else{
      this.count = this.count - 1; 
    }
  }

  handleReset = () => {
    this.count = 0;
  }
}
