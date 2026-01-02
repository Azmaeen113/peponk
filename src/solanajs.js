const apiUrl = 'https://api.mainnet-beta.solana.com';

const tokenAddress = 'Gqqdgfkn7bcsuBQZEk9oMBkqCv1bRXvPmTLs3sQ9pump';
const decimals = 6;
const burnAddress = '11111111111111111111111111111111';

const excludedTokenAccounts = [
  '11111111111111111111111111111111',
  'Frjj7f8epH7uQiPwMqMdNawgEieoELhVdy6x49M7bDrZ',
  'Fz9nrw9FY7ohwg9XrMTod1fZCuj9C386Bb5ydpA4HCQA'
];

// -------- Helper to call Solana RPC ----------
async function getApiResponse(postData) {
  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(postData)
  });
  return response.json();
}

// -------- Total Supply ----------
async function getTotalSupply() {
  const postData = {
    jsonrpc: '2.0',
    id: 1,
    method: 'getTokenSupply',
    params: [tokenAddress]
  };

  const data = await getApiResponse(postData);
  if (data?.result?.value?.amount) {
    return Number(data.result.value.amount) / Math.pow(10, decimals);
  }
  return null;
}

// -------- Token Account Balance ----------
async function getTokenAccountBalance(account) {
  const postData = {
    jsonrpc: '2.0',
    id: 1,
    method: 'getTokenAccountBalance',
    params: [account]
  };

  const data = await getApiResponse(postData);
  if (data?.result?.value?.amount) {
    return Number(data.result.value.amount) / Math.pow(10, decimals);
  }
  return 0;
}

// -------- Circulating Supply ----------
async function getCirculatingSupply() {
  const totalSupply = await getTotalSupply();
  let excludedSupply = 0;

  for (const account of excludedTokenAccounts) {
    excludedSupply += await getTokenAccountBalance(account);
  }

  excludedSupply += await getTokenAccountBalance(burnAddress);

  return totalSupply - excludedSupply;
}

// -------- Netlify Function Handler ----------
exports.handler = async (event) => {
  const q = event.queryStringParameters?.q;

  try {
    if (q === 'totalcoins') {
      const total = await getTotalSupply();
      const burn = await getTokenAccountBalance(burnAddress);
      return {
        statusCode: 200,
        body: String(total - burn)
      };
    }

    if (q === 'circulating') {
      const circulating = await getCirculatingSupply();
      return {
        statusCode: 200,
        body: String(circulating)
      };
    }

    if (q === 'maxcoins') {
      const total = await getTotalSupply();
      return {
        statusCode: 200,
        body: String(total)
      };
    }

    return {
      statusCode: 400,
      body: 'Invalid query'
    };

  } catch (error) {
    return {
      statusCode: 500,
      body: 'Server error: ' + error.message
    };
  }
};
