import { Component } from '@angular/core';

const liftDataset = [
  {
    exercise: 'bench',
    sets: '3',
    reps: '10',
  },
  {
    exercise: 'shoulder press',
    sets: '3',
    reps: '10',
  },
  {
    exercise: 'rope pushdowns',
    sets: '3',
    reps: '10',
  },
  {
    exercise: 'squat',
    sets: '5',
    reps: '10,10,8,6,4',
  },
  {
    exercise: 'pullups x bent over row',
    sets: '3',
    reps: '10,8,6',
  },
];

const cardioDataset = [
  {
    exercise: 'run',
    time: null,
    distance: '1 mile',
  },
  {
    exercise: 'row',
    time: '15:00',
    distance: null,
  },
];

interface TableConfig {
  dataSource: any;
  displayedColumns: string[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  liftTableConfig: TableConfig;
  cardioTableConfig: TableConfig;
  selected: Date | null | undefined;

  constructor() {
    this.liftTableConfig = {
      dataSource: liftDataset,
      displayedColumns: ['exercise', 'sets', 'reps', 'update'],
    };
    this.cardioTableConfig = {
      dataSource: cardioDataset,
      displayedColumns: ['exercise', 'time', 'distance'],
    };
  }
}
