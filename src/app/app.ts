import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./header/header";
import { Navbar } from "./navbar/navbar";
import { Footer } from "./footer/footer";
import { NgComponentOutlet } from "../../node_modules/@angular/common/types/_common_module-chunk";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Navbar, Footer, NgComponentOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  constructor () {}
   loadcomponent() {
      return Footer ;
    }
  protected readonly title = signal('my-angular-component');
  newtitle:  string= "alawoddin";

}
