import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatNativeDateModule, MatDatepickerModule, MatIconModule, MatCheckboxModule, MatCardModule, MatFormFieldModule, MatInputModule, MatListModule, MatRadioModule} from '@angular/material';
import {MatToolbarModule} from '@angular/material';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatToolbarModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatRadioModule,
    BrowserAnimationsModule

  ],
    exports: [
      MatButtonModule,
      MatToolbarModule,
      MatNativeDateModule,
      FormsModule,
      MatDatepickerModule,
      MatIconModule,
      MatButtonModule,
      MatCheckboxModule, 
      MatToolbarModule, 
      MatCardModule,
      MatFormFieldModule,
      MatInputModule,
      MatListModule,
      MatRadioModule
      
    ]

})
export class MaterialModule { }
