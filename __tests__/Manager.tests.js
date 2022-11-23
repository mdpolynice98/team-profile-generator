const Manager = require('./lib/Manager.js');
 
describe('Manager', () => {
  it('should return the object of new Constructer', () => {
    const NM = new Manager();
    expect(new Manager([NM])).toBe('object');
  });

  it('should return object properties using the Manager Constructor', () => {
    const NM = new Manager();
    expect(NM.name).toBe();
    expect(NM.id).toBe()
    expect(NM.email).toBe()
    expect(NM.githubUsername).toBe()
  });

  it('should return object properties in the Manager Constructor', () => {
    const NM = new Manager();
    expect(NM.getname).toBe();
    expect(NM.getid).toBe()
    expect(NM.getemail).toBe()
    expect(NM.getgithubUsername).toBe()
  });


});
