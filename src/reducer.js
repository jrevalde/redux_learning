import {BUG_ADDED, BUG_REMOVED, BUG_RESOLVED} from './actionTypes';

let last_id = 0;


//THIS APPROACH IS THE IF ELSE APPROACH BUT SWITCH CASE APPROACH IS BETTER

/*
function reducer(state = [], action)//it's important to set the default state over here to avoid error of initial state being undefined.
{
    if(action.type === 'BUG_ADDED')
    {
        return(
            [
                ...state,
                {
                    id: ++last_id,
                    description: action.payload.description,
                    resolved: false
                    
                }
            ]
           
        );
    }
    else if(action.type === 'BUG_REMOVED')
    {
       state.filter(bug => bug.id !== action.payload.id)
    }
    //if the type of action is neither of these then it is safe to return the state as it is
    return state;
}
*/

export default function reducer(state = [], action)
{
    switch(action.type)
    {
        case BUG_ADDED:
            return(
                [
                    ...state,
                    {
                        id: ++last_id,
                        description: action.payload.description,
                        resolved: false
                        
                    }
                ]
               
            );
        case BUG_REMOVED:
            state.filter(bug => bug.id !== action.payload.id)
        case BUG_RESOLVED:
                // find the id of the resolved bug ... bug_id = action.payload.id
                //return the ...state, assign resoloved: true
                return (
                    //using the map method, we are mapping this array to a new array. checking each element if it has the same id as the bug that has been resolved. then we assign it as resolved.
                    state.map(bug => bug.id !== action.payload.id ? bug : {...bug, resolved: true})
                );
                
    
        default:
            return state;
    }
}