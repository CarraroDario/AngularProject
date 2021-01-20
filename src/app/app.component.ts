import { Component, OnInit } from '@angular/core';
import { MatCardXlImage } from '@angular/material/card';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {


  public selectType: Type = Type.Memory;
  public selectTypes = <Type[]>Object.values(Type).filter(value => typeof value !== 'number');

  public images: Array<ImmaginiDTO> =
    [
      new ImmaginiDTO('/assets/resources/prova2.jpeg', Type.Memory, "Memory"),
      new ImmaginiDTO('/assets/resources/prova2.jpeg', Type.Lattice, "Lattice"),
      new ImmaginiDTO('/assets/resources/prova2.jpeg', Type.Molle, "Molle"),
      new ImmaginiDTO('/assets/resources/prova2.jpeg', Type.Sfoderabili, "Sfoderabili"),
      new ImmaginiDTO('/assets/resources/prova2.jpeg', Type.Lattice, "Lattice 2"),
      new ImmaginiDTO('/assets/resources/prova2.jpeg', Type.Memory, "Memory 2"),

    ];

  public imagesFiltered: Array<ImmaginiDTO> = [];

  ngOnInit() {
    this.Refresh();
  }

  Refresh() {
    this.imagesFiltered = this.images.filter(x => x.type === this.selectType)
  }

}

export class ImmaginiDTO {
  imgsrc = "";
  type: Type = Type.Memory;
  header = "";

  public constructor(src: string, t: Type, h: string) {
    this.imgsrc = src;
    this.type = t;
    this.header = h;

  }

}

export enum Type {
  Molle = 0,
  Lattice,
  Memory,
  Sfoderabili
}
