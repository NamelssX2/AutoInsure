let visitedIPs = [];

exports.handler = async (event, context) => {
  const clientIP = event.headers['x-forwarded-for'] || event.headers['client-ip'] || 'unknown';

  if (visitedIPs.includes(clientIP)) {
    return {
      statusCode: 403,
      body: JSON.stringify({ message: "Already visited!" }),
    };
  } else {
    visitedIPs.push(clientIP);
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Welcome!" }),
    };
  }
};
