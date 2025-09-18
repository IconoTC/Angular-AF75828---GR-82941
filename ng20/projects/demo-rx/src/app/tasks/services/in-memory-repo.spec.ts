import { TestBed } from '@angular/core/testing';

import { InMemoryRepo } from './in-memory-repo';
import { provideZonelessChangeDetection } from '@angular/core';

describe('InMemoryRepo', () => {
  let service: InMemoryRepo;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        InMemoryRepo,
        provideZonelessChangeDetection()
      ],
    });

    service = TestBed.inject(InMemoryRepo);
    service['_data'] = [
      { id: 1, title: 'Test 1', owner: 'User 1', isCompleted: false },
      { id: 2, title: 'Test 2', owner: 'User 2', isCompleted: true },
    ];
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all tasks', async () => {
    const tasks = await service.getAll();
    expect(tasks.length).toBe(2);
  });

  it('should get task by id', async () => {
    const task = await service.getById(1);
    expect(task).toBeTruthy();
    expect(task.title).toBe('Test 1');
  });

  it('should add a new task', async () => {
    const newTask = await service.add({ title: 'Test 3', owner: 'User 3', isCompleted: false });
    expect(newTask.id).toBe(3);
    //const tasks = await service.getAll();
    const tasks = service.data;
    expect(tasks.length).toBe(3);
  });

  it('should update an existing task', async () => {
    await service.update(1, { id: 1, title: 'Updated Test 1', owner: 'User 1', isCompleted: true });
    const task = await service.getById(1);
    expect(task.title).toBe('Updated Test 1');
    expect(task.isCompleted).toBe(true);
  });

  it('should delete a task', async () => {
    await service.delete(1);
    const tasks = await service.getAll();
    expect(tasks.length).toBe(1);
    expect(tasks[0].id).toBe(2);
  });

  it('should reject getting a non-existing task', async () => {
    await expectAsync(service.getById(999)).toBeRejectedWith('Task not found');
  });

  it('should reject updating a non-existing task', async () => {
    await expectAsync(service.update(999, { id: 999, title: 'Non-existing', owner: 'User', isCompleted: false })).toBeRejectedWith('Task not found');
  });

  it('should reject deleting a non-existing task', async () => {
    await expectAsync(service.delete(999)).toBeRejectedWith('Task not found');
  });
});
