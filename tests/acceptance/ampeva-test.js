import {
  module,
  test,
} from 'qunit';

import { 
  visit,
  currentURL,
} from '@ember/test-helpers';

import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | ampeva', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /, validating text', async function(assert) {
    const emptyString = '';
    const newLine4Spaces = '\n    ';
    const newLine8Spaces = '\n        ';
    const newLine12Spaces = '\n            ';
    const newLine16Spaces = '\n                ';
    const newLine20Spaces = '\n                    ';
    await visit('/');

    assert.equal(currentURL(), '/');

    const whoAreWe = this.element.querySelector('.who-are-we').childNodes;
    // console.log('whoAreWe:', whoAreWe);
    assert.equal(whoAreWe.length, 7);
    assert.equal(whoAreWe[0].textContent, newLine12Spaces);
    assert.equal(whoAreWe[1].textContent, emptyString);
    assert.equal(whoAreWe[2].textContent, newLine12Spaces);
    assert.equal(whoAreWe[3].textContent, 'Who are we?');
    assert.equal(whoAreWe[4].textContent, newLine12Spaces);
    assert.equal(whoAreWe[5].textContent, 'Ampeva is a consulting organization with a primary focus in Process Safety and Risk Management.  Services are based on years of experience in compliance with 29 CFR 1910.119 (OSHA Process Safety Management of Highly Hazardous Chemicals) and 40 CFR Part 68 (EPA‐ Risk Management Plan).   Paired with a diverse background in onshore Natural Gas E&P, midstream Gas Processing/Treating/NGL Fractionation, and the Chemical Processing Industry, Ampeva delivers a first‐class product for its client.');
    assert.equal(whoAreWe[6].textContent, newLine8Spaces);

    const contactUs = this.element.querySelector('.contact-us').childNodes;
    assert.equal(contactUs.length, 5);
    assert.equal(contactUs[0].textContent, newLine16Spaces);
    assert.equal(contactUs[1].textContent, 'Contact us today');
    assert.equal(contactUs[2].textContent, newLine16Spaces);
    const contactUsText = contactUs[3].childNodes;
    assert.equal(contactUsText.length, 12);
    assert.equal(contactUsText[0].textContent, newLine20Spaces);
    assert.equal(contactUsText[1].textContent, 'Email');
    assert.equal(contactUsText[2].textContent, emptyString);
    assert.equal(contactUsText[3].textContent, newLine20Spaces);
    assert.equal(contactUsText[4].textContent, 'info@ampeva.com');
    assert.equal(contactUsText[5].textContent, emptyString);
    assert.equal(contactUsText[6].textContent, newLine20Spaces);
    assert.equal(contactUsText[7].textContent, 'Phone');
    assert.equal(contactUsText[8].textContent, emptyString);
    assert.equal(contactUsText[9].textContent, newLine20Spaces);
    assert.equal(contactUsText[10].textContent, '903.238.1488 or 512.496.1802');
    assert.equal(contactUsText[11].textContent, newLine16Spaces);
    assert.equal(contactUs[4].textContent, newLine12Spaces);

    const whatWeDo = this.element.querySelector('.what-we-do').childNodes;
    // console.log('whatWeDo:', whatWeDo);
    assert.equal(whatWeDo.length, 5);
    assert.equal(whatWeDo[0].textContent, newLine8Spaces);
    const firstSectionWhatWeDo = whatWeDo[1].childNodes;
    // console.log('firstSectionWhatWeDo:', firstSectionWhatWeDo);
    assert.equal(firstSectionWhatWeDo.length, 5);
    assert.equal(firstSectionWhatWeDo[0].textContent, newLine12Spaces);
    assert.equal(firstSectionWhatWeDo[1].textContent, 'What we do');
    assert.equal(firstSectionWhatWeDo[2].textContent, newLine12Spaces);

    const firstSectionWhatWeDoList = firstSectionWhatWeDo[3].childNodes;
    assert.equal(firstSectionWhatWeDoList.length, 9);
    assert.equal(firstSectionWhatWeDoList[0].textContent, newLine16Spaces);
    assert.equal(firstSectionWhatWeDoList[1].textContent, 'Overall Review, Strategy, Development and Implementation Support of PSM/RMPPrograms.  This can be done at the Plant or Corporate level to help your organization apply the most “fit for purpose” practices while complying with PSM/RMP.  Solutions are tailored to your needs.');
    assert.equal(firstSectionWhatWeDoList[2].textContent, newLine16Spaces);
    assert.equal(firstSectionWhatWeDoList[3].textContent, 'A full review of Process Safety Information (PSI) at your facility with reference to potential gaps in complying with PSM/RMP regulation or Industry Recognized and Generally Accepted Good Engineering Practice (RAGAGEP).');
    assert.equal(firstSectionWhatWeDoList[4].textContent, newLine16Spaces);
    // 40)
    assert.equal(firstSectionWhatWeDoList[5].textContent, 'Development of site‐specific Mechanical Integrity Programs at your facility.  This involves (1) building an accurate equipment list using a combination of PSI review and field verification, (2) assigning industry specific ITPM Type Tasks (Inspection, Testing, and Preventive Maintenance) to each piece of equipment, (3) identifying required or recommended frequency of the ITPM Task, and (4) assisting your organization in solutions for overall program execution.');
    assert.equal(firstSectionWhatWeDoList[6].textContent, newLine16Spaces);
    assert.equal(firstSectionWhatWeDoList[7].textContent, 'Project Compliance with PSM/RMP.  A full plan customized to your project can be put in place to ensure needed documentation (QA/QC & PSI) is being assembled, completed and provided during all phases.');
    assert.equal(firstSectionWhatWeDoList[8].textContent, newLine12Spaces);
    assert.equal(firstSectionWhatWeDo[4].textContent, newLine8Spaces);
    assert.equal(whatWeDo[2].textContent, newLine8Spaces);

    const secondSectionWhatWeDo = whatWeDo[3].childNodes;
    // console.log('secondSectionWhatWeDo:', secondSectionWhatWeDo);
    assert.equal(secondSectionWhatWeDo.length, 3);
    assert.equal(secondSectionWhatWeDo[0].textContent, newLine12Spaces);

    const secondSectionWhatWeDoList = secondSectionWhatWeDo[1].childNodes;
    assert.equal(secondSectionWhatWeDoList.length, 15);
    assert.equal(secondSectionWhatWeDoList[0].textContent, newLine16Spaces);
    // 50)
    assert.equal(secondSectionWhatWeDoList[1].textContent, 'Facilitation of Process Hazard Analysis (PHA) Studies.  PHAs can be completed during the conceptual/design phase of a project, as an “Initial PHA” at a facility, or as a PHA Revalidation.');
    assert.equal(secondSectionWhatWeDoList[2].textContent, newLine16Spaces);
    assert.equal(secondSectionWhatWeDoList[3].textContent, 'Review and Development of Operating or Maintenance Procedures to meet the regulatory requirements of PSM/RMP.');
    assert.equal(secondSectionWhatWeDoList[4].textContent, newLine16Spaces);
    assert.equal(secondSectionWhatWeDoList[5].textContent, 'Review, Development, and Delivery of Training Programs to meet the regulatory requirements of PSM/RMP.');
    assert.equal(secondSectionWhatWeDoList[6].textContent, newLine16Spaces);
    assert.equal(secondSectionWhatWeDoList[7].textContent, 'Leading Investigations related to Occupational/Process Safety Incidents and issuing reports with findings/recommendations.');
    assert.equal(secondSectionWhatWeDoList[8].textContent, newLine16Spaces);
    assert.equal(secondSectionWhatWeDoList[9].textContent, 'PSM/RMP Compliance Auditing.  As an alternative to a Compliance Audit, an Assessment can be completed to highlight potential areas of improvement.');
    assert.equal(secondSectionWhatWeDoList[10].textContent, newLine16Spaces);
    // 60)
    assert.equal(secondSectionWhatWeDoList[11].textContent, 'Assistance in the development, update or review of Risk Management Plans submitted to the EPA as part of compliance with the RMP Rule.');
    assert.equal(secondSectionWhatWeDoList[12].textContent, newLine16Spaces);
    assert.equal(secondSectionWhatWeDoList[13].textContent, 'Review and update or creation of new drawings associated with your Facility (e.g. P&IDs, Block Flow Diagrams, or Plot Plans).  Whether large or small, our organization partners with professional Draftsman that can handle your Drafting needs.');
    assert.equal(secondSectionWhatWeDoList[14].textContent, newLine12Spaces);
    assert.equal(secondSectionWhatWeDo[2].textContent, newLine8Spaces);
    assert.equal(whatWeDo[4].textContent, newLine4Spaces);
  });
});
