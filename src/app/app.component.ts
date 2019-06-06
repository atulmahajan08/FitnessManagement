import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

export interface EdibleElement {
  name: string;
  position: number;
  calorie: number;
  action: string;
}

const ELEMENT_DATA: EdibleElement[] = [
  {position: 1, name: 'Apple', calorie: 1.0079, action: 'Add'},
  {position: 2, name: 'Orange', calorie: 4.0026, action: 'Add'},
  {position: 3, name: 'Pineapple', calorie: 6.941, action: 'Add'},
  {position: 4, name: 'Watermelon', calorie: 9.0122, action: 'Add'},
  {position: 5, name: 'Chapati', calorie: 10.811, action: 'Add'},
  {position: 6, name: 'Egg', calorie: 12.0107, action: 'Add'},
  {position: 7, name: 'Chicken Breast', calorie: 14.0067, action: 'Add'},
  {position: 8, name: 'Fish', calorie: 15.9994, action: 'Add'},
  {position: 9, name: 'Soyabean', calorie: 18.9984, action: 'Add'},
  {position: 10, name: 'Rice', calorie: 20.1797, action: 'Add'},
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Reactive forms';

  displayedColumns: string[] = ['position', 'name', 'calorie', 'action'];
  dataSource = ELEMENT_DATA;

  angForm: FormGroup;
  bmiForm: FormGroup;

  constructor(private fb: FormBuilder)
  {
    this.createForm();
    this.createbmiForm();
  }

  

  createForm(){
    this.angForm= this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],      
    });
  }

  createbmiForm(){
    this.bmiForm= this.fb.group({
      height: ['', Validators.required],
      weight: ['', Validators.required],      
    });
  }

  value: any;

  submit(angForm){
    this.value=angForm;
    }

  // typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];

}
