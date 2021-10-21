import { Component, OnInit } from '@angular/core';
import { CharacterListService } from 'src/app/services/character-list.service';

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.css']
})
export class CharacterDetailComponent implements OnInit {

  character: any = undefined;

  constructor(private characterListService: CharacterListService) { }

  ngOnInit(): void {
    // Gets ID from URL
    const urlArray = window.location.href.split('/')
    const id = urlArray[urlArray.length - 1];
    const apiURL = `https://swapi.dev/api/people/${id}`

    this.characterListService.getCharacter(apiURL).subscribe((data) => {
      this.character = data;
    });

  }

}
