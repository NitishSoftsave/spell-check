import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {KEY_CODE, TEXT} from "../constants/const";
import {MatDialog} from "@angular/material/dialog";
import {SuggestionBoxComponent} from "../suggestion-box/suggestion-box.component";

declare const Module:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  public content: String = TEXT;

  constructor(private dialog: MatDialog) { }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    if(event.keyCode == KEY_CODE.F7){
      // Your row selection code
      this.openSuggestionPopup();
    }
  }

  ngOnInit(): void {
  }

  openSuggestionPopup() {
    const dialogRef = this.dialog.open(SuggestionBoxComponent, {
      width: '450px',
    });
    dialogRef.afterClosed().subscribe(emmitedValue => {
    });
  }

}
