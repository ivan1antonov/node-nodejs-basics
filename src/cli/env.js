const parseEnv = () => {
    const envVar = process.env;

    const rssVar = Object.entries(envVar);

    const resVar = rssVar
      .filter( ([key]) => key.startsWith("RSS_"))
      .map(([key, value]) => `${key}=${value}`)
      .join('; ');

    console.log(resVar);
    return resVar;
};

parseEnv();