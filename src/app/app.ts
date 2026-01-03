import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./header/header";
import { Navbar } from "./navbar/navbar";
import { Footer } from "./footer/footer";
import { Profile } from "./profile/profile";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Navbar, Footer, Profile],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  userName: string = "alawoddin";

  namechange() {
    this.userName = 'Alawoddin khedmat'
  }
  
  
  protected readonly title = signal('my-angular-component');

}
