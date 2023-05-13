import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosShellComponent } from './components/todos-shell/todos-shell.component';
import { TodosInputComponent } from './components/todos-input/todos-input.component';
import { TodosMainComponent } from './components/todos-main/todos-main.component';
import { TodosToolbarComponent } from './components/todos-toolbar/todos-toolbar.component';
import { TodosListComponent } from './components/todos-list/todos-list.component';
import { TodosItemComponent } from './components/todos-item/todos-item.component';

@NgModule({
  declarations: [
    TodosShellComponent,
    TodosInputComponent,
    TodosMainComponent,
    TodosToolbarComponent,
    TodosListComponent,
    TodosItemComponent,
  ],
  imports: [CommonModule],
  exports: [TodosShellComponent],
})
export class TodosModule {}