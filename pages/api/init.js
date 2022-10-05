// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const { Navigator } = require('node-navigator');

const initApi = (req, res) => {
  if (req.method === 'GET') {
    const D = new Date();
    const navigator = new Navigator();
    res.status(200).send({
      date: `${D.getFullYear().toString()}/${D.getMonth().toString()}/${D.getDay().toString()}`,
      time: `${D.getHours().toString()}:${D.getMinutes().toString()}:${D.getSeconds().toString()}:${D.getMilliseconds().toString()}`,
      navigator: {
        appVersion: navigator.appVersion,
        appName: navigator.appName,
        appCodeName: navigator.appCodeName,
        geoLocation: navigator.geolocation,
        langugaes: navigator.languages,
        online: navigator.onLine,
        pltform: navigator.platform,
        product: navigator.product,
        vendor: navigator.vendor,
        userAgent: navigator.userAgent
      }
    });
  } else {
    res.status(500).send({
      errorCode: 500,
      errorMessage: 'Not a valid method for the API'
    });
  }
};

export default initApi;
