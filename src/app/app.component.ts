import {Component} from '@angular/core';
import {OverlayContainer} from '@angular/cdk/overlay';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  darkTheme = false;

  constructor(protected oc: OverlayContainer) {
  }

  toggleTheme(darkTheme: boolean) {
    this.darkTheme = darkTheme;
    let myTheme: string = darkTheme ? 'my-dark-theme' : 'my-app-theme';
    this.oc.getContainerElement().classList.add(myTheme);
    // dialog主题切换貌似没起作用，待研究

    // remove old theme class and add new theme class
    // we're removing any css class that contains '-theme' string but your theme classes can follow any pattern
    // this.oc.getContainerElement().classList.add(myTheme);
    // const overlayContainerClasses = this.oc.getContainerElement().classList;
    // const themeClassesToRemove = Array.from(overlayContainerClasses).filter((item: string) => item.includes('-overlay'));
    // overlayContainerClasses.remove(...themeClassesToRemove);
    // // overlayContainerClasses.add(newThemeClass);
    // // console.log(JSON.stringify(themeClassesToRemove));
    // console.log(JSON.stringify(overlayContainerClasses));
  }
}
