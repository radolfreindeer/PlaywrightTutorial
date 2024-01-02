import {test,expect,Page } from '@playwright/test' ;

export class Navigation{

    readonly page: Page;

    constructor(page: Page){
        this.page = page ;
    } 

    async Demoform()
    {
        await this.page.goto("https://www.saucedemo.com/v1/");

    }

}