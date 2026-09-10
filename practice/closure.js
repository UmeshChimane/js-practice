const outer=function()
{
    let x=0;

    return function ()
        {
            x++;
            console.log(x);
        }
    
}

const counter =outer();
counter();
counter();
counter();

///////////////

function out()
{
    let x=0;
    return function inner()
    {
        x++;
        console.log(x);

    }
}
const counter2=out();

counter2();
counter2();
counter2();
