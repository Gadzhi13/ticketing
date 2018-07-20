import { DateIfDatePipe } from './date-if-date.pipe';

describe('DateIfDatePipe', () => {
  it('create an instance', () => {
    const pipe = new DateIfDatePipe();
    expect(pipe).toBeTruthy();
  });
});
