import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-notarial-services',
  styleUrl: './notarial-services.css',
  templateUrl: './notarial-services.html',
})
export class NotarialServices {

showAllCategories = false;
openCategory: string | null = null;

toggleCategory(category: string): void {
  this.openCategory =
    this.openCategory === category ? null : category;
}

}
