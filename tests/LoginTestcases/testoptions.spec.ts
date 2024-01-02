import {test as base} from '@playwright/test'

export type testoptions = {
   globalqaurl : string

}

export const test = base.extend<testoptions>(
{
   globalqaurl:['', {option: true}]

})
