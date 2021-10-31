//  QA bootcamp - Ariana Medrano
//test case B .- Login with an invalid user
//Expected: Validate error message is displayed.

import { Selector } from 'testcafe'; // first import testcafe selectors

fixture `Getting Started`// declare the fixture
    .page `https://www.saucedemo.com/`;

test('Test case B - Login with an invalid user', async t => {
    const ErrMessage = Selector ('div.error-message-container');
    await t
        .typeText('#user-name', 'standard_use')
        .typeText('#password', 'secret_sauce')
        .click('#login-button');      
        await t.expect(ErrMessage.textContent).contains('Epic sadface:r'); 
       
});