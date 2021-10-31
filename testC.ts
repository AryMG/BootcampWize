//  QA bootcamp - Ariana Medrano
//test case C .- Logout from the home page
//Expected: Validate the user navigates to the login page.

import { Selector } from 'testcafe'; // first import testcafe selectors

fixture `Getting Started`// declare the fixture
    .page `https://www.saucedemo.com/`;

test('Test case C', async t => {
    await t
        .typeText('#user-name', 'standard_user')
        .typeText('#password', 'secret_sauce')
        .click('#login-button');  
        
    await t
        .click('#react-burger-menu-btn')
        .click('#logout_sidebar_link');

    await t.expect(Selector('#login_button_container').exists).ok();
       
});