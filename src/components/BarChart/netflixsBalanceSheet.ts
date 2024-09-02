const translations = {
  totAss: 'Total Assets',
  currAss: 'Current Assets',
  nCurrAss: 'non-Current Assets',
  totLia: 'Total Liabilities',
  curLia: 'Current Liabilities',
  nCurLia: 'non-Current Liabilities',
  totEq: 'Total Equity',
  capStock: 'Capital Stock',
  retEarn: 'Retained Earning',
  treas: 'Treasury',
  nonAffect: 'non Affected',
} as const;

export function addLabels<T extends { dataKey: keyof typeof translations }>(series: T[]) {
  return series.map((item) => ({
    ...item,
    label: translations[item.dataKey],
    valueFormatter: (v: number | null) => (v ? `$ ${v.toLocaleString()}k` : '-'),
  }));
}

export const balanceSheet = [
  {
    year: '2020',
    capStock: 3447698,
    retEarn: 7573144,
    treas: null,
  },
  {
    year: '2021',
    capStock: 4024561,
    retEarn: 12689372,
    treas: 824190,
  },
  {
    year: '2022',
    capStock: 4637601,
    retEarn: 17181296,
    treas: 824190,
  },
  {
    year: '2023',
    capStock: 5145172,
    retEarn: 22589286,
    treas: 6922200,
  },
];