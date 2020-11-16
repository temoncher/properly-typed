import { TypedString } from './typed-string';

const str = '  hey, 0123456, toWhAt?  ';
const tString = new TypedString(str);

const chAt = tString.charAt(3);
const con = tString.concat('lets do some', ' !!! ', 'che cks', '', '', '', '', '', '', '', '');
const rep = tString.repeat(14);
const slice = tString.slice(2, 5);
const split = tString.split('');
const substr = tString.substr(4, 4);
const lower = tString.toLowerCase();
const upper = tString.toUpperCase();
const trim = tString.trim();
