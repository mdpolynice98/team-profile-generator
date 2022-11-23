const Employee = require('../lib/employee.js');

 
describe('Employee', () => {
  it('should return the object of new Constructer', () => {
    const NEp = new Employee();
    expect(new Employee([NEp])).toBe('object');
  });

  it('should return object properties using the Employee Constructor', () => {
    const NEp = new Employee();
    expect(NEp.name).toBe();
    expect(NEp.id).toBe()
    expect(NEp.email).toBe()
    expect(NEp.githubUsername).toBe()
  });

  it('should return object properties in the Employee Constructor', () => {
    const NEp = new Employee();
    expect(NEp.getname).toBe();
    expect(NEp.getid).toBe()
    expect(NEp.getemail).toBe()
    expect(NEp.getgithubUsername).toBe()
  });


});

