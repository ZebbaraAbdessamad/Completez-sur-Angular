import { Component, OnInit ,OnDestroy} from '@angular/core';
import { interval, map, mergeMap, Observable, Subject, switchMap, take, takeUntil, tap } from 'rxjs';
import { FaceSnap } from 'src/app/core/models/face-snap.model';
import { FaceSnapsService } from 'src/app/core/services/face-snaps.service';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit ,OnDestroy{

  constructor(private faceSnapsService: FaceSnapsService) { }
  faceSnaps$!: Observable< FaceSnap[]>;
  private destroy$!: Subject<boolean>;

  ngOnInit(): void {
        this.faceSnaps$=this.faceSnapsService.getAllFaceSnaps();
        this.destroy$ = new Subject<boolean>();
        // interval(1000).pipe(
        //   //take(3),
        //   takeUntil(this.destroy$),
        //   tap(value=>console.log(value))
        //   ).subscribe();

  }


  ngOnDestroy():void{
    this.destroy$.next(true);
  }
}
