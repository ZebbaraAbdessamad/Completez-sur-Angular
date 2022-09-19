export class FaceSnap{

  // syloble ! est utilisé pour l'interé de n'est pas obligatoire de initialisé le variable
  // syloble ! est utilisé pour l'interé de n'est pas obligatoire de montioné le variable (facultative /optionnel)

  //troiséme déclartion sans constructeur
    id!: number;
    title!: string;
    description!: string;
    imageUrl!: string;
    createdDate!: Date;
    snaps!: number;
    location?: string;


  //premier declaration par constructor
    // constructor(public title: string,
    // public description: string,
    // public imageUrl: string,
    // public createdDate: Date,
    // public snaps: number,
    // public location?: string) {
    // }

//deuxieme decalaration simple
/*  title: string;
    description: string;
    createdDate: Date;
    snaps: number;
    imageUrl: string;

    constructor(title: string, description: string, imageUrl: string, createdDate: Date, snaps: number) {
      this.title = title;
      this.description = description;
      this.imageUrl = imageUrl;
      this.createdDate = createdDate;
      this.snaps = snaps;
    }
   */

}
