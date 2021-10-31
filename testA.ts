//  QA bootcamp - Ariana Medrano
//test case A .- Login with a valid user
//Expected: Validate the user navigates to the products page when logged in

import { Selector } from 'testcafe'; // first import testcafe selectors

fixture `Getting Started`// declare the fixture
    .page `https://www.saucedemo.com/`;

test('Test case A - Login with a valid user', async t => {
    await t
        .typeText('#user-name', 'standard_user')
        .typeText('#password', 'secret_sauce')
        .click('#login-button');      
        await t.expect(Selector('#inventory_container').exists).ok();
       
});