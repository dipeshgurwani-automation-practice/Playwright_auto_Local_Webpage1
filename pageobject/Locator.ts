import { Page, Locator } from '@playwright/test';


export class LocatorPage{
    readonly page: Page;

    //
    readonly getByRole_ExecuteAction_button:Locator;
    readonly getByLabel_emailInput:Locator;
    readonly getByPlaceholder_uniqueToken:Locator;
    readonly getByText_magicPhrase:Locator;
    readonly getByAltText_companyLogo:Locator;
    readonly getByTitle_tooltipElement:Locator;
    readonly getByTestId_secureField:Locator;
    
    //Css section
    readonly absoluteCss_cssTarget:Locator;
    readonly relativeCss_disabledInput:Locator;
    
    //Xpath section
    readonly xpath_unlockButtonXPath:Locator;
    readonly xpath_feedbackMsg:Locator; 

    //Login section
    readonly login_loginButton:Locator;
    readonly login_successMsg:Locator;
    readonly login_errorMsg:Locator;
    
    readonly login_username:Locator;
    readonly login_password:Locator;


    constructor(page:Page){
        this.page=page;

        this.getByRole_ExecuteAction_button=page.getByRole('button', { name: 'Submit Main Form' });
        this.getByLabel_emailInput=page.getByLabel('Email Address (getByLabel Target)');
        this.getByPlaceholder_uniqueToken=page.getByPlaceholder('Type unique token here...');
        this.getByText_magicPhrase=page.getByText('"Automation Is Flawless 2026"');
        this.getByAltText_companyLogo = page.getByAltText('Company Logo Corporate Asset');
        this.getByTitle_tooltipElement = page.getByTitle('Detailed system diagnostic tooltip information');
        this.getByTestId_secureField = page.getByTestId('secure-token-field');

        //Css
        this.absoluteCss_cssTarget = page.locator('div.data-container > ul > li.active-item-target');
        this.relativeCss_disabledInput= page.locator('input[name="session-status"][disabled]');

        //Login Page
        this.login_loginButton =page.getByRole('button', { name: 'Login' });
        this.login_successMsg = page.locator('text=Login successful!');
        this.login_errorMsg = page.locator('text=Please enter both username and password.');

        this.login_username = page.getByPlaceholder('Username')
        this.login_password = page.getByPlaceholder('Password')

        //Xpath
        this.xpath_unlockButtonXPath = page.locator("//td[text()='User #104']/following-sibling::td/button");
        this.xpath_feedbackMsg= page.locator('#xpath-msg');

    }
}