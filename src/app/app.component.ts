import { Component ,OnInit} from '@angular/core';
import { concatMap, delay, exhaustMap, filter, interval, map, mergeMap, Observable, of, switchMap, take, tap } from 'rxjs';
import { FaceSnap } from './core/models/face-snap.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'debutez-angular';

  interval$!:Observable<string>

  redTrainsCalled = 0;
  yellowTrainsCalled = 0;

  ngOnInit(): void {
    /* operateur haut niveaux */
    // interval(500).pipe(
    //   take(10),
    //  map(value => value % 2 === 0 ? 'rouge' : 'jaune'),
    //   tap(color => console.log(`La lumière s'allume en %c${color}`, `color: ${this.translateColor(color)}`)),
    //   switchMap(color => this.getTrainObservable$(color)),
    //   tap(train => console.log(`Train %c${train.color} ${train.trainIndex} arrivé !`, `font-weight: bold; color: ${this.translateColor(train.color)}`))
    // ).subscribe();

    /*operateur bas niveaux*/
    // this.interval$ = interval(1000).pipe(
    //   filter(value => value % 3 === 0),
    //   map(value => value % 2 === 0 ?
    //     ` I am ${value}, I'am a pair number` :  ` I am ${value}, I'am a odd number`
    //   ),
    //   tap(text=>this.logger(text))
    // );

    // interval$.subscribe(value => console.log(value));
    // setTimeout(() => {
    //   interval$.subscribe(value => console.log(value));
    // }, 3000);

  }

  /* fonction de haut niveaux*/
  // getTrainObservable$(color: 'rouge' | 'jaune') {
  //   const isRedTrain = color === 'rouge';
  //   isRedTrain ? this.redTrainsCalled++ : this.yellowTrainsCalled++;
  //   const trainIndex = isRedTrain ? this.redTrainsCalled : this.yellowTrainsCalled;
  //   console.log(`Train %c${color} ${trainIndex} appelé !`, `text-decoration: underline; color: ${this.translateColor(color)}`);
  //   return of({ color, trainIndex }).pipe(
  //     delay(isRedTrain ? 5000 : 6000)
  //   );
  // }

  // translateColor(color: 'rouge' | 'jaune') {
  //   return color === 'rouge' ? 'red' : 'yellow';
  // }


  /* fonction de bas niveaux */
  // logger(text: string): void {
  //  //console.log(`Log: ${text}`);
  // }


}





