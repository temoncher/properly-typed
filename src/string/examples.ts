import { TypedString } from './typed-string';

const str = '  hey, 0123456, toWhAt?  ';
const tString = new TypedString(str);

const chAt = tString.charAt(3);
const con = tString.concat('lets do some', ' !!! ', 'che cks');
const rep = tString.repeat(5);
const slice = tString.slice();
const split = tString.split('h');
const substr = tString.substr(4, 4);
const lower = tString.toLowerCase();
const upper = tString.toUpperCase();
const trim = tString.trim();
