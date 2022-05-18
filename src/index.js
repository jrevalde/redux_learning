import store from "./store";
import * as actions from './actions';
//store has methods of getstate, subscribe, symbol, dispatch, replacerReducer *note that there is not setState method

const unsubscribe = store.subscribe( //when we subscribe to the store, we get notified everytime the store changes, this is part of the ui layer
    () => //this function gets called everytime the state of the store gets changed.
    {
        console.log("STORE CHANGED"), store.getState();
    }
);

store.dispatch(
    actions.bugAdded("Bug1")
);

unsubscribe();

store.dispatch(
    actions.bugRemoved()
);

store.dispatch(
    actions.bugResolved(1)
);













/*
import {compose, pipe} from 'lodash/fp'; //these two functions will help us solve the problem of too much parentheses when typing functional programming.
import {Map} from 'immutable';
console.log("Hello World!");

let input = " Javascript ";
let input_2 = "Jambascriptoo";
let output = "<div>" + input.trim() + "</div>";

const trim = (str) => str.trim();
const wrapDiv = (str) => `<div>${str}</div>`
const wrap = rwap => str => `<${rwap}>${str}</${rwap}>`;
const toLower = (str) => str.toLowerCase();

const result = wrapDiv(toLower(trim(input))); //this is an example of functional composition. here the order of logic read from right to left.
const result_2 = pipe(trim, toLower, wrap("span")); //pipe and compose is another example of higher order functions.\
//the pipe functions lists our functions in the order we wanna apply them. 
//the problem this wont work is because wrap("div") will return a string when the pipe function only accepts functions and not strings.
//using the currying method this now works. 
console.log(result);
console.log(result_2(input_2));
*/
