import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tf-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css']
})
export class SnackbarComponent implements OnInit {

  message: string = 'Hello there!'

  constructor() { }

  ngOnInit() {
  }

}
