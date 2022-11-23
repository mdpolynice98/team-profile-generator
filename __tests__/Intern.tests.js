const Intern = require('../lib/Intern.js');

 
describe('Intern', () => {
  it('should return the object of new Constructer', () => {
    const IN = new Intern();
    expect(new Intern([IN])).toBe('object');
  });

  it('should return object properties using the Intern Constructor', () => {
    const IN = new Intern();
    expect(IN.name).toBe();
    expect(IN.id).toBe()
    expect(IN.email).toBe()
    expect(IN.githubUsername).toBe()
  });

  it('should return object properties in the Intern Constructor', () => {
    const IN = new Intern();
    expect(IN.getname).toBe();
    expect(IN.getid).toBe()
    expect(IN.getemail).toBe()
    expect(IN.getgithubUsername).toBe()
  });


});