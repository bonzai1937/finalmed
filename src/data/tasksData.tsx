export interface TaskProps {
  id: string | number;
  task: string;
  checked: boolean;
}

export const tasksData: TaskProps[] = [
  {
    id: 1,
    task: 'Morning Jog',
    checked: false,
  },
  {
    id: 2,
    task: 'Skin Care',
    checked: true,
  },
  {
    id: 3,
    task: 'Yoga',
    checked: true,
  },
  {
    id: 4,
    task: 'Medicines',
    checked: false,
  },
  {
    id: 5,
    task: 'Hydrate',
    checked: true,
  },
];
