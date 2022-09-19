import { Component, OnInit  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FaceSnap } from '../models/face-snap.model';
import { FaceSnapsService } from '../services/face-snaps.service';

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

  faceSnap!: FaceSnap;
  snapButton:string='like';


  ngOnInit(): void {
    const snapId = +this.route.snapshot.params['id'];
    this.faceSnap=this.faceSnapsService.getFaceSnapById(snapId);
  }


  /**
    literal types: scréer rapidement des types personnalisés
    Ex:
    fileType: 'image' | 'video'
   */

  onSnap() {
    if (this.snapButton === 'like') {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id,'like');
      this.snapButton = 'dislike';
    } else {
      this.faceSnapsService.snapFaceSnapById(this.faceSnap.id,'dislike');
      this.snapButton = 'like';
    }
  }

  onBack():void{
    this.router.navigateByUrl('facesnaps');
  }


}
