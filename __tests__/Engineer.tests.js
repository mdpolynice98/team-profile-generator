const Engineer = require('../lib/Engineer.js');

 
describe('Engineer', () => {
  it('should return the object of new Constructer', () => {
    const NEr = new Engineer();
    expect(new Engineer([NEr])).toBe('object');
  });

  it('should return object properties using the Engineer Constructor', () => {
    const NEr = new Engineer();
    expect(NEr.name).toBe();
    expect(NEr.id).toBe()
    expect(NEr.email).toBe()
    expect(NEr.githubUsername).toBe()
  });

  it('should return object properties in the Engineer Constructor', () => {
    const NEr = new Engineer();
    expect(NEr.getname).toBe();
    expect(NEr.getid).toBe()
    expect(NEr.getemail).toBe()
    expect(NEr.getgithubUsername).toBe()
  });


});