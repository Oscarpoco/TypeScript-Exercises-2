interface ICalculator
{
    add(a:number, b:number): number;

    subtract(a:number, b:number): number;

    multiply(a:number, b:number): number;

    divide(a:number, b:number): number | String;
}

class BasicCalculator implements ICalculator
{
    add(a:number, b:number): number
    {
        return a + b;
    }

    subtract(a:number, b:number): number
    {
        return a - b;
    }

    multiply(a:number, b:number): number
    {
        return a * b;
    }

    divide(a:number, b:number): number | String
    {
        if (b === 0)
        {
            throw new Error('Number cannot be divided by zero');
        }
        return a | b;
    }
}

const mycalculator = new BasicCalculator();