import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { RoutingModule } from './componebt-routing.module';
import { ComponentComponent } from './component.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { CalendarComponent } from './date-picker/calendar/calendar.component';
import { DayButtonComponent } from './date-picker/day-button/day-button.component';
import { DatePickerPipe } from './date-picker/date-picker.pipe';
import { ToolbarComponent } from './date-picker/toolbar/toolbar.component';
import { DateDisplayComponent } from './date-picker/date-display/date-display.component';
import { MonthComponent } from './date-picker/month/month.component';
import { AmapComponent } from './amap/amap.component';
import { MarkdownComponent } from './markdown/markdown.component';
import { PaginationComponent } from './pagination/pagination.component';
import { PopoverComponent } from './popover/popover.component';
import { PopoverDirective } from './popover/popover.directive';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    RoutingModule
  ],
  declarations: [
    DatePickerComponent,
    CalendarComponent,
    PaginationComponent,
    ComponentComponent,
    AmapComponent,
    MarkdownComponent,
    DatePickerPipe,
    DayButtonComponent,
    ToolbarComponent,
    DateDisplayComponent,
    MonthComponent,
    PopoverComponent,
    PopoverDirective
  ],
  exports: [
    DatePickerComponent,
    PaginationComponent,
    AmapComponent,
    MarkdownComponent,
    PopoverComponent
  ]
})
export class ComponentModule { }
