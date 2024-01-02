import {test,expect,Page } from '@playwright/test' ;
import {ReusingLocators} from '../LoginTestcases/ReusingLocators.spec';
import { Navigation } from './PageObjects/Navigation.spec';

test('navigatepage', async({page}) =>{

    const RL = new ReusingLocators(page);

    await RL.Demoform();
    await RL.Login;

})

