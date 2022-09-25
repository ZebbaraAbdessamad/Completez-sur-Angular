import { Component, OnInit ,Input} from '@angular/core';
import { Router } from '@angular/router';
import { FaceSnap } from 'src/app/core/models/face-snap.model';
@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {

  constructor(private router:Router) {}

  @Input() faceSnap!: FaceSnap;

  ngOnInit(): void {
  }

  onviewSnap():void{
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
  }

}
