import { Component } from '@angular/core';

@Component({
  selector: 'ngx-footer',
  styleUrls: ['./footer.component.scss'],
  template: `
    <span class="created-by">
      Created with ♥ by <b><a href="https://marwaneladawy.github.io/portfolio/" target="_blank">Marwan El-Adawy</a></b> 2019
    </span>
    <div class="socials">
      <a href="https://github.com/MarwanELAdawy" target="_blank" class="ion ion-social-github"></a>
      <a href="https://www.linkedin.com/in/marwan-el-adawy/" target="_blank" class="ion ion-social-linkedin"></a>
    </div>
  `,
})
export class FooterComponent {
}
