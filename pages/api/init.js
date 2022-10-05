// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const { Navigator } = require('node-navigator');

const initApi = (req, res) => {
  const D = new Date();
  const navigator = new Navigator();
  res.status(200).json({
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
};

export default initApi;
