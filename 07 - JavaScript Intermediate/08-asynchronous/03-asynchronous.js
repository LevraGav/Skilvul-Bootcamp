import fetch from 'node-fetch';

const getGitHubUser = async(parameter) => { 
    try {
        if (!parameter) {
            return null;
        }

        const check = await fetch("https://api.github.com/users/"+parameter);
        let temporary = await check.json();

        if (temporary.id) {
            return temporary;
        }
        return "Not Found";
    } 
    
    catch (error) 
    {
        throw (error);
    }
}

const printGitHubUser = async () => {
    const mojombo = await getGitHubUser("mojombo");
    const orange = await getGitHubUser("");
    const rudiTabuti = await getGitHubUser("rudi.tabuti");

    console.log(mojombo);
    console.log(orange);
    console.log(rudiTabuti);
}

printGitHubUser();