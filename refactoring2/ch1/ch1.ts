export interface Invoice {
  customer: string;
  performances: Performance[];
}

export interface Performance {
  playID: string;
  audience: number;
}

type Type = 'tragedy' | 'comedy';

export interface PlayInfo {
  name: string;
  type: Type;
}

interface Plays extends Record<string, PlayInfo> {}

export default function statement(invoice: Invoice, plays: Plays) {
  // get play name
  function playFor(aPerformance: Performance) {
    return plays[aPerformance.playID];
  }

  // get the cost of the play
  function amountFor(aPerformance: Performance) {
    let thisAmount = 0;

    switch (playFor(aPerformance).type) {
      case 'tragedy': // 비극
        thisAmount = 40000;

        if (aPerformance.audience > 30) {
          thisAmount += 1000 * (aPerformance.audience - 30);
        }
        break;
      case 'comedy': // 희극
        thisAmount = 30000;

        if (aPerformance.audience > 20) {
          thisAmount += 10000 + 500 * (aPerformance.audience - 20);
        }
        thisAmount += 300 * aPerformance.audience;

        break;

      default:
        throw new Error(`알 수 없는 장르 : ${playFor(aPerformance).type}`);
    }

    return thisAmount;
  }

  //
  let totalAmount = 0;
  let volumeCredits = 0;
  let result = `청구내역 (고객명: ${invoice.customer})\n`;

  const format = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format;

  for (let perf of invoice.performances) {
    let thisAmount = amountFor(perf);

    // 포인트를 적립한다.
    volumeCredits += Math.max(perf.audience - 30, 0);

    // 희극 관객 5명마다 추가 포인트를 제공한다.
    if ('comedy' === playFor(perf).type) {
      volumeCredits += Math.floor(perf.audience / 5);
    }

    result += `${playFor(perf).name} : ${format(thisAmount / 100)} (${
      perf.audience
    }석)\n`;
    totalAmount += thisAmount;
  }

  result += `총액: ${format(totalAmount / 100)}\n`;
  result += `적립 포인트: ${volumeCredits}점\n`;

  return result;
}
