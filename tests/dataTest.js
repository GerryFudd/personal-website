const resume = require('../src/data/resume.json');
const responseResume = require('../src/data/returnedData.json');
const {expect} = require('chai');
console.log(resume);
describe('resume data', () => {
  it('should have the same keys', () => {
    expect(Object.keys(resume).length).to.equal(Object.keys(responseResume).length);
    expect(resume).to.include.all.keys(Object.keys(responseResume));
  });
  it('should have the same profile data', () => {
    expect(resume.name).to.equal(responseResume.name);
    expect(resume.email).to.equal(responseResume.email);
    expect(resume.portfolio).to.equal(responseResume.portfolio);
    expect(resume.url).to.equal(responseResume.url);
    expect(resume.careerStartDate).to.equal(responseResume.careerStartDate);
    expect(resume.briefMessage).to.equal(responseResume.briefMessage);
  });
  it('should have the smae summary data', () => {
    expect(resume.summary).to.deep.equal(responseResume.summary);
  });
  it('should have the same experiences', () => {
    [
      'education',
      'otherExperience',
      'personalProjects',
      'technicalExperience'
    ].forEach(type => {
      const responseExperience = responseResume[type];
      resume[type].forEach((experience, index) => {
        expect(experience.name).to.deep.equal(responseExperience[index].name);
        expect(experience.title).to.deep.equal(responseExperience[index].title);
        expect(experience.dates).to.deep.equal(responseExperience[index].dates);
        expect(experience.urls.map(url => url.url)).to.include.members(responseExperience[index].urls.map(url => url.url));
        expect(experience.projects.map(project => `${project.name}-${project.techsUsed}`)).to.include.members(responseExperience[index].projects.map(project => `${project.name}-${project.techsUsed}`));
        expect(experience.description.map(description => description.body)).to.include.members(responseExperience[index].description.map(description => description.body));
        expect(experience.otherItems.map(item => item.body)).to.include.members(responseExperience[index].otherItems.map(item => item.body));
      });
    });
  });
});