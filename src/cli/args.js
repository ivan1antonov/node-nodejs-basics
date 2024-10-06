const parseArgs = () => {
    const variable = process.argv.slice(2);
    let res =[];
    variable.forEach( (el, index) => {
        if(el.startsWith('--')){
          res.push(`${el.substring(2)} is ${variable[index+1]}`);
        }
    });
    console.log(res.join(', '));
    return res;
};

parseArgs();