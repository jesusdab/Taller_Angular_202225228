/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing'; 
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';
import { HttpClientModule } from '@angular/common/http';
import { SeriesComponent } from './series.component';
import { SeriesService } from './series.service';
import { Series } from './series';

describe('BookListComponent', () => {
 let component: SeriesComponent;
 let fixture: ComponentFixture<SeriesComponent>;
 let debug: DebugElement;

 beforeEach(async(() => {
   TestBed.configureTestingModule({
     imports: [HttpClientModule],
     declarations: [ SeriesComponent ],
     providers: [ SeriesService ]
   })
   .compileComponents();
 }));


 beforeEach(() => {
   fixture = TestBed.createComponent(SeriesComponent);
   component = fixture.componentInstance;
   component.series = [
     new Series(faker.number.int(), faker.lorem.sentence(), faker.person.fullName(), faker.number.int())
   ]

   fixture.detectChanges();
   debug = fixture.debugElement;
 });

 it('should create', () => {
   expect(component).toBeTruthy();
 });

 it("Component has a table", () => {
   expect(debug.query(By.css("tbody")).childNodes.length).toBeGreaterThan(0);
 });

 it('should have an dd element ', () => {
   const dd = debug.query(By.css('dd'));
   const content: HTMLElement = dd.nativeElement;
   expect(content.textContent).toEqual(component.series[0].name)
 });


});