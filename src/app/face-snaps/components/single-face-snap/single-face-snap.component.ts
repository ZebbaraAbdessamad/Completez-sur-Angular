import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FaceSnap } from 'src/app/core/models/face-snap.model';
import { FaceSnapsService } from 'src/app/core/services/face-snaps.service';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss']
})
export class SingleFaceSnapComponent implements OnInit {

  constructor(
    private faceSnapsService: FaceSnapsService,
    private route: ActivatedRoute,
    private router:Router
  ) {}

  //faceSnap!: FaceSnap;
  faceSnap$!: Observable<FaceSnap>;
  snapButton:string='like';


  ngOnInit(): void {
    const snapId = +this.route.snapshot.params['id'];
    this.faceSnap$=this.faceSnapsService.getFaceSnapById(snapId);
  }


  /**
    literal types: scréer rapidement des types personnalisés
    Ex:
    fileType: 'image' | 'video'
   */

  onSnap( faceSnapId:number) {
    if (this.snapButton === 'like') {
      this.faceSnap$=this.faceSnapsService.snapFaceSnapById(faceSnapId,'like').pipe(
        tap(()=> this.snapButton = 'dislike')
      );
      // this.faceSnapsService.snapFaceSnapById(faceSnapId, 'like').subscribe();
      // this.faceSnap$ = this.faceSnapsService.getFaceSnapById(faceSnapId);
      //   this.snapButton = 'dislike';

    } else {
      this.faceSnap$=this.faceSnapsService.snapFaceSnapById(faceSnapId,'dislike').pipe(
        tap(()=> this.snapButton = 'like')
      );

      // this.faceSnapsService.snapFaceSnapById(faceSnapId, 'dislike').subscribe();
      // this.faceSnap$ = this.faceSnapsService.getFaceSnapById(faceSnapId);
      // this.snapButton = 'like';
    }
  }

  onBack():void{
    this.router.navigateByUrl('facesnaps');
  }


}
