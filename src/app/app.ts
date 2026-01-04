import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./header/header";
import { Navbar } from "./navbar/navbar";
import { Footer } from "./footer/footer";
import { Profile } from "./profile/profile";
import { LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Navbar, Footer, Profile, UpperCasePipe , LowerCasePipe , TitleCasePipe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  userName: string = "alawoddin";

  namechange() {
    this.userName = 'Alawoddin khedmat'
  }

  counter: number = 0;

  oldtitle: string = 'ANGULAR APP';

  uppercase() {
    this.oldtitle = this.oldtitle.toUpperCase();
  }

  lowercase() {
    this.oldtitle = this.oldtitle.toLowerCase();
  }
  
  protected readonly title = signal('my-angular-component');

}
