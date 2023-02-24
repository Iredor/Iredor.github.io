import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'MY PUNISHMENT';
  shouldShowThreeButtons: boolean = false;
  chose: string = 'home';
  drink: string[] = ['Drink a shot','Drink two shots','Drink in one gulp','Blowjob shot','Drink from the bottle','Drink from his body'];
  soft: string[] = ['Kiss on the lips', 'Touch the ass',  'Show ass','Show them','Show boobs','Sexy striptease','Find honey on her body while blindfolded'];
  hard: string[] = ['Doggy style', 'Seated scissors', 'Spork sex','Guess 3 ingredients from her private parts', 'See saw sex','Crazy starfish', 'Lap dance sex', 'Sex on a bar stool',
  'Anal sex - If you agree','Double penetration with sex toy'];
  medium: string[] = ['Oral sex', 'Standing oral sex', 'Ass fingering', 'Chair blowjob' ,'Masturbate','Have fun with a sex toy','Nipples licking', 'Masturbate him', '69',
  'Ass licking', 'Oral sex with ass fingering','Oral sex while masturbating','Masturbate each other','Bondage'];
  randomElement: string = 'home';
  test:boolean = false;
  tot:number =0;
  totHard:number =0;

  showThreeButtons(choosing: string) {
    this.chose = choosing;
  }

  countMedium(){
    this.tot = this.tot + 1;
  }

  countHard(){
    this.totHard = this.totHard + 1;
  }

  getImgUrl(list: string[]) {
    this.randomElement = list[Math.floor(Math.random() * list.length)];
    return '../assets/img/' + this.randomElement + '.png';
  }

  timeLeft: number = 60;
  interval: any;

startTimer() {
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        this.timeLeft = 60;
      }
    },1000)
  }

  pauseTimer() {
    clearInterval(this.interval);
  }
    
}
