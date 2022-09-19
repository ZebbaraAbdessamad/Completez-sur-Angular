import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap.model';

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsService {

  constructor() { }

  faceSnaps: FaceSnap[] = [
    {
      id:1,
      title: 'Zebbara',
      description: 'Mon meilleur ami depuis tout petit !',
      imageUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      createdDate: new Date(),
      snaps: 220,
      location:"taroudant"
    },
    {
      id:2,
      title: 'Harire',
      description: 'Un endroit magnifique pour les randonnées.',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
      createdDate: new Date(),
      snaps: 63
    },
    {
      id:3,
      title: 'jamali',
      description: 'Mmmh que c\'est bon !',
      imageUrl: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
      createdDate: new Date(),
      snaps: 230

    }
];

getAllFaceSnaps(): FaceSnap[] {
  return this.faceSnaps;
}


getFaceSnapById(faceSnapId: number): FaceSnap {
  const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
  if (!faceSnap) {
      throw new Error('FaceSnap not found!');
  } else {
      return faceSnap;
  }
}

snapFaceSnapById(faceSnapId: number, snapType: 'like' | 'dislike'): void {
  const faceSnap = this.getFaceSnapById(faceSnapId);
  snapType === 'like' ? faceSnap.snaps++ : faceSnap.snaps--;
}

}
