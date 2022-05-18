import { BUG_ADDED, BUG_REMOVED, BUG_RESOLVED } from "./actionTypes";

export function bugAdded(description)
{
    return({
        type: BUG_ADDED,
        payload: {
            description: description
        }
    });
}

export function bugRemoved(id)
{
    return(
        {
            type: BUG_REMOVED,
            payload: {
                id: id //for this action the reducer only needs the id of the bug
            }
        }
    );
}

export function bugResolved(id)
{
    return(
        {
            type: BUG_RESOLVED,
            payload: {
                id: id //this is the only info that I think we need
            }
        }
    );
}