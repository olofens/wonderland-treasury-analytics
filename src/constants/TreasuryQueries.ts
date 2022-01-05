export const treasuryQuery = `
query {
    protocolMetrics(first: 1000, orderBy: timestamp, orderDirection: desc) {
      id
      timestamp
      treasuryMIMMarketValue
      treasuryWAVAXMarketValue
      treasuryWETHMarketValue
      treasuryMIMFromWETHMIMJLP
      treasuryMIMFromTIMEMIMJLP
      treasuryWETHValueFromWETHMIMJLP
      treasuryWAVAXValueFromWAVAXTIMEJLP
      treasuryMIMFromWMEMOMIMSLP
    }
  }
`;

export const ustDegenboxQuery = `
query {
  ustdegenboxMetrics(first: 1000 orderBy: timestamp, orderDirection: desc) {
    id
    timestamp
    collateral
    debt
  }
}
`;

export const ETHBalancesQuery = `
query {
  tokenBalancesMetrics(first: 1000, orderBy: timestamp, orderDirection: desc) {
    id
    timestamp
    MIMCount
    MIMValue
    CVXCount
    CVXValue
    WBTCCount
    WBTCValue
    CRVCount
    CRVValue
    ETHCount
    ETHValue
  }
}
`;

export const SSPELLQuery = `
query {
    stakedSpellMetrics(first: 1000, orderBy: timestamp, orderDirection: desc) {
      id
      timestamp
      SPELLPrice
      SPELLSSPELLRatio
      SSPELLPrice
      SSPELLCount
      SSPELLValue
    }
}
`;

export const PopsicleWBTCWETHQuery = `
query {
  popsicleWBTCWETHMetrics(first: 1000, orderBy: timestamp, orderDirection: desc) {
    id
    timestamp
    WBTCPrice
    WETHPrice
    WBTCCount
    WETHCount
    WBTCValue
    WETHValue
    combinedValue
  }
}`;
