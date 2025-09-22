import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskList } from './task-list';
import { provideZonelessChangeDetection } from '@angular/core';
import { InMemoryRepo } from '../../services/in-memory-repo';
import { By } from '@angular/platform-browser';
import { TaskDTO } from '../../models/task';

describe('TaskList', () => {
  let component: TaskList;
  let fixture: ComponentFixture<TaskList>;

  const mockRepo: InMemoryRepo = jasmine.createSpyObj(
    'InMemoryRepo',
    {
      getAll: Promise.resolve([]),
      getById: Promise.resolve(),
      add: Promise.resolve(),
      update: Promise.resolve(),
      delete: Promise.resolve(),
    },
    {
      data: [],
    },
  );

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskList],
      providers: [
        provideZonelessChangeDetection(),
        {
          provide: InMemoryRepo,
          useValue: mockRepo,
        },
      ],
    }).compileComponents();

  

    fixture = TestBed.createComponent(TaskList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    expect(mockRepo.getAll).toHaveBeenCalled();
  });

  it('should add a task', async () => {
    const taskData: TaskDTO = {
      title: 'Test Task',
      owner: 'Test Owner',
      isCompleted: false,
    };

    (mockRepo.add as jasmine.Spy).and.resolveTo({
      id: 1, ...taskData
    });

    // mockRepo.data= [{
    //   id: 1, ...taskData
    // }];

    const addTaskDebugComponent = fixture.debugElement.query(By.css('ind-task-add'))
    addTaskDebugComponent.triggerEventHandler('eventAdd', taskData);
    fixture.detectChanges();
    
    expect(mockRepo.add).toHaveBeenCalledWith(taskData);
    // expect(component.tasks().length).toBe(1);
    // expect(component.tasks()[0].title).toBe('Test Task');
    // expect(component.tasks()[0].owner).toBe('Test Owner');
  });
});
